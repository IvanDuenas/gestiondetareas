import React from 'react';
import { Link } from 'react-router-dom';

const Task = ({ task, deleteTask, toggleCompletion }) => {
  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <button
        className={`status-btn ${task.completed ? 'completed-btn' : 'pending-btn'}`}
        onClick={() => toggleCompletion(task.id)}  
      >
        {task.completed ? 'Tarea completada' : 'Tarea pendiente'}
      </button>

      <Link to={`/task/${task.id}`} className="task-link">
        <span className={`task-text ${task.completed ? 'completed-text' : ''}`}>
          {task.title}
        </span>
      </Link>

      <button onClick={() => deleteTask(task.id)}>Eliminar</button> 
    </div>
  );
};

export default Task;












