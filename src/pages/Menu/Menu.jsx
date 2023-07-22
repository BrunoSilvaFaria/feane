import { useState } from "react";
import { Conteiner, Header, Cards } from "./styles";
import { criaElementos } from '../../helpers/criaElementos';
import { filtraElementos } from "../../helpers/filtraElementos";
import menu from "../../data/menu";
import Card from "../../components/Cards/Menu/Card";
import { ButtonMenu } from "../../components/Button/styles";

import { AnimatePresence} from 'framer-motion'

function Menu() {
  const [activeLink, setActiveLink] = useState('All');
  const handleLinkClick = (to) => {
    setActiveLink(to);
  };

  const filtered = filtraElementos(menu, activeLink, 'type');
  
  return (
    <Conteiner>
      <Header>
        <h3>Our Menu</h3>
        <ul>
          <li>
            <a
              className={activeLink === "All" ? "active" : ""}
              onClick={() => {
                handleLinkClick("All");
              }}
            >
              All
            </a>
          </li>
          <li>
            <a
              className={activeLink === "Burger" ? "active" : ""}
              onClick={() => {
                handleLinkClick("Burger");
              }}
            >
              Burguer
            </a>
          </li>
          <li>
            <a
              className={activeLink === "Pizza" ? "active" : ""}
              onClick={() => {
                handleLinkClick("Pizza");
              }}
            >
              Pizza
            </a>
          </li>
          <li>
            <a
              className={activeLink === "Pasta" ? "active" : ""}
              onClick={() => {
                handleLinkClick("Pasta");
              }}
            >
              Pasta
            </a>
          </li>
          <li>
            <a
              className={activeLink === "Fries" ? "active" : ""}
              onClick={() => {
                handleLinkClick("Fries");
              }}
            >
              Fries
            </a>
          </li>
        </ul>
      </Header>

      <Cards >
        <AnimatePresence>
          <article>{criaElementos(filtered, Card)}</article>
        </AnimatePresence>
        <ButtonMenu className="btn">
          View More
        </ButtonMenu>
      </Cards>
    </Conteiner>
  );
}

export default Menu