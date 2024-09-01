import React, { useState } from 'react';
import Heart from '../../assets/icons/Heart.svg';
import Profile from '../../assets/icons/Profile.svg';
import Shipping from '../../assets/icons/Shipping.svg';
import ShoppingCart from '../../assets/icons/ShoppingCart.svg';
import Search from '../../assets/icons/Search.svg';
import Logo from '../../assets/icons/Logo.svg';
import ShieldCheck from '../../assets/icons/ShieldCheck.svg';
import Truck from '../../assets/icons/Truck.svg';
import CreditCard from '../../assets/icons/CreditCard.svg';
import './Navbar.css';

const Navbar: React.FC = () => {

  // State to keep track of the selected item
  const [selectedItem, setSelectedItem] = useState('Ofertas do Dia');

  // Function to change class of the selected item
  const handleItemClick = (item: string) => {
    setSelectedItem(item);
  };

  return (
    <nav className="navbar">
      <div className="navbar-top">
        <ul>
          <li><span><img src={ShieldCheck}/></span>Compra <span className="highlight">100% segura</span></li>
          <li><span><img src={Truck}/></span><span className="highlight">Frete grátis</span> acima de R$ 200</li>
          <li><span><img src={CreditCard}/></span><span className="highlight">Parcele</span> suas compras</li>
        </ul>
      </div>
      <div className="navbar-main">
        <div className="logo">
          <img src={Logo} alt="VTEX Logo" />
        </div>
        <div className="search-bar">
          <input type="text" placeholder="O que você está buscando?" />
          <button type="submit"><img src={Search} alt="search icon" /></button>
        </div>
        <div className="navbar-icons">
          <span className='navbar-icon'><img src={Shipping} alt='shipping'/></span>
          <span className='navbar-icon'><img src={Heart} alt='favorites'/></span>
          <span className='navbar-icon'><img src={Profile} alt='profile'/></span>
          <span className='navbar-icon'><img src={ShoppingCart} alt='shopping cart'/></span>
        </div>
      </div>
      <div className="navbar-bottom">
        <ul>
          {['Todas Categorias', 'Supermercado', 'Livros', 'Moda', 'Lançamentos', 'Ofertas do Dia', 'Assinatura'].map(item => (
            <li
              key={item}
              className={selectedItem === item ? 'selected' : ''}
              onClick={() => handleItemClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;