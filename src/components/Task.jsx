import React from "react";

const Task = ({ task, removeTask }) => {
  const handleRemoveTask = () => {
    if (confirm("Are you sure to delete")) {
      removeTask(task);
    }
  };
  return (
    <div className="flex justify-between items-centerborder p-3 rounded-lg mb-3 last:mb-0">
      <p>{task}</p>
      <button
        className="bg-red-100 border-2 border-red-100 rounded-lg py-2 px-4 text-sm text-red-700"
        onClick={handleRemoveTask}
      >
        Delete
      </button>
    </div>
  );
};

export default Task;
