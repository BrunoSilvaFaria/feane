import { styled} from "styled-components";
import { displayFlex, background, icon } from '../styles';
import colors from '../../helpers/color'

export const Background = styled.div`
    background: url('src/assets/hero-bg.jpg');
    ${background};
    width: 100%;
    height: 630px;
`
export const Conteiner = styled.header`
        height: 60px;
        width: 95%;
        margin: auto;
    &, ul{
        ${displayFlex};
    }
    .logo{
        font-weight: bold;
        font-size: 32px;
        color: #${colors.white};
    }
    nav a{
        color: ${colors.white};
    }
    .link-active{
        color: ${colors.yellowLight};
    }
    .icon{
        ${icon};
        margin-right: 15px;
    }
    div,
    .icons{
        ${displayFlex};
    }
    
`