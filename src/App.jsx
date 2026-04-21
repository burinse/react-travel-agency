import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import PromoBanner from './components/PromoBanner';

// Імпортуємо сторінки
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import TourDetails from './pages/TourDetails';
import AboutPage from './pages/AboutPage';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const [cartCount, setCartCount] = useState(() => {
    const savedCount = localStorage.getItem('cartCount');
    return savedCount ? parseInt(savedCount, 10) : 0;
  });

  // ДОДАЄМО ДЕТАЛЬНІ ОПИСИ ДО КОЖНОГО ОБ'ЄКТА
  const tours = [
    { 
      id: 1, 
      title: "Тур у Карпати: Говерла", 
      author: "Гід: Андрій", 
      price: 4500, 
      image: "https://picsum.photos/id/10/800/450",
      description: "Сходження на найвищу точку України. У програмі: професійний супровід, неймовірні панорами Чорногірського хребта та традиційна вечеря в колибі."
    },
    { 
      id: 2, 
      title: "Вікенд у Львові", 
      author: "Гід: Олена", 
      price: 2800, 
      image: "https://picsum.photos/id/11/800/450",
      description: "Занурення в атмосферу старого міста. Ми відвідаємо підземелля аптеки-музею, оглянемо Оперний театр та продегустуємо справжню львівську каву."
    },
    { 
      id: 3, 
      title: "Відпочинок в Одесі", 
      author: "Гід: Максим", 
      price: 3200, 
      image: "https://picsum.photos/id/12/800/450",
      description: "Перлина біля моря чекає на вас! Прогулянка Потьомкінськими сходами, екскурсія в одеські катакомби та відпочинок на золотистих пляжах Аркадії."
    },
    { 
      id: 4, 
      title: "Тур до Кам'янця", 
      author: "Гід: Ірина", 
      price: 2100, 
      image: "https://picsum.photos/id/13/800/450",
      description: "Подорож до однієї з найвеличніших фортець світу. Оглянемо старе місто, міст через каньйон Смотрича та дізнаємося легенди середньовічних лицарів."
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
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
        <h2>Завантаження турів...</h2>
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
          <Route path="/catalog" element={<CatalogPage items={tours} onPurchase={handleTourPurchase} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/tour/:id" element={<TourDetails items={tours} />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;