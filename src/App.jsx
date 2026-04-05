import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import TourCard from './components/TourCard' // Імпортуємо твою нову картку

function App() {
  // 1. Створюємо масив об'єктів (наші дані)
  const tours = [
    { 
      id: 1, 
      title: "Тур у Карпати: Говерла", 
      author: "Гід: Андрій", 
      price: 4500, 
      image: "https://picsum.photos/id/10/200/150" 
    },
    { 
      id: 2, 
      title: "Вікенд у Львові", 
      author: "Гід: Олена", 
      price: 2800, 
      image: "https://picsum.photos/id/11/200/150" 
    },
    { 
      id: 3, 
      title: "Відпочинок в Одесі", 
      author: "Гід: Максим", 
      price: 3200, 
      image: "https://picsum.photos/id/12/200/150" 
    },
    { 
      id: 4, 
      title: "Тур до Кам'янця", 
      author: "Гід: Ірина", 
      price: 2100, 
      image: "https://picsum.photos/id/13/200/150" 
    }
  ];

  return (
    <div className="app-container">
      <Header />
      
      {/* Виводимо Main для загального привітання */}
      <Main />

      <main className="tours-section">
        <h2 style={{ textAlign: 'center', margin: '20px 0' }}>Наші актуальні тури:</h2>
        
        {/* 2. Використовуємо .map() для виведення списку */}
        <div className="tours-list" style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          gap: '20px', 
          padding: '20px' 
        }}>
          {tours.map((tour) => (
            <TourCard 
              key={tour.id} 
              title={tour.title} 
              author={tour.author}
              price={tour.price} 
              image={tour.image} 
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App