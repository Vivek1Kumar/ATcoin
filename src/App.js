import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';
import Navbar from './component/navbar'
import Home from './component/home'
import Login from './component/authentication/Login';
import Registration from './component/authentication/Registration';
import Team from './component/team/Team';
import Contact from './component/contact/Contact';
import Linechart from './component/charts/Linechart';
import Upcoming from './component/upcoming/Upcoming';

class App extends Component {
  render() {
    return (
      <div className="App">   
       <BrowserRouter>
          <div>
            <Navbar/>
              <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/login" component={Login} />
                <Route path="/registration" component={Registration} />
                <Route path="/team" component={Team} />
                <Route path="/contact" component={Contact} />
                <Route path="/linechart" component={Linechart} />
              </Switch>
          </div>      
        </BrowserRouter>   
      </div>
    );
  }
}

export default App;
