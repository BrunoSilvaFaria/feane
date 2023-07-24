import { styled } from "styled-components";
import { displayFlex } from '../../components/styles';
import colors from "../../helpers/color";


export const Conteiner = styled.header`
  margin: auto;
  margin-bottom: 100px;
  max-width: 920px;
`;
export const Header = styled.header`
  width: 410px;
  margin: auto auto 50px auto;
  h3 {
    font-size: 40px;
    margin: 100px auto 50px auto;
    text-align: center;
  }

  ul {
    ${displayFlex};
  }
  a{
    color: ${colors.blackFont};
    padding: 7px 25px;
  }
  .active {
    color: #fff;
    background-color: ${colors.blackBack};
    border-radius: 25px;
    transition: none;
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