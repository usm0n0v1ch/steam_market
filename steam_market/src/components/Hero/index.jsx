import React, { useState, useEffect } from 'react';

export default function Hero({ onChange }) {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/heroes/')
      .then(response => response.json())
      .then(data => setHeroes(data))
      .catch(error => console.error('Error fetching heroes:', error));
  }, []);

  const handleHeroChange = (e) => {
    onChange(e.target.value); 
  };

  return (
    <>
      <select onChange={handleHeroChange}>
        <option value="">Выберите героя</option>
        {heroes.map(hero => (
          <option key={hero.id} value={hero.id}>{hero.name}</option>
        ))}
      </select>
    </>
  );
}
