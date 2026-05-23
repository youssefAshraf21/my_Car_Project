import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import type { Car } from './types/car';

import Home from './pages/Home';
import Cars from './pages/Cars';
import Favorites from './pages/Favorites';
import Contact from './pages/Contact';
import CarDetails from './pages/CarDetails';

function App() {
  const [favorites, setFavorites] = useState<Car[]>([]);

  const toggleFavorite = (car: Car) => {
    setFavorites(prev =>
      prev.find(c => c.id === car.id)
        ? prev.filter(c => c.id !== car.id)
        : [...prev, car]
    );
  };

  return (
    <Routes>
      <Route path="/" element={<Home favorites={favorites} toggleFavorite={toggleFavorite} />} />
      <Route path="/cars" element={<Cars favorites={favorites} toggleFavorite={toggleFavorite} />} />
      <Route path="/favorites" element={<Favorites favorites={favorites} toggleFavorite={toggleFavorite} />} />
      <Route path="/contact" element={<Contact />} />
      <Route
  path="/CarDetails/:id"
  element={<CarDetails favorites={favorites} toggleFavorite={toggleFavorite} />}
/>
    </Routes>
  );
}

export default App;