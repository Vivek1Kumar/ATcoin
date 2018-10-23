import React,{Component} from 'react'
import './Team.css'

class Team extends Component {
    render(){
        return(
            <div className="container ">
            <div className="row team">
                    <div className="col-xl-12">
                    <h1>Team &amp; Advisors</h1>
                    <p className="">With a team of top technology and finance professionals, the nonprofit ATcoin expands access 
                        to low-cost financial services to fight poverty and maximize individual potential.</p>
                        
                     <div className="container text-center ">
			        	<h1 className="text-center text-white " >Our Team</h1>
					        <div className="row">
						        <div className="col-md-3 col-sm-3 col-lg-3 col-xs-12">
							        <div className="imageBg">
 								    <img className="image mx-auto d-block" src={require('../../asset/user/pic1.jpg')}/>
 								    <h4 className="upperCase fontWeight">MOHAMMAD NASSER SULTAN </h4>
 								    <h4 className="fontWeight green">BUSINESS CONLTANT</h4>
							        </div>
						        </div>
						
						        <div className="col-md-3 col-sm-3 col-lg-3 col-xs-12">
							        <div className="imageBg">
 								    <img className="image mx-auto d-block img-fluid" src={require('../../asset/user/pic4.jpg')}/>
 								    <h4 className="upperCase fontWeight">ROSELLA.R </h4>
 								    <h4 className="fontWeight green">BUSINESS DEVELOPMENT ADVISOR</h4>
							        </div>
						        </div>
                                <div className="col-md-3 col-sm-3 col-lg-3 col-xs-12">
							        <div className="imageBg">
 								    <img className="image mx-auto d-block img-fluid" src={require('../../asset/user/pic6.jpg')}/>
 								    <h4 className="upperCase fontWeight">DR. SUMIT</h4>
 								    <h4 className="fontWeight green">BUSINESS DEVELOPMENT HEAD</h4>
							        </div>
						        </div>
                                <div className="col-md-3 col-sm-3 col-lg-3 col-xs-12">
							        <div className="imageBg">
 								    <img className="image mx-auto d-block img-fluid" src={require('../../asset/user/pic7.jpg')}/>
 								    <h4 className="upperCase fontWeight">NAGRAJ</h4>
 								    <h4 className="fontWeight green">TECHNICAL HEAD</h4>
							        </div>
						        </div>
					        </div>
		             </div>
					</div>
                </div>
                <br/><br/>
            </div>

        );
    }
}
export default Team
