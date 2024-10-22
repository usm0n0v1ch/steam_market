import React from 'react';

export default function AddToBasket({ product, onAdd }) {
    const handleAddToBasket = () => {
        onAdd(product); 
    };

    return (
        <div>
            <button onClick={handleAddToBasket}>Добавить в корзину</button>
        </div>
    );
}
