import { useState } from "react";
import { Conteiner, Header } from "./styles";
import { ButtonSmall } from "../../components/Button/styles";
import { IconCar } from '../../helpers/Icon';
function Menu() {
  const [activeLink, setActiveLink] = useState('all');
  const handleLinkClick = (to) => {
    setActiveLink(to);
  };

  return (
    <Conteiner>
      <Header>
        <h3>Our Menu</h3>
        <ul>
          <li>
            <a
              className={activeLink === "all" ? "active" : ""}
              onClick={() => {
                handleLinkClick("all");
              }}
            >
              All
            </a>
          </li>
          <li>
            <a
              className={activeLink === "burguer" ? "active" : ""}
              onClick={() => {
                handleLinkClick("burguer");
              }}
            >
              Burguer
            </a>
          </li>
          <li>
            <a
              className={activeLink === "pizza" ? "active" : ""}
              onClick={() => {
                handleLinkClick("pizza");
              }}
            >
              Pizza
            </a>
          </li>
          <li>
            <a
              className={activeLink === "pasta" ? "active" : ""}
              onClick={() => {
                handleLinkClick("pasta");
              }}
            >
              Pasta
            </a>
          </li>
          <li>
            <a
              className={activeLink === "fries" ? "active" : ""}
              onClick={() => {
                handleLinkClick("fries");
              }}
            >
              Fries
            </a>
          </li>
        </ul>
      </Header>

      <section>
        <div className="background">
          <img src="/assets/f1.png" alt="Foto de Produto" />
        </div>

        <div className="descripition">
          <h4>Delicious Pizza</h4>
          <p>
            Veniam debitis quaerat officiis quasi cupiditate quo, quisquam
            velit, magnam voluptatem repellendus sed eaque{" "}
          </p>

          <div className="footer">
            <span>$20</span>
            <ButtonSmall>
              <IconCar className="icon"/>
            </ButtonSmall>
          </div>
        </div>
      </section>
    </Conteiner>
  );
}

export default Menu