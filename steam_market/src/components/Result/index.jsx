import React from 'react';
import AddToBasket from '../AddToBasket';

export default function Result({ results = [], onAddToBasket }) {
  return (
    <div>
      <h1>Результаты поиска</h1>
      {results.length === 0 ? (
        <p>Ничего не найдено</p>
      ) : (
        <ul>
          {results.map(item => (
            <li key={item.id}>
              <img src={item.photo} alt={item.name} style={{ width: '50px', height: '50px' }} />
              {item.name}
              -
              {item.price}$
              -
              <AddToBasket product={item} onAdd={onAddToBasket} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
