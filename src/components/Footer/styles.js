import { styled} from "styled-components";
import { displayFlex } from '../styles';
import { openRegular, dancingBold, dancingSemi } from "../../helpers/tipografia";

export const Conteiner = styled.header`
  background-color: #222831;
  ${openRegular};
  font-size: 1em;
  line-height: 24px;
  text-align: center;
  .conteiners {
    width: 90%;
    max-width: 960px;
    margin: auto;
  }
  .conteiners,
  .icons-social {
    ${displayFlex};
    align-items: flex-start;
  }

  .conteiner {
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
    width: 290px;
    .icons-social,
    span {
      ${displayFlex};
      justify-content: center;
    }
  }
`;