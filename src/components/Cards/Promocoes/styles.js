import { styled } from "styled-components";
import {
  openRegular,
} from "../../../helpers/tipografia"
import { displayFlex, alinhamento } from "../../styles"

export const Conteiner = styled.article`
  ${displayFlex};
  background: #222831;
  border-radius: 5px;
  width: 450px;
  height: 215px;
  .background {
    ${displayFlex}
    width: 180px;
    height: 180px;
    border: 5px solid yellow;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 15px 0 15px;
    img {
      border-radius: 50%;
      width: 175px;
      height: 175px;
      width: 100%;
    }
    img:hover {
      transition: all 0.2s;
      scale: calc(1.1);
    }
  }

  .descripition {
    width: 230px;
    .item {
      font-size: 24px;
      line-height: 29px;
    }
    .price {
      display: inline-block;
      font-size: 40px;
      line-height: 48px;
      font-weight: 700;
    }
    .price--small {
      margin-left: 3px;
      font-size: 16px;
      line-height: 19px;
    }

    .item,
    .price,
    .price--small {
      font-family: "Dancing Script", cursive;
    }
    .item,
    .price--small {
      font-weight: 500;
    }

    .item,
    .price {
      margin-bottom: 10px;
    }
    .btn {
      ${displayFlex};
      padding: 10px 30px;
    }
  }
`;