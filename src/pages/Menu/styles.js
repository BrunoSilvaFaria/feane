import { styled } from "styled-components";
import {
    dancingBoldBlack,
    openRegularBlack
} from "../../helpers/tipografia";
import { displayFlex } from '../../components/styles';
// import colors from "../../helpers/color";


export const Conteiner = styled.header`
  margin: auto;
  margin-bottom: 100px;
  max-width: 920px;
`;
export const Header = styled.header`
  width: 410px;
  margin: auto auto 50px auto;
  h3 {
    ${dancingBoldBlack};
    font-size: 40px;
    margin: 100px auto 50px auto;
    text-align: center;
  }

  ul {
    ${displayFlex};
  }

  a {
    ${openRegularBlack};
  }
  .active {
    color: #fff;
    background-color: #222831;
    padding: 7px 25px;
    border-radius: 25px;
  }
`;

export const Cards = styled.section`
    max-width: 920px;
  article{
    ${displayFlex};
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 100%;
    margin: auto;
    gap: 24px;
  }

  .btn {
    display: block;
    margin: 50px auto;
    padding: 10px 55px;
  }
`;