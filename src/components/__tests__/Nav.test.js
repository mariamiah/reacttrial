import React from 'react';
import Nav from '../Nav';
import { MemoryRouter } from 'react-router';
import renderer from 'react-test-renderer';



test('should render without crushing', () => {
    const component = renderer.create(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });