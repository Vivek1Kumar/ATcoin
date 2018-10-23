import React,{Component} from 'react'
import "../style/navbar.css"
import {Link} from 'react-router-dom';

class Navbar extends  Component {
    render(){
        return(
            <nav className="navbar navbar-expand-md fixed-top">
                <Link className="navbar-brand" to="/"><h2>ATcoin</h2></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                <Link className="nav-link" to="/">HOME</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/">RESOURCES</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/team">TEAM</Link>
                </li> 
                <li className="nav-item">
                <Link className="nav-link" to="/">FEATURE</Link>
                </li> 
                <li className="nav-item">
                <Link className="nav-link" to="/">COMMUNITY</Link>
                </li> 
                <li className="nav-item">
                <Link className="nav-link" to="/contact">CONTACT</Link>
                </li> 
                <li className="nav-item">
                <Link className="nav-link" to="/login">LOGIN</Link>
                </li>               
                </ul>
                </div> 
            </nav>
        );
    }    
}

export default Navbar