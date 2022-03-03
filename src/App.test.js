import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';
import TodoList from './components/TodoList';
import '@testing-library/jest-dom';

test('render h1 element', () => {
  render(<TodoList />);

  screen.debug();

  expect(screen.getByText('Whats the Plan for Today?')).toBeInTheDocument();
});
