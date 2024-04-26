import React, { useState } from "react";
import "./../styles/App.css";
import Task from "./Task"; // Import the Task component

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [allTasks, setAllTasks] = useState([]);

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setAllTasks([...allTasks, inputValue]);
      setInputValue("");
    }
  };

  const removeTask = (index) => {
    const updatedTasks = allTasks.filter((task, i) => i !== index); // Filter out the task to remove
    setAllTasks(updatedTasks); // Update the tasks list
  };

  return (
    <div className="container">
      <h1 className="heading">To-Do List</h1>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputValue}
          placeholder="Add New Task"
          required
        />
        <button>Add Todo</button>
      </form>
      <ul className="all-tasks">
        {allTasks.map((task, index) => (
          <Task key={index} task={task} index={index} removeTask={removeTask} />
        ))}
      </ul>
    </div>
  );
};

export default App;
