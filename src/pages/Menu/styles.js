import { styled } from "styled-components";
import { displayFlex } from '../../components/styles';
import colors from "../../helpers/color";


export const Conteiner = styled.header`
  margin: auto;
  margin-bottom: 100px;
  max-width: 1145px;
  width: 95%;
  @media (max-width: 450px) {
    width: 90%;
  }
`;
export const Header = styled.header`
  margin: auto auto 50px auto;
  h3 {
    color: ${colors.blackFont};
    font-size: 40px;
    margin: 100px auto 50px auto;
    text-align: center;
  }

  nav {
    margin: auto;
  }
  ul {
    ${displayFlex};
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (max-width: 465px) {
    & {
      margin: auto auto 20px auto;
    }
    li {
      margin-bottom: 30px;
    }
  }
  a {
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
  max-width: 1445px;
  .motion {
    max-width: 360px;
    height: 420px;
    @media (max-width: 1190px) {
      width: 290px;
      height: 440px;
    }
    @media (max-width: 990px) {
      width: 330px;
    }
    @media (max-width: 765px) {
      width: 240px;
      height: 460px;
    }
    @media (max-width: 575px) {
      width: 100%;
      height: 420px;
      margin: auto;
    }
  }
  article {
    ${displayFlex};
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 24px;
    width: fit-content;
    @media (max-width: 1190px) {
      width: 950px;
      margin: auto;
    }
    @media (max-width: 990px) {
      width: 685px;
    }
    @media (max-width: 765px) {
      width: 505px;
    }
    @media (max-width: 575px) {
      width: 100%;
    }
  }

  .btn {
    display: block;
    margin: 50px auto;
    padding: 10px 55px;
  }
`;