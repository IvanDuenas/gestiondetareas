import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, deleteTask, toggleCompletion }) => {
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <Task 
            key={task.id} 
            task={task} 
            deleteTask={deleteTask}  
            toggleCompletion={toggleCompletion} 
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;









