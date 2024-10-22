import React, { useState, useEffect } from 'react';

export default function Type({ onChange }) {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/types/')
      .then(response => response.json())
      .then(data => setTypes(data))
      .catch(error => console.error('Error fetching types:', error));
  }, []);

  const handleTypeChange = (e) => {
    onChange(e.target.value); 
  };

  return (
    <>
      <select onChange={handleTypeChange}>
        <option value="">Выберите тип</option>
        {types.map(type => (
          <option key={type.id} value={type.id}>{type.name}</option>
        ))}
      </select>
    </>
  );
}
