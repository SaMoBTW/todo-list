/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

function ToDo_List() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handle_input_change(event) {
    setNewTask(event.target.value);
  }
  function add_task() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...tasks, newTask]);
      setNewTask("");
    }
  }
  function delete_task(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);

    setTasks(updatedTasks);
  }

  function move_task_up(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];

      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  function move_task_down(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];

      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  return (
    <div className="to-do-list">
      <h1>To-Do List</h1>

      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handle_input_change}
        />
        <button className="add-button" onClick={add_task}>
          Add Task
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button
              className="delete-button"
              onClick={() => delete_task(index)}
            >
              Delete
            </button>
            <button className="move-button" onClick={() => move_task_up(index)}>
              Up
            </button>
            <button
              className="move-button"
              onClick={() => move_task_down(index)}
            >
              Down
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDo_List;
