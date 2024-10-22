import React, { useState, useEffect } from 'react';

export default function Part({ onChange }) {
  const [parts, setParts] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/parts/')
      .then(response => response.json())
      .then(data => setParts(data))
      .catch(error => console.error('Error fetching parts:', error));
  }, []);

  const handlePartChange = (e) => {
    onChange(e.target.value); 
  };

  return (
    <>
      <select onChange={handlePartChange}>
        <option value="">Выберите часть</option>
        {parts.map(part => (
          <option key={part.id} value={part.id}>{part.name}</option>
        ))}
      </select>
    </>
  );
}
