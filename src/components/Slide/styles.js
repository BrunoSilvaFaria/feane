import { styled } from "styled-components";
import { displayFlex } from "../styles";
import colors from "../../helpers/color";
import { fonts } from "../../helpers/tipografia";

export const Conteiner = styled.article`
    h2{
        color: ${colors.blackFont};
        font-size: 40px;
        font-weight: ${fonts.weight[700]};
        margin-bottom: 50px;
        text-align: center;
    }
  .buttons,
  .cards {
    ${displayFlex};
    margin: auto;
  }

  .cards {
    width: 90%;
    max-width: 930px;
    margin: auto auto 50px auto;
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
