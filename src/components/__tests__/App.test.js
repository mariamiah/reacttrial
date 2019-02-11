import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { shallow, mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });


it('renders without crashing', ()=>{
    const div = document.createElement('div');
    ReactDOM.render(<App />, div)
})

test('render a label', ()=>{
    const wrapper = shallow(<label>First name</label>);
    expect(wrapper).toMatchSnapshot();
});