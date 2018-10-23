import React,{Component} from 'react'
import '../style/roadmap.css'

class Roadmap extends Component
{
    render(){
        return(
            <div className="container-fluid">
            <h1 className="roadmap">Roadmap</h1>
            <img className="img-fluid" src={require('../asset/roadmap.png')}/>

            </div>

        );
    }
}
export default Roadmap