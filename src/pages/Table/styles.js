import { styled } from "styled-components";
import {
  HeaderDancing,
  ParagraphOpen
} from "../../helpers/tipografia";
import { displayFlex } from '../../components/styles';
import colors from "../../helpers/color";


export const Conteiner = styled.section`
  height: 690px;
  margin: auto;
  width: 90%;
  max-width: 960px;
  `;

export const Form = styled.form`
  width: 100%;
  height: inherit;
  ${displayFlex};

  .conteiner{
    width: 100%;
  }
  .display {
    ${displayFlex};
    align-items: flex-start;
  }

  h1 {
    ${HeaderDancing};
  }

  h1, 
  input, 
  select{
    color: ${colors.black};
  }
  
  .inputs {
    width: 450px;
  }
  input, select {
    ${ParagraphOpen};
    border: 1px solid #999999;
    border-radius: 5px;
    padding: 15px 20px;
    margin-bottom: 25px;
    width: 450px;
  }

  .btn {
    display: block;
    margin-top: 5px;
    padding: 10px 55px;
    text-transform: uppercase;
  }

  iframe {
    border-radius: 10px;
    height: 345px;
    width: 450px;
  }
`;