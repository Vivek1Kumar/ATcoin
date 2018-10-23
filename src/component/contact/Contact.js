import React,{Component} from 'react'
//import '../style/team.css'

class Contact extends Component{
    render(){
        return(
        	<div className='row'>
                <div className="col-sm-3"></div>        	
        	    <form className="form-group col-sm-6">
        		<br/><br/><br/><br/><br/>
        		<h2>Contact Us</h2><br/>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Full Name"
                  /><br/>
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Email"
                  /><br/>
				<div>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Mobile no."
                  />
                </div><br/>
                <div>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Subject."
                  />
                </div><br/>
                <input type="submit" className="btn btn-info  mt-4" />
              </form>
              <div className="col-sm-3"></div>
			</div>
        )
    }
}

export default Contact;