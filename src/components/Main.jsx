import React from 'react';
import TourCard from './TourCard';

// Компонент приймає 'items' (масив) та 'onPurchase' (функцію-callback)
const Main = ({ items, onPurchase }) => {
  return (
    <main className="main-container">
      {/* Секція з привітанням (Hero section) */}
      <div className="content-box">
        <h1 className="main-title">Вітаємо у нашій туристичній агенції!</h1>
        <p className="main-description">
          Ми пропонуємо найкращі тури по всьому світу. Обирайте свій незабутній відпочинок разом з нами!
        </p>
      </div>

      {/* Нова секція зі списком турів (Другий рівень ієрархії) */}
      <section className="tours-section">
        <h2 style={{ textAlign: 'center', margin: '30px 0', color: 'white' }}>
          Наші актуальні тури:
        </h2>
        
        <div className="tours-list">
          {/* Передаємо дані далі вниз до TourCard (Третій рівень) */}
          {items.map((tour) => (
            <TourCard 
              key={tour.id} 
              data={tour} 
              onBuyClick={onPurchase} 
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Main;