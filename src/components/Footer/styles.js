import { styled} from "styled-components";
import { displayFlex } from '../styles';

import colors from "../../helpers/color";
import { fonts } from "../../helpers/tipografia";

export const Conteiner = styled.header`
  background-color: ${colors.blackBack};
  height: 456px;
  font-size: 1em;
  line-height: 24px;
  text-align: center;
  @media (max-width: 765px) {
    & {
      height: inherit;
    }
  }
  .alinhamento {
    ${displayFlex};
    flex-wrap: wrap;
    height: inherit;
  }
  .conteiners {
    width: 90%;
    max-width: 960px;
    margin: auto;
    margin-bottom: 30px;
  }
  .icons-social {
    ${displayFlex};
    align-items: flex-start;
  }
  @media (min-width: 765px) {
    .conteiners {
      ${displayFlex};
      align-items: flex-start;
    }
  }

  .conteiner {
    width: 290px;
    h3,
    h2 {
      margin-bottom: 25px;
    }
    h2 {
      font-size: 38px;
      line-height: 38px;
      font-weight: ${fonts.weight[700]};
    }
    h3 {
      font-size: 28px;
      line-height: 34px;
      font-weight: ${fonts.weight[600]};
    }

    .iconConteiner {
      margin-bottom: 10px;
      .icon {
        margin-right: 8px;
      }
    }
    p {
      color: ${colors.whiteFont};
      margin-bottom: 20px;
    }
    .icons-social,
    span,
    li a {
      ${displayFlex};
      justify-content: center;
    }

    li a {
      background: #fff;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      margin-right: 5px;
      .icon path {
        color: ${colors.blackFont};
        &:hover {
          color: ${colors.yellowLight};
        }
      }
    }
  }
  @media (max-width: 765px) {
    .conteiner {
      margin: auto;
      width: 100%;
      max-width: 510px;
    }
    .conteiner:first-child{
      margin: 80px auto 0 auto;
    }
    h2,
    h3 {
      margin: 50px auto 25px auto;
    }
  }
  footer {
    width: 100%;
    p {
      margin-bottom: 25px;
    }
  }
`;