import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const TourDetails = ({ items }) => {
  const { id } = useParams();
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    numberOfPeople: 1,
    date: ''
  });
  
  // Шукаємо конкретний тур у масиві за ID з URL
  const tour = items.find(t => t.id === parseInt(id));

  // ФУНКЦІЯ ВІДКРИТТЯ МОДАЛІ:
  const handleBooking = () => {
    setShowBookingModal(true);
  };

  // ФУНКЦІЯ ЗАКРИТТЯ МОДАЛІ:
  const handleCloseModal = () => {
    setShowBookingModal(false);
    setFormData({ name: '', email: '', phone: '', numberOfPeople: 1, date: '' });
  };

  // ФУНКЦІЯ ОБРОБКИ ЗМІН У ФОРМІ:
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // ФУНКЦІЯ ПІДТВЕРДЖЕННЯ БРОНЮВАННЯ:
  const handleSubmitBooking = (e) => {
    e.preventDefault();
    
    // Перевірка заповнення всіх полів
    if (!formData.name || !formData.email || !formData.phone || !formData.date) {
      alert('Будь ласка, заповніть всі поля!');
      return;
    }

    // Виведення повідомлення про успішне бронювання
    alert(`Тур "${tour.title}" успішно заброньовано!\n\nДані бронювання:\nІм'я: ${formData.name}\nEmail: ${formData.email}\nТелефон: ${formData.phone}\nКількість осіб: ${formData.numberOfPeople}\nДата: ${formData.date}\n\nНаш менеджер зв'яжеться з вами найближчим часом.`);
    
    handleCloseModal();
    
    // В реальному проєкті тут міг би бути запит до бази даних:
    // axios.post('http://127.0.0.1:8000/api/bookings', { tour_id: tour.id, ...formData });
  };

  // Якщо тур не знайдено
  if (!tour) {
    return (
      <div className="main-container">
        <h2>Тур не знайдено</h2>
        <Link to="/catalog" className="buy-button" style={{ width: 'auto' }}>Повернутися до каталогу</Link>
      </div>
    );
  }

  return (
    <div className="main-container" style={{ background: '#0f0f0f', color: '#fff', minHeight: '100vh', padding: '20px' }}>
      <div className="tour-details-container" style={{ maxWidth: '800px', margin: '0 auto', background: '#1a1a1a', borderRadius: '15px', overflow: 'hidden' }}>
        <h1 className="main-title" style={{ padding: '20px', textAlign: 'center' }}>{tour.title}</h1>
        
        <img 
          src={tour.image} 
          alt={tour.title} 
          className="tour-details-image" 
          style={{ width: '100%', maxHeight: '450px', objectFit: 'cover' }}
        />
        
        <div style={{ padding: '30px' }}>
          <p className="tour-author" style={{ color: '#4caf50', fontWeight: 'bold' }}>Експерт: {tour.author}</p>
          
          <p className="main-description" style={{ marginTop: '20px', textAlign: 'justify', lineHeight: '1.6', color: '#ccc' }}>
            {tour.description}
          </p>
          
          <div className="tour-price" style={{ fontSize: '2rem', margin: '30px 0', color: '#4caf50', fontWeight: 'bold' }}>
            Вартість: {tour.price} грн
          </div>

          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', marginBottom: '20px' }}>
            <Link to="/catalog" className="buy-button" style={{ background: '#333', color: '#fff', textDecoration: 'none', padding: '12px 25px', borderRadius: '8px', display: 'flex', alignItems: 'center' }}>
              ⬅ Назад до списку
            </Link>
            
            <button 
              className="buy-button" 
              onClick={handleBooking}
              style={{ 
                background: '#4caf50', 
                color: '#fff', 
                border: 'none', 
                padding: '12px 35px', 
                borderRadius: '8px', 
                cursor: 'pointer', 
                fontSize: '16px', 
                fontWeight: 'bold' 
              }}
            >
              Забронювати зараз
            </button>
          </div>
        </div>
      </div>

      {/* МОДАЛЬНЕ ВІКНО ДЛЯ БРОНЮВАННЯ */}
      {showBookingModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.7)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }}>
          <div style={{
            background: '#1a1a1a',
            borderRadius: '15px',
            padding: '40px',
            maxWidth: '500px',
            width: '90%',
            border: '2px solid #4caf50'
          }}>
            <h2 style={{ color: '#4caf50', marginBottom: '25px', textAlign: 'center' }}>
              Бронювання туру
            </h2>

            <form onSubmit={handleSubmitBooking}>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '8px', color: '#ccc' }}>
                  Ваше ім'я:
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Введіть ім'я"
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '8px',
                    border: '1px solid #333',
                    background: '#0f0f0f',
                    color: '#fff',
                    boxSizing: 'border-box'
                  }}
                  required
                />
              </div>

              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '8px', color: '#ccc' }}>
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Введіть email"
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '8px',
                    border: '1px solid #333',
                    background: '#0f0f0f',
                    color: '#fff',
                    boxSizing: 'border-box'
                  }}
                  required
                />
              </div>

              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '8px', color: '#ccc' }}>
                  Телефон:
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Введіть телефон"
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '8px',
                    border: '1px solid #333',
                    background: '#0f0f0f',
                    color: '#fff',
                    boxSizing: 'border-box'
                  }}
                  required
                />
              </div>

              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '8px', color: '#ccc' }}>
                  Кількість осіб:
                </label>
                <input
                  type="number"
                  name="numberOfPeople"
                  value={formData.numberOfPeople}
                  onChange={handleInputChange}
                  min="1"
                  max="20"
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '8px',
                    border: '1px solid #333',
                    background: '#0f0f0f',
                    color: '#fff',
                    boxSizing: 'border-box'
                  }}
                  required
                />
              </div>

              <div style={{ marginBottom: '25px' }}>
                <label style={{ display: 'block', marginBottom: '8px', color: '#ccc' }}>
                  Дата туру:
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '8px',
                    border: '1px solid #333',
                    background: '#0f0f0f',
                    color: '#fff',
                    boxSizing: 'border-box'
                  }}
                  required
                />
              </div>

              <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                <button
                  type="button"
                  onClick={handleCloseModal}
                  style={{
                    padding: '12px 25px',
                    borderRadius: '8px',
                    border: '1px solid #333',
                    background: '#333',
                    color: '#fff',
                    cursor: 'pointer',
                    fontSize: '16px'
                  }}
                >
                  Скасувати
                </button>
                <button
                  type="submit"
                  style={{
                    padding: '12px 35px',
                    borderRadius: '8px',
                    border: 'none',
                    background: '#4caf50',
                    color: '#fff',
                    cursor: 'pointer',
                    fontSize: '16px',
                    fontWeight: 'bold'
                  }}
                >
                  Забронювати
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TourDetails;