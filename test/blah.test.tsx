import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { RangeBar } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RangeBar />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
