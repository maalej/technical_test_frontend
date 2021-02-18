import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

test('renders all buttons', () => {
  const root = document.createElement("div");
  ReactDOM.render(<App />, root);
  
  const allButtons = root.querySelectorAll('button');
  expect(allButtons.length).toBe(6);
});
