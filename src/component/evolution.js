import React,{Component} from 'react'
import "../style/evolution.css"


class Evolution extends Component{
    render(){
        return( 
            <div className="container-fluid evolution">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                    <br/>
                    <img className="img-fluid " src={require("../asset/pic5.png")}/>
                    </div>
                    <div className="col-xl-6"><br/><br/>
                    <h2 className="sc_item_title sc_title_title sc_align_left sc_item_title_style_default">
                    Digital Currency<br/> Evolution</h2>
                    <p>What’s next? We want digital currencies to be so easy to use your Grandma would use 
                    them. Lymcoin Evolution will enable you to signup and access your Lymcoin from any device and transact as easily 
                    as you can with PayPal, but in a fully decentralized way. Stay tuned…</p>
                    <button className="btn btn-lg hvr-bounce-to-top">LEARN MORE</button>
                    </div>
                </div>
            </div><br/>
            </div>
        );
    }
}

export default Evolution