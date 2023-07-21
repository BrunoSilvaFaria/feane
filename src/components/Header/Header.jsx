// import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconCar, IconSearch, IconUser } from '../../helpers/Icon';
import { ButtonMenu } from '../Button/styles';

import { Conteiner, Background } from './styles';
function Header() {
  const [activeLink, setActiveLink] = useState('/');
  const handleLinkClick = (to, type='link') => {
    setActiveLink(to);
  };
  return (
    <Background>
      <Conteiner>
        <Link to='/' className='logo'
        onClick={() => { handleLinkClick('/', 'logo') }}>
          Feane
        </Link>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'
                 className={activeLink === '/' ? 'link-active' : ''}
                 onClick={() => { handleLinkClick('/') }}>
                  Home
                 </Link>
              </li>
              <li>
                <Link to='/menu'
                 className={activeLink === '/menu' ? 'link-active' : ''}
                 onClick={() => { handleLinkClick('/menu') }}>
                  Menu
                 </Link>
              </li>
              <li>
                <Link to='/about'
                 className={activeLink === '/about' ? 'link-active' : ''}
                 onClick={() => { handleLinkClick('/about') }}>
                  Abou
                 t</Link>
              </li>
              <li>
                <Link to='/table'
                 className={activeLink === '/table' ? 'link-active' : ''}
                 onClick={() => { handleLinkClick('/table') }}>
                  Book Table</Link>
              </li>
            </ul>
          </nav>
          <div>
            <div className="icons">
              <button>
                <IconUser className='icon'/>
              </button>
              <button>
                <IconCar className='icon'/>
              </button>
              <button>
                <IconSearch className='icon'/>
              </button>
            </div>
            <ButtonMenu>Order Online</ButtonMenu>
          </div>
        </div>
      </Conteiner>
    </Background>
  )
}

export default Header