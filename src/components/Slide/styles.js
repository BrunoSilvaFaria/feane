import { styled } from "styled-components";
import { displayFlex } from "../styles";
import colors from "../../helpers/color";
import { fonts } from "../../helpers/tipografia";

export const Conteiner = styled.article`
  h2 {
    color: ${colors.blackFont};
    font-size: 40px;
    font-weight: ${fonts.weight[700]};
    margin-bottom: 50px;
    text-align: center;
  }
  .buttons {
    ${displayFlex};
    margin: auto;
  }

  .slide {
    ${displayFlex};
    margin: auto;
    width: 90%;
    max-width: 930px;
    margin: auto auto 50px auto;
    overflow: hidden;
    @media (max-width: 990px) {
      width: 690px;
    }
    @media (max-width: 768px) {
      width: 510px;
    }
    @media (max-width: 575px) {
      width: 90%;
    }
  }

  .buttons {
    width: 100px;
    margin-bottom: 90px;
    .btn {
      ${displayFlex};
      justify-content: center;
      height: 45px;
      width: 45px;
      background: ${colors.yellowLight};
      border-radius: 50%;
    }
    span {
      font-size: 48px;
      padding-bottom: 10px;
    }
  }
`;
