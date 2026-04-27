import React from 'react';
import { NavLink } from 'react-router-dom';

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
          {/* ДОДАНО: Посилання на нову сторінку контактів */}
          <li>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => isActive ? "active" : ""}
            >
              Контакти
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}