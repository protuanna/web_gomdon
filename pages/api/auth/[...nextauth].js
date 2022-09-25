import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import {login} from '../../../lib/api_gomdon';
export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            id: "username-login", // <- add this line
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "credentials",
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                username: { label: "Username", type: "text", placeholder: "098999999" },
                password: {  label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                let result = await login(credentials.username, credentials.password);
                if(result.result === true){
                    let data = result.data
                    if(data.user.type === 'customer'){
                        return {
                            phone:data.user.name,
                            name: data.user.name,
                            access_token: data.access_token,
                        };
                    }
                    result.message = 'Tài khoản không tồn tại'
                }
                throw new Error(result.message)
            }
        })
    ],
    secret:'WaV+XXE/Vfca6SXUndN3fE4wZHTHrkfbKxztwv3SjdM=',
    pages: {
        signIn: '/login',
    },
    callbacks: {
        async jwt({ token, user, account, profile }) {

            if (user) {
                user && (token.user = {
                    phone:user.phone,
                    name:user.name
                })
                token.accessToken = user.access_token
            }
            return token
        },
        async session({ session, token, user }) {
            session.user = token.user
            session.accessToken = token.accessToken
            return session
        },
        /*async redirect({ url, baseUrl }) {
            // Allows relative callback URLs
            if (url.startsWith("/")) return `${baseUrl}${url}`
            // Allows callback URLs on the same origin
            else if (new URL(url).origin === baseUrl) return url
            return baseUrl
        }*/
    }
}
export default NextAuth(authOptions)
