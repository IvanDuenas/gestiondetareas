import React from 'react';

const Filter = ({ filter, setFilter }) => {
  return (
    <div className="filter">
      <button 
        className={filter === 'all' ? 'active' : ''} 
        onClick={() => setFilter('all')}
      >
        Todas
      </button>
      <button 
        className={filter === 'completed' ? 'active' : ''} 
        onClick={() => setFilter('completed')}
      >
        Completadas
      </button>
      <button 
        className={filter === 'pending' ? 'active' : ''} 
        onClick={() => setFilter('pending')}
      >
        Pendientes
      </button>
    </div>
  );
};

export default Filter;
