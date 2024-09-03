import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, removeTask, doneTask }) => {
  return (
    <div className="mb-3">
      <h3 className="font-bold font-mono text-xl mb-3">
        Task List (Total {tasks.length}, Done{" "}
        {tasks.filter((el) => el.isDone).length})
      </h3>
      {tasks.map((el) => (
        <Task
          key={el.id}
          job={el}
          removeTask={removeTask}
          doneTask={doneTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
