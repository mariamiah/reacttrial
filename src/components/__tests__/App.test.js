import React from 'react';
import App from '../App';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router'
import { shallow } from 'enzyme';



test('render a label', ()=>{
    const wrapper = shallow(<label>First name</label>);
    expect(wrapper).toMatchSnapshot();
});

test('should match the snapshot', () => {
  const component = renderer.create(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  ).toJSON();
  expect(component).toMatchSnapshot();
});

test('should render signup header', ()=>{
  const wrapper = shallow(<App />);
  const header = <strong>Sign up</strong>;
  expect(wrapper.contains(header)).toEqual(true);
})

