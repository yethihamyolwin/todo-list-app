import React, { useState } from "react";
import Heading from "./components/Heading";
import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTask] = useState([
    "Finish writing report",
    "Call the client",
    "Prepare presentation slides",
    "Review the team's progress",
    "Send the weekly update email",
    "Schedule meeting with the design team",
    "Update project management tool",
    "Organize files",
    "Plan next week's agenda",
    "Research new market trends",
  ]);

  const addTask = (newTask) => {
    setTask([...tasks, newTask]);
  };

  const removeTask = (taskToRemove) => {
    setTask(tasks.filter((task) => task !== taskToRemove));
  };

  return (
    <div className="p-10">
      <Heading />
      <CreateTask addTask={addTask} />
      <TaskList tasks={tasks} removeTask={removeTask} />
    </div>
  );
};

export default App;
