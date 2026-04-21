import React from 'react';

const AboutPage = () => {
  return (
    <div className="main-container">
      <div className="tour-details-container"> {/* Використовуємо існуючий клас для гарної рамки */}
        <h1 className="main-title">Про нашу агенцію</h1>
        
        <p className="main-description" style={{ marginBottom: '20px' }}>
          Ми — команда професіоналів, яка вже понад 10 років допомагає українцям відкривати нові горизонти. 
          Наша місія — зробити кожну подорож незабутньою, безпечною та доступною.
        </p>

        <div className="about-stats" style={{ display: 'flex', justifyContent: 'space-around', margin: '30px 0' }}>
          <div>
            <h3 style={{ color: '#4CAF50' }}>500+</h3>
            <p>Актуальних турів</p>
          </div>
          <div>
            <h3 style={{ color: '#646cff' }}>10k+</h3>
            <p>Задоволених клієнтів</p>
          </div>
          <div>
            <h3 style={{ color: '#4CAF50' }}>24/7</h3>
            <p>Підтримка гідів</p>
          </div>
        </div>

        <h2 style={{ color: '#ffffff', marginTop: '30px' }}>Чому обирають нас?</h2>
        <ul style={{ textAlign: 'left', color: '#cccccc', lineHeight: '1.8', maxWidth: '600px', margin: '20px auto' }}>
          <li>✅ Лише перевірені та безпечні маршрути.</li>
          <li>✅ Найкращі ціни завдяки прямому партнерству з готелями.</li>
          <li>✅ Індивідуальний підхід до кожного туриста.</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;