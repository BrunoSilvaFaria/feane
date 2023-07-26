// import React from 'react';
import { Link } from 'react-router-dom';
import { IconCar, IconSearch, IconUser } from '../../helpers/Icon';
import { ButtonMenu } from '../Button/styles';
import { useState, useEffect } from 'react';
import Hamburger from 'hamburger-react';
import { Conteiner, Background } from './styles';
function Header() {
    const [showElement, setShowElement] = useState(window.innerWidth >= 900);

    useEffect(() => {
      const handleResize = () => {
        setShowElement(window.innerWidth >= 990);
      };

      // Adiciona um listener para o evento de redimensionamento da janela
      window.addEventListener("resize", handleResize);

      // Remove o listener quando o componente é desmontado
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  
    useEffect(() => {
    // Esconde o menu ao entrar na página se a tela for menor ou igual a 990
    if (window.innerWidth <= 990) {
      setShowElement(false);
    } else {
      setShowElement(true); // Mostra o menu se a tela for maior que 990
    }
  }, []);

    // setShowElement('false');
    const showOrHide = () => {
      setShowElement((prevShowElement) => !prevShowElement);
      console.log('fui clicado')
    };
    const [activeLink, setActiveLink] = useState("/");
    const handleLinkClick = (to) => {
      setActiveLink(to);
      if (window.innerWidth <= 990) {
        showOrHide();
      }
    };
  return (
    <Background activeLink={activeLink} showElement={showElement}>
      <Conteiner>
        <div className='menu'>
          <Link
            to="/"
            className="logo"
            onClick={() => {
              handleLinkClick("/", "logo");
            }}
          >
            Feane
          </Link>
          <div className="icon--menu">
            <Hamburger
              direction="right"
              toggled={showElement}
              toggle={setShowElement} />
          </div>
        </div>
        
        {showElement && (
          <div className='menu--responsivo'>
            <nav>
              <ul>
                <li>
                  <Link
                    to="/"
                    className={activeLink === "/" ? "link-active" : ""}
                    onClick={() => {
                      handleLinkClick("/");
                    }}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/menu"
                    className={activeLink === "/menu" ? "link-active" : ""}
                    onClick={() => {
                      handleLinkClick("/menu");
                    }}
                  >
                    Menu
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className={activeLink === "/about" ? "link-active" : ""}
                    onClick={() => {
                      handleLinkClick("/about");
                    }}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/table"
                    className={activeLink === "/table" ? "link-active" : ""}
                    onClick={() => {
                      handleLinkClick("/table");
                    }}
                  >
                    Book Table
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="icons_conteiner">
              <div className="icons">
                <button>
                  <IconUser className="icon" />
                </button>
                <button>
                  <IconCar className="icon" />
                </button>
                <button>
                  <IconSearch className="icon" />
                </button>
              </div>
              <ButtonMenu>Order Online</ButtonMenu>
            </div>
          </div>
        )}
      </Conteiner>
    </Background>
  );
}

export default Header