import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Filter from './components/Filter';
import TaskDetail from './components/TaskDetail';
import { loadTasks, saveTasks } from './utils/localstorage';  
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [showForm, setShowForm] = useState(false);

  // Cargar tareas desde localStorage al inicio
  useEffect(() => {
    const loadedTasks = loadTasks();  
    setTasks(loadedTasks); 
  }, []);

  // Guardar tareas en localStorage cada vez que cambian
  useEffect(() => {
    if (tasks.length > 0) {
      saveTasks(tasks);  
    }
  }, [tasks]);

  // Función para añadir una nueva tarea
  const addTask = (task) => {
    setTasks([...tasks, task]); 
  };

  // Función para actualizar una tarea con el archivo adjunto
  const updateTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(updatedTasks); 
  };

  // Función para eliminar una tarea y actualizar localStorage
  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks); 

    saveTasks(updatedTasks);
  };

  // Función para marcar o desmarcar una tarea como completada
  const toggleCompletion = (taskId) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // Filtrar las tareas según el estado
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  return (
    <Router>
      <div className="App">
        <h1>Gestión de Tareas</h1>
        <button onClick={() => setShowForm(!showForm)} className="create-task-btn">
          {showForm ? 'Cancelar' : 'Crear tarea'}
        </button>

        {showForm && <TaskForm addTask={addTask} />}

        <Filter filter={filter} setFilter={setFilter} />

        <Routes>
          <Route path="/" element={
            <TaskList 
              tasks={filteredTasks} 
              deleteTask={deleteTask}  
              toggleCompletion={toggleCompletion}  
            />
          } />
          <Route path="/task/:id" element={<TaskDetail tasks={tasks} updateTask={updateTask} />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;

