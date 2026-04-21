import React from 'react';
import { Link } from 'react-router-dom'; // Імпортуємо Link для навігації без перезавантаження
import TourCard from './TourCard';

const Main = ({ items, onPurchase }) => {
  return (
    <main className="main-container">
      {/* Hero section */}
      <div className="content-box">
        <h1 className="main-title">Вітаємо у нашій туристичній агенції!</h1>
        <p className="main-description">
          Ми пропонуємо найкращі тури по всьому світу. Обирайте свій незабутній відпочинок разом з нами!
        </p>
      </div>

      <section className="tours-section">
        <h2 style={{ textAlign: 'center', margin: '30px 0', color: 'white' }}>
          Наші актуальні тури:
        </h2>
        
        <div className="tours-list">
          {items.map((tour) => (
            <div key={tour.id} className="tour-wrapper">
              <TourCard 
                data={tour} 
                onBuyClick={onPurchase} 
              />
              
              {/* ДОДАЄМО КНОПКУ ДЛЯ ПЕРЕХОДУ НА ДИНАМІЧНУ СТОРІНКУ */}
              <div style={{ padding: '0 20px 20px', marginTop: '-10px' }}>
                <Link 
                  to={`/tour/${tour.id}`} 
                  className="buy-button" 
                  style={{ 
                    display: 'block', 
                    textDecoration: 'none', 
                    backgroundColor: '#646cff', 
                    textAlign: 'center' 
                  }}
                >
                  Детальніше про тур
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Main;