import React from 'react';

import { Conteiner } from './styles';
import { ButtonSmall } from '../../Button/styles';
import { IconCar } from '../../../helpers/Icon';

const Card = (props) => {
  return (
    <Conteiner>
      <div className="background">
        <img src={`${props.item.img}`} alt="Foto de Produto" />
      </div>

      <div className="descripition">
        <h4>{props.item.name}</h4>
        <p>{props.item.description}.item.</p>

        <div className="footer">
          <span>{props.item.price}</span>
          <ButtonSmall>
            <IconCar className="icon" />
          </ButtonSmall>
        </div>
      </div>
    </Conteiner>
  );
}

export default Card;


