import React, { useState } from "react";

const CreateTask = ({ addTask }) => {
  const [job, setJob] = useState("");
  const handleOnChange = (event) => {
    setJob(event.target.value);
  };

  const handleAddTaskBtn = () => {
    addTask(job);
    setJob("");
  };
  return (
    <div className="flex mb-5">
      <input
        type="text"
        placeholder="Write your new task"
        className="flex-grow bg-slate-100 border border-slate-300 rounded-l-lg p-2"
        value={job}
        onChange={handleOnChange}
      />
      <button
        className="bg-slate-300 border-2 border-slate-300 rounded-r-lg py-2 px-4"
        onClick={handleAddTaskBtn}
      >
        Add Task
      </button>
    </div>
  );
};

export default CreateTask;
