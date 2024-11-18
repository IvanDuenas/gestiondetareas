import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const TaskDetail = ({ tasks, updateTask }) => {
  const { id } = useParams(); 
  const [task, setTask] = useState(null); 
  const [file, setFile] = useState(null); 

  useEffect(() => {
    const foundTask = tasks.find((task) => task.id === parseInt(id));
    setTask(foundTask); 
  }, [id, tasks]);

  // Manejar la carga de un archivo
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile); 
  };

  // Guardar el archivo en la tarea y actualizar el estado global
  const handleSaveFile = () => {
    if (file && task) {
      const updatedTask = { 
        ...task, 
        file: file.name 
      };
      updateTask(updatedTask); 
    }
  };

  // Eliminar el archivo de la tarea
  const handleDeleteFile = () => {
    if (task) {
      const updatedTask = { 
        ...task, 
        file: null 
      };
      setFile(null); 
      updateTask(updatedTask); 
    }
  };

  // Función para descargar el archivo
  const handleDownloadFile = () => {
    if (file) {
      const fileUrl = URL.createObjectURL(file); 
      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = file.name; 
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link); 
    }
  };

  if (!task) return <p>Tarea no encontrada.</p>; 

  return (
    <div className="task-detail">
      <h2>{task.title}</h2>
      <p>{task.description}</p>

      <div className="file-upload">
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleSaveFile}>Guardar archivo</button>
      </div>

      {task.file && (
        <div>
          <h4>Archivo adjunto:</h4>
          <p>{task.file}</p> 
          <button onClick={handleDownloadFile}>Descargar</button> 
          <button onClick={handleDeleteFile}>Eliminar archivo</button> 
        </div>
      )}

      <Link to="/">Volver a la lista de tareas</Link>
    </div>
  );
};

export default TaskDetail;

