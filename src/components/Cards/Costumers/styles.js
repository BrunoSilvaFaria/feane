import { styled } from "styled-components";
import { displayFlex } from "../../styles"
import { alinhamento } from "../../styles";
import colors from "../../../helpers/color";
import { fonts } from "../../../helpers/tipografia";

export const Conteiner = styled.article`
  .descripition {
    background: ${colors.blackBack};
    border-radius: 5px;
    width: 450px;
    height: 180px;
    margin-bottom: 30px;
    div {
      ${alinhamento};
      ${displayFlex}
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      height: inherit;
    }
    p {
      font-size: 15px;
      line-height: 23px;
      
      margin-bottom: 15px;
    }
    h4 {
      font-size: 18px;
      font-weight:${fonts.weight[600]};
      margin-bottom: 10px;
    }
    span {
      font-size: 15px;
    }
  }
  .background {
    ${displayFlex}
    position: relative;
    img {
      border: 5px solid ${colors.yellowDark};
    }

    &,
    img {
      width: 115px;
      height: 115px;
      border-radius: 50%;
    }
  }
  .background:before {
    content: "";
    position: absolute;
    bottom: 100px;
    left: 50%;
    border: 15px solid white;
    border-bottom-color: transparent;
    transform: translateX(-50%);
    background: ${colors.yellowDark};
    margin-bottom: 12px;
    z-index: 5;
  }
`;