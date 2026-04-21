import React from 'react';
import Main from '../components/Main'; // Використовуємо ваш існуючий компонент Main

const CatalogPage = ({ items, onPurchase }) => {
  return (
    <div>
      <Main items={items} onPurchase={onPurchase} />
    </div>
  );
};

export default CatalogPage;