import React, { useState } from 'react';
import Game from "./components/Game";
import Search from "./components/Search";
import Hero from "./components/Hero";
import Part from "./components/Part";
import Type from "./components/Type";
import Quality from "./components/Quality";
import Rarity from "./components/Rarity";
import Result from "./components/Result";
import Basket from './components/Basket';

function App() {
  const [results, setResults] = useState([]);
  const [basket, setBasket] = useState([]);
  const [filters, setFilters] = useState({
    game: '',
    hero: '',
    part: '',
    type: '',
    quality: '',
    rarity: '',
  });

  const handleSearch = (query) => {
    const filterParams = new URLSearchParams({
      ...filters,
    }).toString();

    fetch(`http://127.0.0.1:8000/api/products/?search=${query}&${filterParams}`)
      .then(response => response.json())
      .then(data => setResults(data))
      .catch(error => console.error('Error fetching search results:', error));
  };

  const updateFilter = (filterName, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterName]: value
    }));
  };

  const addToBasket = (product) => {
    setBasket(prev => [...prev, product]);
    console.log(`Product added to basket: ${product.name}`);
  };

  return (
    <>
      <Search onSearch={handleSearch} />
      <Game onChange={(value) => updateFilter('game', value)} />
      <Hero onChange={(value) => updateFilter('hero', value)} />
      <Part onChange={(value) => updateFilter('part', value)} />
      <Type onChange={(value) => updateFilter('type', value)} />
      <Quality onChange={(value) => updateFilter('quality', value)} />
      <Rarity onChange={(value) => updateFilter('rarity', value)} />
      <Result results={results} onAddToBasket={addToBasket} />
      <Basket basket={basket} />
    </>
  );
}

export default App;
