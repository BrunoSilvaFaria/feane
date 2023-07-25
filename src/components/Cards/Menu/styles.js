import { styled } from "styled-components";
import { displayFlex, alinhamento } from "../../styles"
import colors from "../../../helpers/color";
import { fonts } from "../../../helpers/tipografia";

export const Conteiner = styled.section`
  background: linear-gradient(
    to bottom,
    ${colors.whiteBack} 25px,
    ${colors.blackBack} 25px
  );
  border-radius: 20px;
  height: inherit;
  width: 100%;
  
  .background {
    ${displayFlex}
    border-radius: 20px 20px 0px 45px;
    background: ${colors.whiteBack};
    margin-bottom: 25px;
    padding: 25px;
    height: 215px;
    img {
      margin: auto;
      max-width: 100%;
      max-height: 145px;
    }
    img:hover {
      transition: all 0.2s;
      scale: calc(1.1);
    }
  }
  .descripition {
    ${alinhamento};
    width: 83%;
    h3 {
      font-size: 1.25em;
      font-weight: ${fonts.weight[600]};
      margin-bottom: 15px;
    }
    p {
      font-size: 0.938em;
      line-height: 1.5em;
      margin-bottom: 15px;
    }
  }
  .footer {
    ${displayFlex};
    span {
      font-size: 1em;
      font-weight: 500;
      line-height: 1.2em;
    }
  }
`;