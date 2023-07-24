import React from 'react';

import { Conteiner } from './styles';

const Card = (props) => {
  return (
    <Conteiner>
      <div className="descripition">
        <div>
          <p className="discription">{props.item.discription}</p>
          <h4 className="subtitle">{props.item.name}</h4>
          <span className="function">{props.item.function}</span>
        </div>
      </div>

      <div className="background">
        <img src={`${props.item.img}`} alt="Foto de Produto" />
      </div>
    </Conteiner>
  );
}

export default Card;


