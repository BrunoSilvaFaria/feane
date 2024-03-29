import {  css } from "styled-components";
import { bodyHover } from "../helpers/tipografia";

export const displayFlex = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const background = css`
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
`

export const icon = css`
    font-size: 16px;
    path{
        ${bodyHover};
    }
`

export const alinhamento = css`
    width: 90%;
    margin: auto;
`
