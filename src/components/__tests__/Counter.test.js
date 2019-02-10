import React from 'react';
import Counter from '../counter';
import ReactDOM from 'react-dom';

it('renders without crushing', ()=>{
    const div = document.createElement('div');
    ReactDOM.render(<Counter />, div)
})