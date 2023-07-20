import {  css } from "styled-components";
import colors from "../helpers/color";

export const displayFlex = css`
    display: flex;
    align-items: center;
`

export const background = css`
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
`

export const icon = css`
    color: ${colors.white};
    font-size: 16px;
    &:hover{
        color: ${colors.yellowLight};
    }
`
