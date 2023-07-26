import { styled} from "styled-components";
import { displayFlex, background, icon } from '../styles';
import colors from '../../helpers/color';

export const Background = styled.div`
  background: url("/assets/hero-bg.jpg");
  background-position: ${(props) =>
    props.activeLink !== "/" ? "top" : "center"};
  width: 100%;
  height: ${(props) => props.activeLink !== "/" && !props.showElement ? "90px" : "990px"};
    
  @media (min-width: 990px){
    &{
      height: ${(props) => props.activeLink !== "/" && !props.showElement ? "90px" : "630px"};
    }
}
    
`;
export const Conteiner = styled.header`
  height: 90px;
  width: 90%;
  max-width: 1130px;
  margin: auto;
  @media (min-width: 990px) {
    .icon--menu {
      display: none;
    }
    &,
    ul,
    div,
    .icons {
      ${displayFlex};
    }
  }
  .logo {
    font-size: 32px;
  }

  nav {
    width: 360px;
    margin-right: 35px;
  }
  @media (max-width: 989px) {
    .menu,
    .icons_conteiner {
      ${displayFlex}
    }

    .menu {
      height: 90px;
    }
    .icons_conteiner {
      width: fit-content;
    }
    .menu--responsivo,
    nav,
    ul,
    .icons_conteiner {
      margin: auto;
      width: fit-content;
    }

    li {
      text-align: center;
      margin: auto auto 25px auto;
    }
    li:last-child {
      margin-bottom: 30px;
    }
  }
  nav a {
    text-transform: uppercase;
    &:hover {
      color: ${colors.yellowLight};
    }
  }

  .link-active {
    color: ${colors.yellowLight};
  }

  .icon {
    ${icon};
    margin-right: 20px;
  }
`;