import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
  } from 'react-router-dom';
import React, {Component} from 'react';
import Home from '../components/Home';
import About from '../components/About';
import Article from '../components/Article';
import App from '../components/App';

class Routes extends Component{
    render(){
        return(
                <Router>
                    <div>
                    <Route path="/" exact strict component={App}/>
                    <Route path="/home" exact path="/home" strict component={Home}/>
                    <Route exact path="/about" strict component={About}/>
                    <Route exact path="/articles" strict component={Article}/>
                    </div>
                </Router>
        )
    }
}

  
export default Routes;