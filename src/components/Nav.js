import React from 'react';
import { Link, Route, BrowserRouter as Router  } from 'react-router-dom';


class Nav extends React.Component{
    render(){
        return(
    
            <div>
                <header>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/articles">Articles</a></li>  
                </header>
            </div>

        )
    }

}
export default Nav;