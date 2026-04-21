import React from 'react';
import { NavLink } from 'react-router-dom'; // Обов'язково додаємо цей імпорт

export default function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? "active" : ""}
            >
              Головна
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/catalog" 
              className={({ isActive }) => isActive ? "active" : ""}
            >
              Каталог
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              className={({ isActive }) => isActive ? "active" : ""}
            >
              Про нас
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}