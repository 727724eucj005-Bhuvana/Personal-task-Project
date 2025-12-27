import React from "react";

function TaskList({ tasks, onView }) {
  return (
    <div>
      {tasks.map(task => (
        <div key={task.id}>
          <p>{task.name} - {task.status}</p>
          <button onClick={() => onView(task)}>View Details</button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;

