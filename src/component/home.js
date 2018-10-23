import React,{Component} from 'react'
import '../style/home.css'
import Resource from '../component/resources'
import Benefits from '../component/benefits'
import Evolution from '../component/evolution'
import Roadmap from '../component/roadmap'
import Network from '../component/network'
import Wallet from '../component/wallet'
import Team from '../component/team/Team'
import Linechart from './charts/Linechart';
import Upcoming from './upcoming/Upcoming';
import Countdown from '../component/countdown/Countdown'

import {Link} from 'react-router-dom'



class Home extends Component {
    render(){
        const currentDate = new Date();
        const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
       
        return(            
            <div className="container-fluid">
                <section className="home">
                    <div className="container ">
                        <div className="row contain">
                            <div className="col-xl-6">
                                <h1>Secure and Anonymous<br/> Cryptocurrency</h1><br/><br/>
                                <button className="btn btn-lg hvr-bounce-to-top">
                                    <Link className="nav-link" to="/registration">GET STARTED</Link>
                                </button>                                    
                            </div>
                            <div className="col-xl-6">
                                <img className="img-fluid" src={require('../asset/pic1.png')}/>
                            </div>                            
                        </div>
                    </div>
                </section>
                <Resource/>
                <Benefits/><br/>
                <h1>Evolution</h1>
                <Evolution/>
                <Roadmap/><br/>
                <h1>Networks</h1><br/>
                <Network/>
                <Wallet/>
                <div>
                    <h1>Charts</h1><br/>
                        <Linechart /> 
                </div>
                <div>
                    <h1>Upcoming Events</h1><br/><br/>
                       <Upcoming /> 
                </div> 
                <div>
                    <Countdown date={`${year}-12-24T00:00:00`} />
                </div>          
            </div>
        );
    }
}
export default Home