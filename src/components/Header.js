import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../data/logo.png'

const Header = () => (
  <header className="main-header">
    <img src={logo} alt="FFXIV Fan Page"></img>
    <ul className="main-nav">
      <li><NavLink exact to="/">Marketboard</NavLink></li>
      <li><NavLink to="/about">Gathering</NavLink></li>
      <li><NavLink to="/teachers">Crafting</NavLink></li>
      <li><NavLink to="/courses">About</NavLink></li>
    </ul>    
  </header>
);

export default Header;