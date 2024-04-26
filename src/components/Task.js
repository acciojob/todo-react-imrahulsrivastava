import React from "react";

const Task = ({ task, index, removeTask }) => {
  return (
    <li className="task">
      {task}
      <button onClick={() => removeTask(index)}>Delete</button>
    </li>
  );
};

export default Task;
