import React from 'react';

export default function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><a href="#home" className="active">Головна</a></li>
          <li><a href="#catalog">Каталог</a></li>
          <li><a href="#about">Про нас</a></li>
        </ul>
      </nav>
    </header>
  );
}