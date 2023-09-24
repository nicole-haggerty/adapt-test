"use client";
import { useState } from 'react';

import { MdDone } from "react-icons/md";
import { MdClose } from "react-icons/md";

export const Todos = () => {

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Get some milk",
      completed: false,
    },
    {
      id: 2,
      title: "Phone the dentist",
      completed: false,
    },
    {
      id: 3,
      title: "Paint the fence",
      completed: false,
    },
    {
      id: 4,
      title: "Email the boss",
      completed: false,
    },
    {
      id: 5,
      title: "Buy some flowers",
      completed: false,
    },
  ]);


  const handleCompleteTodo = (id) => {
    const todoUpdate = todos.map((todo) => { // This could be reduced by using .filter or .find
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(todoUpdate);
  }

  const handleDeleteTodo = (id) => {
    const todoUpdate = todos.filter((todo) => todo.id !== id);
    setTodos(todoUpdate);
  }

    return (
      <div className="p-3 rounded-md shadow-md border w-80 h-40">
        <ul>
          {todos.map((todo) => ( 
            <li key={todo.id} className="flex items-center justify-between">
              <span className={todo.completed ? "line-through" : ""}>
                {todo.title}
              </span>
              <span className="space-x-3">
                <button onClick={() => handleCompleteTodo(todo.id)}>
                  <MdDone className="h-5 w-5 text-green-500" />
                </button>
                <button onClick={() => handleDeleteTodo(todo.id)}>
                  <MdClose className="h-5 w-5 text-red-500" />
                </button>
              </span>
            </li> 
          ))}
        </ul>
      </div>
    );
  }
export default Todos;