import React from 'react';
import ReactDOM from 'react-dom';
import Nav from '../Nav';
import { Link } from 'react-router-dom';
import { shallow, mount } from 'enzyme';


it('renders without crashing', ()=>{
    
    let wrapper = document.createElement('div');
    ReactDOM.render(<Nav />, wrapper)
    

})