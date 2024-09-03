import React from "react";

const Task = ({ job: { id, task, isDone }, removeTask, doneTask }) => {
  const handleRemoveTask = () => {
    if (confirm("Are you sure to delete")) {
      removeTask(id);
    }
  };

  const handleOnChange = () => {
    doneTask(id);
  };
  return (
    <div className="flex justify-between items-centerborder p-3 rounded-lg mb-3 last:mb-0">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={isDone}
          className="size-4"
          onChange={handleOnChange}
        />
        <p className={isDone ? "line-through" : ""}>{task}</p>
      </div>

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
