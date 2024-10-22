import React, { useState, useEffect } from 'react';

export default function Rarity({ onChange }) {
  const [rarities, setRarities] = useState([]);
  const [selectedRarity, setSelectedRarity] = useState(null); 

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/rarities/')
      .then(response => response.json())
      .then(data => setRarities(data))
      .catch(error => console.error('Error fetching rarities:', error));
  }, []);

  const handleRadioChange = (e) => {
    const value = e.target.value;
    setSelectedRarity(value); 
    onChange(value); 
  };

  return (
    <>
      <h3>Редкость</h3>
      <div>
        {rarities.map(rarity => (
          <label key={rarity.id} style={{ color: rarity.color }}>
            <input 
              type="radio" 
              name="rarity" 
              value={rarity.id} 
              checked={selectedRarity === String(rarity.id)} 
              onChange={handleRadioChange}
            />
            {rarity.name}
          </label>
        ))}
      </div>
    </>
  );
}
