import React, { useState, useEffect } from 'react';

export default function Game({ onChange }) {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/games/')
      .then(response => response.json())
      .then(data => setGames(data))
      .catch(error => console.error('Error fetching games:', error));
  }, []);

  const handleGameChange = (e) => {
    onChange(e.target.value); 
  };

  return (
    <>
      <select onChange={handleGameChange}>
        <option value="">Выберите игру</option>
        {games.map(game => (
          <option key={game.id} value={game.id}>{game.name}</option>
        ))}
      </select>
    </>
  );
}
