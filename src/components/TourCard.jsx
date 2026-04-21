import React, { useState } from 'react';

// Тепер приймаємо об'єкт 'data' та функцію 'onBuyClick' (Callback)
const TourCard = ({ data, onBuyClick }) => {
  // Локальний стан для лічильника квитків саме цієї картки
  const [count, setCount] = useState(0);

  const handleLocalClick = () => {
    // 1. Змінюємо внутрішній стан (лічильник)
    setCount(count + 1);
    
    // 2. ПЕРЕДАЧА ПОДІЇ ВГОРУ: викликаємо функцію, яку передав батько, 
    // і відправляємо їй назву туру або будь-які інші дані
    if (onBuyClick) {
      onBuyClick(data.title);
    }
  };

  return (
    <div className="tour-card">
      {/* Доступ до даних тепер через об'єкт data */}
      <img src={data.image} alt={data.title} className="tour-image" />
      
      <div className="tour-info">
        <h3>{data.title}</h3>
        <p className="tour-author"><strong>{data.author}</strong></p>
        <p className="tour-price">Ціна: {data.price} грн</p>
      </div>
      
      <div className="counter-section">
        <p>Кількість квитків: <strong>{count}</strong></p>
        
        {/* Викликаємо нашу функцію, яка обробляє і локальний стан, і подію вгору */}
        <button onClick={handleLocalClick} className="buy-button">
          Купити
        </button>
      </div>
    </div>
  );
};

export default TourCard;