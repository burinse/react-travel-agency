import React from 'react';
import { useParams, Link } from 'react-router-dom'; // Додаємо Link для зручної навігації назад

const TourDetails = ({ items }) => {
  const { id } = useParams();
  // Шукаємо конкретний тур у масиві за ID з URL
  const tour = items.find(t => t.id === parseInt(id));

  // Якщо тур не знайдено (наприклад, вручну ввели неіснуючий ID в адресному рядку)
  if (!tour) {
    return (
      <div className="main-container">
        <h2>Тур не знайдено</h2>
        <Link to="/catalog" className="buy-button" style={{ width: 'auto' }}>Повернутися до каталогу</Link>
      </div>
    );
  }

  return (
    <div className="main-container">
      <div className="tour-details-container">
        <h1 className="main-title">{tour.title}</h1>
        
        <img 
          src={tour.image} 
          alt={tour.title} 
          className="tour-details-image" 
        />
        
        <div style={{ padding: '0 20px' }}>
          <p className="tour-author">Експерт: {tour.author}</p>
          
          {/* ВИПРАВЛЕНО: Тепер тут виводиться унікальний опис з масиву об'єктів */}
          <p className="main-description" style={{ marginTop: '20px', textAlign: 'justify' }}>
            {tour.description}
          </p>
          
          <div className="tour-price" style={{ fontSize: '1.8rem', margin: '30px 0' }}>
            Вартість: {tour.price} грн
          </div>

          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
            <Link to="/catalog" className="buy-button" style={{ background: '#333', width: 'auto' }}>
              ⬅ Назад до списку
            </Link>
            <button className="buy-button" style={{ width: 'auto' }}>
              Забронювати тур
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetails;