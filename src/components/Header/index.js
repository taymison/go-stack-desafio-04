import React from 'react';

import Logo from '../../assets/logo.svg';
import './index.css';

function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <img className="header__content__logo" src={Logo} />
        <a className="header__content__profile" href="#">
          Meu perfil
        </a>
      </div>
    </header>
  );
}

export default Header;
