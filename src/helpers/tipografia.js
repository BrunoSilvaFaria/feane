import colors from "./color";
import { css } from "styled-components";

const fonts = {
    dancing: "'Dancing Script', cursive",
    weight: {
        400: "400",
        500: "500",
        600: "600",
        700: "700",
    }
};

const bodyHover = css`
  &:hover {
    color: ${colors.yellowLight};
  }
`;

const HeaderDancing = css`
  font-family: ${fonts.dancing};
  font-size: 2.5em;
  line-height: 1.2em;
`;

const ParagraphOpen = css`
  font-size: 1em;
  line-height: 1.5em;
`;

export {
  fonts,
  bodyHover,
  HeaderDancing,
  ParagraphOpen,
};
