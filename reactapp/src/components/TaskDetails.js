import React from "react";

function TaskDetails({ task, onUpdateStatus }) {
  return (
    <div>
      <h2>Task Details</h2>
      <p>Name: {task.name}</p>
      <p>Current: {task.status}</p>

      <button onClick={() => onUpdateStatus("pending")}>Pending</button>
      <button onClick={() => onUpdateStatus("in progress")}>In Progress</button>
      <button onClick={() => onUpdateStatus("completed")}>Completed</button>
    </div>
  );
}

export default TaskDetails;

