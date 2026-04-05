import React, { useState } from 'react';

// Компонент приймає дані про тур через props
const TourCard = ({ title, author, price, image }) => {
  // Стан для лічильника кількості квитків (State)
  const [count, setCount] = useState(0);

  // Функція для збільшення лічильника
  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div className="tour-card">
      <img src={image} alt={title} className="tour-image" />
      
      <div className="tour-info">
        <h3>{title}</h3>
        
        {/* Виводимо автора. Оскільки в масиві вже є слово "Гід:", тут залишаємо тільки змінну */}
        <p className="tour-author"><strong>{author}</strong></p>
        
        <p className="tour-price">Ціна: {price} грн</p>
      </div>
      
      <div className="counter-section">
        {/* Відображення поточного стану лічильника */}
        <p>Кількість квитків: <strong>{count}</strong></p>
        
        <button onClick={handleIncrement} className="buy-button">
          Купити
        </button>
      </div>
    </div>
  );
};

export default TourCard;