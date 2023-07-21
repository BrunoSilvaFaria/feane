import { styled, css } from "styled-components";
import colors from "../../helpers/color";
import { openRegular } from "../../helpers/tipografia";
export const button = css` 
    background: ${colors.yellowLight};
    border: none;
    border-radius: 45px;

    ${openRegular};
    font-size: 16px;
    
    display: inline-block;
    padding: 8px 30px;

    &:hover{
        background-color: ${colors.yellowDark};
    }
`
export const ButtonMenu = styled.button`
    ${button};
`