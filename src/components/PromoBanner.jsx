import React, { useState, useEffect } from 'react';

const PromoBanner = () => {
  // Початковий час: 10 хвилин (600 секунд)
  const [timeLeft, setTimeLeft] = useState(600);

  useEffect(() => {
    // Створюємо інтервал, який щосекунди віднімає 1
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    // Очищення інтервалу (дуже важливо для уникнення багів і витоку пам'яті!)
    return () => clearInterval(interval);
  }, []); // [] запускає таймер 1 раз при появі банера

  // Форматуємо час у Хвилин:Секунд
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  // Додаємо 0 попереду, якщо секунд менше 10 (напр. 09)
  const formatSec = seconds < 10 ? `0${seconds}` : seconds;

  // Приховуємо банер, якщо час вийшов
  if (timeLeft === 0) return null;

  return (
    <div className="promo-banner" style={{ background: 'linear-gradient(90deg, #ff4e50, #f9d423)', color: '#fff', padding: '15px', textAlign: 'center', margin: '20px', borderRadius: '10px' }}>
      <h3>🔥 Гаряча пропозиція! Знижка 20% на всі тури!</h3>
      <p>Акція діє ще: <strong>{minutes}:{formatSec}</strong></p>
    </div>
  );
};

export default PromoBanner;