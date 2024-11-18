import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  
  const handleTitleChange = (e) => {
    setTaskTitle(e.target.value);  
  };

  
  const handleDescriptionChange = (e) => {
    setTaskDescription(e.target.value);  
  };


  const handleSubmit = (e) => {
    e.preventDefault();  

    if (taskTitle.trim() === '' || taskDescription.trim() === '') {
      return;  
    }

    
    const newTask = {
      id: Date.now(),  
      title: taskTitle,
      description: taskDescription,
      completed: false,  
    };

    
    addTask(newTask);

    
    setTaskTitle('');
    setTaskDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={taskTitle}
        onChange={handleTitleChange}  
        placeholder="Añadir nueva tarea"
        required
      />
      <textarea
        value={taskDescription}
        onChange={handleDescriptionChange}  
        placeholder="Descripción de la tarea"
        required
      />
      <button type="submit">Añadir tarea</button>
    </form>
  );
};

export default TaskForm;











