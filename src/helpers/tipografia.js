import colors from "./color";
import { css } from "styled-components";

const fonts = {
    dancing: "'Dancing Script', cursive",
    open: "'Open Sans', sans-serif",
    fontRegular: 400,
    fontSemiBold: 600,
    fontBold: 700,
}

const openRegular = css`
    font-family: ${fonts.open};
    font-weight: ${fonts.fontRegular};
`;

const openBold= css`
    ${openRegular};
    font-weight: ${fonts.fontBold};
`;
const dancingBold = css`
    font-family: ${fonts.dancing};
    font-weight: ${fonts.fontBold};
`
const dancingSemi = css`
    ${dancingBold};
    font-weight: ${fonts.fontSemi};
`

const bodyHover = css`
    &:hover{
        color: ${colors.yellowLight};
    }
`;

export {
    fonts,
    dancingBold,
    dancingSemi,
    openBold,
    openRegular,
    bodyHover
};