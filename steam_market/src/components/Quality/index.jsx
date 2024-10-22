import React, { useState, useEffect } from 'react';

export default function Quality({ onChange }) {
  const [qualities, setQualities] = useState([]);
  const [selectedQuality, setSelectedQuality] = useState(null); 

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/qualities/')
      .then(response => response.json())
      .then(data => setQualities(data))
      .catch(error => console.error('Error fetching qualities:', error));
  }, []);

  const handleRadioChange = (e) => {
    const value = e.target.value;
    setSelectedQuality(value); 
    onChange(value); 
  };

  return (
    <>
      <h3>Качество</h3>
      <div>
        {qualities.map(quality => (
          <label key={quality.id} style={{ color: quality.color }}>
            <input 
              type="radio" 
              name="quality" 
              value={quality.id}
              checked={selectedQuality === String(quality.id)} 
              onChange={handleRadioChange}
            />
            {quality.name}
          </label>
        ))}
      </div>
    </>
  );
}
