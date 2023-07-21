import { styled} from "styled-components";
import { displayFlex, background, icon } from '../styles';
import colors from '../../helpers/color';
import {
    dancingBold,
    openRegular,
    bodyHover
} from "../../helpers/tipografia";

export const Background = styled.div`
    background: url('src/assets/hero-bg.jpg');
    ${background};
    width: 100%;
    height: 630px;
`
export const Conteiner = styled.header`
    height: 90px;
    width: 90%;
    margin: auto;
    &, 
    ul,
    div,
    .icons{
        ${displayFlex};
        justify-content: space-between;
    }

    .logo{
        ${dancingBold}
        font-size: 32px;
    }

    nav{
        width: 360px;
        margin-right: 35px;
    }
    nav a{
        ${openRegular};
        ${bodyHover}; 
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