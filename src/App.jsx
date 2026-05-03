import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios'; // Додано імпорт axios
import Header from './components/Header';
import Footer from './components/Footer';
import PromoBanner from './components/PromoBanner';

// Імпортуємо сторінки
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import TourDetails from './pages/TourDetails';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]); // Тепер дані турів порожні за замовчуванням

  const [cartCount, setCartCount] = useState(() => {
    const savedCount = localStorage.getItem('cartCount');
    return savedCount ? parseInt(savedCount, 10) : 0;
  });

  // Отримання даних з API Laravel
  useEffect(() => {
    // Використовуємо твою адресу з зображення image_4e9c3d.png
    axios.get('http://127.0.0.1:8000/api/tours')
      .then(response => {
        setTours(response.data); // Записуємо отримані дані в стан
        setIsLoading(false);
      })
      .catch(error => {
        console.error("Помилка завантаження даних з API:", error);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem('cartCount', cartCount);
  }, [cartCount]);

  const handleTourPurchase = () => {
    setCartCount(prevCount => prevCount + 1);
  };

  if (isLoading) {
    return (
      <div className="loader-container">
        <div className="spinner"></div>
        <h2>Завантаження турів з бази даних...</h2>
      </div>
    );
  }

  return (
    <Router>
      <div className="app-container">
        <Header />
        
        <div className="cart-display">
          🛒 У кошику: <strong>{cartCount}</strong> турів
        </div>

        <PromoBanner />

        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Передаємо завантажені tours у CatalogPage */}
          <Route path="/catalog" element={<CatalogPage items={tours} onPurchase={handleTourPurchase} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/tour/:id" element={<TourDetails items={tours} />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;