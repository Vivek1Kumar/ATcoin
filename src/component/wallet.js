import React,{Component} from 'react'
import '../style/wallet.css'

class Wallet extends Component
{
    render(){
        return(
            <div className="container-fluid ">
            <div className="row wallet">
                    <div className="col-xl-6">
                        <img className="img-fluid" src={require('../asset/pic7.png')}/>
                    </div>
                    <div className="col-xl-6">
                    <h2 className="">ATcoin Wallets</h2>
                    <img className="img-fluid" src={require('../asset/pic10.PNG')}/>
                    </div>
            </div>
            </div>
        );
    }
}
export default Wallet