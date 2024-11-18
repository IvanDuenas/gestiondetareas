export const saveTasks = (tasks) => {
  const port = window.location.port; 
  const key = `tasks-${port}`; 
  localStorage.setItem(key, JSON.stringify(tasks)); 
};

// Función para cargar las tareas
export const loadTasks = () => {
  const port = window.location.port; 
  const key = `tasks-${port}`; 
  const savedTasks = localStorage.getItem(key); 
  if (savedTasks) {
    return JSON.parse(savedTasks); 
  }
  return []; 
};

  
  
  
  
  
  
  
  
  
  
  
  