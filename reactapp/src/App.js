import React, { useState } from "react";
import Tasks from "./components/Tasks";
import TaskForm from "./components/TaskForm";

function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <h1>Task Management</h1>

      <button onClick={() => setShowForm(true)}>Add Task</button>
      <button onClick={() => setShowForm(false)}>Task List</button>

      {showForm ? <TaskForm /> : <Tasks />}
    </div>
  );
}

export default App;

