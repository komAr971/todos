import { redirect } from "react-router-dom";

import todos from './todos.js';

export function getTodos() {
  return todos;
}

export function getTodo({ params }) {
  const key = +params.key;
  const todo = todos.find(current => current.key === key);
  if (!todo) {
    throw new Error()
  }
  return todo;
}

export async function addTodo({ request }) {
  const fd = await request.formData();
  const date = new Date();
  const newTodo = {
    title: fd.get('title'),
    desc: fd.get('desc'),
    image: fd.get('image'),
    done: false,
    createdAt: date.toLocaleString(),
    key: date.getTime()
  };
  todos.push(newTodo);
  return redirect('/');
}

export function actTodo({ params, request }) {
  const key = +params.key;
  const todoIndex = todos.findIndex(current => current.key === key);
  if (request.method === 'PATCH') {
    todos[todoIndex].done = true;
  } else if (request.method === 'DELETE') {
    todos.splice(todoIndex, 1);
  }
  return redirect('/')
}