import { styled} from "styled-components";
import { displayFlex, background, icon } from '../styles';
import colors from '../../helpers/color';

export const Background = styled.div`
  background: url("/assets/hero-bg.jpg");
  background-position: ${(props) => props.activeLink !== "/" ? "top" : "center"};
  width: 100%;
  height: ${(props) => (props.activeLink !== "/" ? "90px" : "630px")};
`;
export const Conteiner = styled.header`
    height: 90px;
    width: 90%;
    margin: auto;
    &, 
    ul,
    div,
    .icons{
        ${displayFlex};
    }

    .logo{
        font-size: 32px;
    }

    nav{
        width: 360px;
        margin-right: 35px;
    }
    nav a{

        text-transform: uppercase;
    }

    .link-active{
        color: ${colors.yellowLight};
    }

    .icon{
        ${icon};
        margin-right: 20px;
    }
    
`