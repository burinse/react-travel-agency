import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import PromoBanner from './components/PromoBanner'; // Не забудь створити цей компонент

function App() {
  // --- ЗАВДАННЯ 1: Стан завантаження (isLoading) ---
  const [isLoading, setIsLoading] = useState(true);

  // --- ЗАВДАННЯ 3: Стан кошика з ініціалізацією з LocalStorage ---
  const [cartCount, setCartCount] = useState(() => {
    // Зчитуємо збережене значення при першому рендері
    const savedCount = localStorage.getItem('cartCount');
    return savedCount ? parseInt(savedCount, 10) : 0;
  });

  const tours = [
    { id: 1, title: "Тур у Карпати: Говерла", author: "Гід: Андрій", price: 4500, image: "https://picsum.photos/id/10/200/150" },
    { id: 2, title: "Вікенд у Львові", author: "Гід: Олена", price: 2800, image: "https://picsum.photos/id/11/200/150" },
    { id: 3, title: "Відпочинок в Одесі", author: "Гід: Максим", price: 3200, image: "https://picsum.photos/id/12/200/150" },
    { id: 4, title: "Тур до Кам'янця", author: "Гід: Ірина", price: 2100, image: "https://picsum.photos/id/13/200/150" }
  ];

  // Ефект для імітації завантаження (Spinner на 2 секунди)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer); // Очищення таймера
  }, []);

  // Ефект для збереження cartCount у LocalStorage при кожній зміні
  useEffect(() => {
    localStorage.setItem('cartCount', cartCount);
  }, [cartCount]);

  // Функція зворотного виклику, яка тепер оновлює загальний стан кошика
  const handleTourPurchase = (tourTitle) => {
    console.log(`Подія піднята до App: Обрано тур "${tourTitle}"`);
    setCartCount(prevCount => prevCount + 1); // Збільшуємо кількість у кошику
  };

  // Умова для відображення Spinner
  if (isLoading) {
    return (
      <div className="loader-container">
        <div className="spinner"></div>
        <h2>Завантаження турів...</h2>
      </div>
    );
  }

  return (
    <div className="app-container">
      <Header />
      
      {/* Відображення стану кошика в інтерфейсі */}
      <div className="cart-display" style={{ 
        textAlign: 'right', 
        padding: '10px 20px', 
        background: '#333', 
        color: '#fff',
        fontSize: '18px'
      }}>
        🛒 У кошику: <strong>{cartCount}</strong> турів
      </div>

      <PromoBanner />
      
      <Main items={tours} onPurchase={handleTourPurchase} />

      <Footer />
    </div>
  );
}

export default App;