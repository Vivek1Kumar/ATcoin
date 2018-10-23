import React,{Component} from 'react'
import './Upcoming.css'

class Upcoming extends Component
{
    render(){
        return(
            <div className="container-fluid upcoming">
                <div className="container">
                    <br/><br/>
                    <div className="row">
                    <div className="col-xl-3">
                        <div className="card">
                        <div className="card-body">
                        <span className="sc_events_item_day">11</span><br/>
                        <p>November 2018</p>
                        <h5>Blockchain Week</h5>
                            <div className="details">
                            <p>Participation of ATcoin in blockchain week in London</p>

                            </div>
                        <button className="hvr-shutter-out-vertical">Read More</button>
                        </div>
                        </div>
                        </div>
                        <div className="col-xl-3">
                        <div className="card">
                        <div className="card-body">
                        <span className="sc_events_item_day">14</span><br/>
                        <p>December 2018</p>
                        <h5>Ethyl Voting </h5>
                        <div className="details">
                            <p>“The Ethyl Community Fund Proposal has started their voting.”</p>

                            </div> 
                            <button className="hvr-shutter-out-vertical">Read More</button>
                        </div>
                        </div>
                        </div>
                        <div className="col-xl-3">
                        <div className="card">
                        <div className="card-body">
                        <span className="sc_events_item_day">23</span><br/>
                        <p>February 2019</p>
                        <h5>Chainges Conference</h5>
                        <div className="details">
                            <p>Join the first world-class quality blockchain and cryptocurrency</p>

                            </div>                        
                            <button className="hvr-shutter-out-vertical">Read More</button>
                        </div>
                        </div>
                        </div>
                        <div className="col-xl-3">
                        <div className="card">
                        <div className="card-body">
                        <span className="sc_events_item_day">19</span><br/>
                        <p>April 2018</p>
                        <h5>Catapult Release</h5>
                        <div className="details">
                        <p>Catapult ATcoin (version 2.0) will come sometime this year</p>

                        </div>
                        <button className="hvr-shutter-out-vertical">Read More</button>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
                    
            </div>

        );
    }
}
export default Upcoming