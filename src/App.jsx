import React, { useState } from "react";
import Heading from "./components/Heading";
import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTask] = useState([
    { id: 1, task: "Finish writing report", isDone: true },
    { id: 2, task: "Call the client", isDone: false },
    { id: 3, task: "Prepare presentation slides", isDone: false },
    { id: 4, task: "Review the team's progress", isDone: false },
    { id: 5, task: "Send the weekly update email", isDone: true },
    { id: 6, task: "Schedule meeting with the design team", isDone: false },
    { id: 7, task: "Update project management tool", isDone: false },
    { id: 8, task: "Organize files", isDone: false },
    { id: 9, task: "Plan next week's agenda", isDone: false },
    { id: 10, task: "Research new market trends", isDone: true },
  ]);

  const addTask = (newTask) => {
    setTask([...tasks, newTask]);
  };

  const removeTask = (id) => {
    setTask(tasks.filter((task) => task.id !== id));
  };

  const doneTask = (id) => {
    setTask(
      tasks.map((el) => (el.id === id ? { ...el, isDone: !el.isDone } : el))
    );
  };

  return (
    <div className="p-10">
      <Heading />
      <CreateTask addTask={addTask} />
      <TaskList tasks={tasks} removeTask={removeTask} doneTask={doneTask} />
    </div>
  );
};

export default App;
