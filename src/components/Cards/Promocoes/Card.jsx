import React from 'react';

import { Conteiner } from './styles';
import { ButtonMenu } from '../../Button/styles';
import { IconCar } from '../../../helpers/Icon';

const Card = (props) => {
  return (
    <Conteiner>
      <div className="background">
        <img src={`${props.item.img}`} alt="Foto de Produto" />
      </div>

      <div className="descripition">
        <h4 className='item'>{props.item.name}</h4>

          <span className='price'>{props.item.discount}%<span className='price--small'>Off</span></span>
        <ButtonMenu className='btn'>
            <span>Order Now</span>
            <IconCar className="icon" />
          </ButtonMenu>
      </div>
    </Conteiner>
  );
}

export default Card;


