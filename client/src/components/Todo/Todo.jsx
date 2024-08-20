import "./Todo.scss";
import { useState, useEffect } from "react";
import { getTodo } from "../../lib/api-projects.js";
import { TodoItem } from "./TodoItem.jsx";

import {
  postTodo,
  deleteTodoItem,
  editTodoItem,
} from "../../lib/api-projects.js";

export const Todo = ({ projectId }) => {
  const [todo, setTodo] = useState(null);
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState("");
  const [edit, setEdit] = useState(0);

  useEffect(() => {
    getTodo(setTodo, projectId);
  }, [edit, projectId]);

  const addTask = async (text) => {
    const newTask = {
      description: text,
      status: "open",
    };

    try {
      await postTodo(projectId, newTask);
      setEdit((edit) => edit + 1);
    } catch (error) {
      console.error(error);
    }

    setTasks([...tasks, newTask]);
    setText("");
  };

  const deleteTask = async (id) => {
    try {
      await deleteTodoItem(projectId, id);
      setEdit((edit) => edit + 1);
    } catch (error) {
      console.error(error);
    }
    setTasks(todo.filter((task) => task.id !== id));
  };

  const toggleCompleted = (id) => {
    setTasks(
      todo.map(async (task) => {
        if (task.id === id) {
          try {
            if (task.status === "open") {
              task.status = "done";
            } else {
              task.status = "open";
            }
            await editTodoItem(projectId, id, { status: `${task.status}` });
            setEdit((edit) => edit + 1);
          } catch (error) {
            console.error(error);
          }
          return { ...task, status: task.status };
        } else {
          return task;
        }
      })
    );
  };

  if (!todo) return "Loading...";

  return (
    <main className="todo__components">
      <section className="todohero_section">
        <div>
          {todo.filter((item) => item.status === "done").length}/{todo.length}
        </div>
      </section>
      <div className="todo-list">
        {todo.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleCompleted={toggleCompleted}
          />
        ))}
        <div className="add__form">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="add"
            placeholder="Add task here"
          />
          <div className="button-container">
            <button onClick={() => addTask(text)} className="add__button">
              +
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
