"use client";

import { Component } from "react";
import { MdDone } from "react-icons/md";
import { MdClose } from "react-icons/md";

const todos = [
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
];

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: todos,
    };
  }

  handleCompleteTodo(id) {
    const todos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }

      return todo;
    });

    this.setState({ todos: todos });
  }

  handleDeleteTodo(id) {
    const todos = this.state.todos.filter((todo) => todo.id !== id);

    this.setState({ todos: todos });
  }

  render() {
    return (
      <div className="p-3 rounded-md shadow-md border w-80 h-40">
        <ul>
          {this.state.todos.map((todo) => (
            <li key={todo.id} className="flex items-center justify-between">
              <span className={todo.completed ? "line-through" : ""}>
                {todo.title}
              </span>
              <span className="space-x-3">
                <button onClick={() => this.handleCompleteTodo(todo.id)}>
                  <MdDone className="h-5 w-5 text-green-500" />
                </button>
                <button onClick={() => this.handleDeleteTodo(todo.id)}>
                  <MdClose className="h-5 w-5 text-red-500" />
                </button>
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Todos;
