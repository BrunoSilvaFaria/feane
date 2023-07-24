import { styled, css } from "styled-components";
import colors from "../../helpers/color";
import { displayFlex } from "../styles";

export const button = css` 
    background: ${colors.yellowLight};
    border: none;
    border-radius: 45px;

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

export const ButtonSmall = styled.button`
    ${displayFlex};
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: ${colors.yellowLight};

    .icon{
        font-size: 20px;
    }
`;