import React from 'react';
import { Link, Route, BrowserRouter as Router  } from 'react-router-dom';


class Nav extends React.Component{
    render(){
        return(
    
            <div>
                <header>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/articles">Articles</Link></li>  
                </header>
            </div>

        )
    }

}
export default Nav;