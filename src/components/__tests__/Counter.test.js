import React from 'react';
import Counter from '../counter';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

it('renders without crushing', ()=>{
    shallow(<Counter />);
});

test('should match snapshot', ()=>{
    const wrapper = shallow(<h1>My Counter</h1>);
    expect(wrapper).toMatchSnapshot();
})
test('should match snapshot', ()=>{
    const component = renderer.create(<Counter />).toJSON();
    expect(component).toMatchSnapshot();
})