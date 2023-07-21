import colors from "./color";
import { css } from "styled-components";

const fonts = {
    dancing: "'Dancing Script', cursive",
    fontRegular: 400,
    fontSemiBold: 600,
    fontBold: 700,
}

const openRegular = css`
    font-weight: ${fonts.fontRegular};
`;
const openRegularBlack = css`
  ${openRegular};
  color: ${colors.black};
`;
const openBold= css`
    ${openRegular};
    font-weight: ${fonts.fontBold};
`;

const openBoldBlack = css`
  ${openBold};
  color: ${colors.black};
`;
const dancingBold = css`
    font-family: ${fonts.dancing};
    font-weight: ${fonts.fontBold};
`
const dancingBoldBlack = css`
  ${dancingBold};
  color: ${colors.black};
`;

const dancingSemi = css`
    ${dancingBold};
    font-weight: ${fonts.fontSemi};
`
const dancingSemiBlack = css`
  ${dancingSemi};
  color: ${colors.black};
`;

const bodyHover = css`
    &:hover{
        color: ${colors.yellowLight};
    }
`;

export {
  fonts,
  dancingBold,
  dancingBoldBlack,
  dancingSemi,
  dancingSemiBlack,
  openBold,
  openBoldBlack,
  openRegular,
  openRegularBlack,
  bodyHover,
};