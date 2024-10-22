import React from 'react';

export default function Basket({ basket = [] }) {
    return (
        <div>
            <h2>Ваша корзина</h2>
            <ul>
                {basket.length > 0 ? (
                    basket.map((product, index) => (
                        <li key={index}>{product.name}-{product.price}$</li>
                    ))
                ) : (
                    <li>Нет товаров в корзине</li>
                )}
            </ul>
        </div>
    );
}
