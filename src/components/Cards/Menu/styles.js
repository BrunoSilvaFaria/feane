import { styled } from "styled-components";
import {
  openRegular,
} from "../../../helpers/tipografia"
import { displayFlex, alinhamento } from "../../styles"

export const Conteiner = styled.section`
    background: linear-gradient(to bottom, #f1f2f3 25px, #222831 25px);
    border-radius: 20px;
    width: 290px;
    height: 440px;
  .background {
    ${displayFlex}
    border-radius: 20px 20px 0px 45px;
    background: #f1f2f3;
    margin-bottom: 25px;
    padding: 25px;
    height: 215px;
    img {
      margin: auto;
      max-width: 100%;
      max-height: 145px;
    }
    img:hover {
      transition: all 0.2s;
      scale: calc(1.1);
    }
  }
  p,
  span {
    ${openRegular};
  }
  .descripition {
    ${alinhamento};
    width: 83%;
    h4 {
      font-size: 1.25em;
      font-weight: 600;
      margin-bottom: 15px;
    }
    p {
      font-size: 0.938em;
      line-height: 1.5em;
      margin-bottom: 15px;
    }
  }
  .footer {
    ${displayFlex};
    span {
      font-size: 1em;
      font-weight: 500;
      line-height: 1.2em;
    }
}
  `