// import React from 'react';
import { Link } from 'react-router-dom';
import { IconCar, IconSearch, IconUser } from '../../assets/Icon';
import { ButtonMenu } from '../Button/styles';

import { Conteiner, Background } from './styles';
function Header() {
  return (
    <Background>
      <Conteiner>
        <Link to='/' className='logo'>
          Feane
        </Link>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/menu'>Menu</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/table'>Book Table</Link>
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
      </Conteiner>
    </Background>
  )
}

export default Header