import React from 'react';
import Counter from '../counter';
import ReactDOM from 'react-dom';
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({adapter: new Adapter()});

it('renders without crashing', ()=>{
    const div = document.createElement('div');
    ReactDOM.render(<Counter />, div)
})

test('renders a header', ()=>{
    const wrapper = shallow(<h1>My Counter</h1>);
    expect(wrapper).toMatchSnapshot();
})
// const wrapper = shallow(<Counter />)
// // it('renders without crushing', ()=>{
// //     const div = document.createElement('div');
// //     ReactDOM.render(<Counter />, div)
// // })