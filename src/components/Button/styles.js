import { styled, css } from "styled-components";
import colors from "../../helpers/color";
export const button = css` 
    background: ${colors.yellowLight};
    border: none;
    border-radius: 45px;

    color: ${colors.white};
    font-size: 16px;
    
    display: inline-block;
    padding: 8px 30px;
    
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    &:hover{
        background-color: ${colors.yellowLight};
    }
`
export const ButtonMenu = styled.button`
    ${button};
`