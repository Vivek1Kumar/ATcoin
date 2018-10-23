import React,{Component} from 'react'
import '../style/network.css'

class Network extends Component{
    render() {
        return(
            <div className="container-fluid network">
                <div className="container network1">
                <div className="row">
                    <div className="col-xl-6">
                    <h2 className="">Growing Global <br/>Network</h2>
                    <p>ATcoin is rapidly gaining popularity among crypto community. Lots of real companies and exchanges have 
                        adopted our coin already. There is much more to come. Stay tuned.</p>
                    </div>
                    <div className="col-xl-6">
                    <img className="img-fluid" src={require('../asset/p4.png')}/>
                    </div>
                </div>
                </div>              
            </div>
        );
    }
}
export default Network