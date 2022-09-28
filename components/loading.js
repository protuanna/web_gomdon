import {InfinitySpin} from "react-loader-spinner";

export default function Loading(/*{ children }*/) {

    return (
        <div>
            <div style={{width:'100%',height:'100vh',textAlign:'center', verticalAlign:'middle' }}>
                <InfinitySpin
                    width='200'
                    color="#ed1c2a"
                />
            </div>
        </div>
    )
}
