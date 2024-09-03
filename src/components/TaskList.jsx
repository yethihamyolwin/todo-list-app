import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, removeTask }) => {
  return (
    <div className="mb-3">
      <h3 className="font-bold font-mono text-xl mb-3">
        Task List (Total {tasks.length}, Done {0})
      </h3>
      {tasks.map((task) => (
        <Task key={task} task={task} removeTask={removeTask} />
      ))}
    </div>
  );
};

export default TaskList;
