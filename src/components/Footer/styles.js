import { styled} from "styled-components";
import { displayFlex } from '../styles';
import { openRegular, dancingBold, dancingSemi } from "../../helpers/tipografia";
import colors from "../../helpers/color";

export const Conteiner = styled.header`
  background-color: #222831;
  height: 456px;
  ${openRegular};
  font-size: 1em;
  line-height: 24px;
  text-align: center;
  .alinhamento{
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
  .conteiners,
  .icons-social {
    ${displayFlex};
    align-items: flex-start;
  }

  .conteiner {
    width: 290px;
    h3,
    h2 {
      margin-bottom: 25px;
    }
    h2 {
      ${dancingBold};
      font-size: 38px;
      line-height: 38px;
    }
    h3 {
      ${dancingSemi};
      font-size: 28px;
      line-height: 34px;
    }

    .iconConteiner {
      margin-bottom: 10px;
      .icon {
        margin-right: 8px;
      }
    }
    p {
      margin-bottom: 20px;
    }
    .icons-social,
    span,
    li a {
      ${displayFlex};
      justify-content: center;
    }

    li a {
      background: white;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      margin-right: 5px;
      .icon path {
        color: #222831;
        &:hover{
          color: ${colors.yellowLight};
        }
      }
    }
  }
  footer{
    width: 100%;
    p{
      margin-bottom: 25px;
    }
  }
`;