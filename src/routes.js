import { createRoutesFromElements, createBrowserRouter, Route } from "react-router-dom";

import App from './App.js';
import TodoList from './TodoList.js';
import TodoAdd from './TodoAdd.js';
import { getTodos, addTodo } from "./api.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} element={<TodoList />} loader={getTodos} />
      <Route path='add' element={<TodoAdd />} action={addTodo} />
    </Route>
  )
);

export default router;