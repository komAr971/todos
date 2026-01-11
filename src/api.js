import { redirect } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

import todos from './todos.js';
import firebaseApp from './firebase.js';

const auth = getAuth(firebaseApp);

export async function register({ request }) {
  const fd = await request.formData();
  try {
    //const oUC = 
    await createUserWithEmailAndPassword(
      auth,
      fd.get('email'),
      fd.get('password')
    );
    return redirect('/')
  } catch (err) {
    return err.code;
  }
}

export function setStateChangeHandler(func) {
  return onAuthStateChanged(auth, func)
}

export async function login({ request }) {
  const fd = await request.formData();
  try {
    await signInWithEmailAndPassword(auth, fd.get('email'), fd.get('password'))
    return redirect('/')
  } catch (err) {
    return err.code;
  }
}

export async function logout() {
  await signOut(auth);
  return redirect('/login');
}

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