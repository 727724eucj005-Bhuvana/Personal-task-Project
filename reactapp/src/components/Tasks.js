import React, { useState } from "react";
import TaskList from "./TaskList";
import TaskDetails from "./TaskDetails";

function Tasks() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Task One", description: "First task", status: "pending" },
    { id: 2, name: "Task Two", description: "Second task", status: "completed" }
  ]);

  const [selectedTask, setSelectedTask] = useState(null);

  const handleViewDetails = (task) => {
    setSelectedTask(task);
  };

  const updateStatus = (status) => {
    const updatedTasks = tasks.map(t =>
      t.id === selectedTask.id ? { ...t, status } : t
    );
    setTasks(updatedTasks);
    setSelectedTask({ ...selectedTask, status });
  };

  return (
    <div>
      <TaskList tasks={tasks} onView={handleViewDetails} />
      {selectedTask && (
        <TaskDetails task={selectedTask} onUpdateStatus={updateStatus} />
      )}
    </div>
  );
}

export default Tasks;

