import React, { useState } from 'react';

const ContactPage = () => {
  // 1. Керовані інпути: створюємо один об'єкт для всієї форми
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // 2. Стан для збереження повідомлень про помилки
  const [errors, setErrors] = useState({});

  // Обробник змін в інпутах
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Очищаємо помилку поля, коли користувач починає щось виправляти
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  // 3. Валідація перед відправкою
  const validate = () => {
    let tempErrors = {};
    
    if (!formData.name.trim()) tempErrors.name = "Будь ласка, введіть ім'я";
    
    // Перевірка Email на наявність "@"
    if (!formData.email.includes('@')) {
      tempErrors.email = "Email має обов'язково містити символ '@'";
    }

    // Перевірка довжини повідомлення (мінімум 10 символів)
    if (formData.message.length < 10) {
      tempErrors.message = "Повідомлення має бути не коротшим за 10 символів";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0; // Повертає true, якщо помилок немає
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert(`Дякуємо, ${formData.name}! Ваше повідомлення відправлено.`);
      console.log("Дані для відправки:", formData);
      // Очищення форми після успіху
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <div className="main-container">
      <div className="tour-details-container" style={{ maxWidth: '500px', margin: '0 auto' }}>
        <h1 className="main-title">Зворотний зв'язок</h1>
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '20px' }}>
          
          {/* Поле Ім'я */}
          <div style={{ textAlign: 'left' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Ім'я:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Ваше ім'я"
              style={{ 
                width: '100%', padding: '12px', borderRadius: '8px', border: `2px solid ${errors.name ? 'red' : '#444'}`,
                background: '#1a1a1a', color: 'white' 
              }}
            />
            {errors.name && <span style={{ color: 'red', fontSize: '12px' }}>{errors.name}</span>}
          </div>

          {/* Поле Email */}
          <div style={{ textAlign: 'left' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@mail.com"
              style={{ 
                width: '100%', padding: '12px', borderRadius: '8px', border: `2px solid ${errors.email ? 'red' : '#444'}`,
                background: '#1a1a1a', color: 'white' 
              }}
            />
            {errors.email && <span style={{ color: 'red', fontSize: '12px' }}>{errors.email}</span>}
          </div>

          {/* Поле Повідомлення */}
          <div style={{ textAlign: 'left' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Повідомлення:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Опишіть ваше питання (мінімум 10 символів)..."
              rows="4"
              style={{ 
                width: '100%', padding: '12px', borderRadius: '8px', border: `2px solid ${errors.message ? 'red' : '#444'}`,
                background: '#1a1a1a', color: 'white', resize: 'none'
              }}
            />
            {errors.message && <span style={{ color: 'red', fontSize: '12px' }}>{errors.message}</span>}
          </div>

          <button type="submit" className="buy-button" style={{ width: '100%', cursor: 'pointer' }}>
            Відправити
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;