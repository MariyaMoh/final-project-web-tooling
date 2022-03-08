import { render, screen } from '@testing-library/react';
import React from 'react';
// import App from './App';
import TodoList from './components/TodoList';
import '@testing-library/jest-dom';

//test1
test('render h1 element', () => {
  render(<TodoList />);
  expect(screen.getByTestId('heading')).toBeInTheDocument();
});

//test2
export const removeElement = (id, arr) => {
  return arr.filter((todo) => todo.id !== id);
};
const todos = [
  {
    id: '1',
    task: 'take a walk'
  },
  {
    id: '2',
    task: 'Call Mom'
  },
  {
    id: '3',
    task: 'prepare for presentation'
  }
];

const expected = [
  {
    id: '1',
    task: 'take a walk'
  },
  {
    id: '2',
    task: 'Call Mom'
  }
];

it('it removes an element', () => {
  expect(removeElement('3', todos)).toMatchObject(expected);
});

//test3
export const addNewTodo = (todo, todos) => {
  if (!todo.text || /^\s*$/.test(todo.text)) {
    return todos;
  }

  const newTodos = [todo, ...todos];
  return newTodos;
};

describe('Test for add todo', () => {
  const todo1 = {
    id: '4',
    text: 'learn arabic'
  };

  const todo2 = {
    id: '5',
    text: ''
  };
  const todos1 = [
    {
      id: '1',
      text: 'take a walk'
    }
  ];

  const expected = [
    {
      id: '4',
      text: 'learn arabic'
    },
    {
      id: '1',
      text: 'take a walk'
    }
  ];

  it('returns the updated array', () => {
    expect(addNewTodo(todo1, todos1)).toMatchObject(expected);
  });

  it('return the same array', () => {
    expect(addNewTodo(todo2, todos1)).toMatchObject(todos1);
  });
});
