import { styled } from "styled-components";
import { HeaderDancing, ParagraphOpen } from "../../helpers/tipografia";
import { displayFlex } from '../../components/styles';
import colors from "../../helpers/color";


export const Conteiner = styled.section`
  background-color: ${colors.blackBack};
  height: 900px;
  @media (max-width: 1000px) {
    &{
      height: auto;
    }
  }
  .conteiner {
    ${displayFlex};
    flex-wrap: wrap;
    flex-direction: row-reverse;
    margin: auto;
    height: inherit;
    width: 90%;
    max-width: 950px;
  }

  img {
    width: 100%;
    max-width: 445px;
  }

  section {
    width: 450px;
    h1 {
      ${HeaderDancing};
      margin-bottom: 15px;
    }

    p {
      ${ParagraphOpen};
    }

    .btn {
      display: block;
      margin-top: 30px;
      padding: 10px 45px;
    }
  }
  @media (max-width: 1000px) {
    .conteiner {
      max-width: 445px;
    }
    
    h1 {
      margin-top: 100px;
    }
    .btn {
      margin: 30px 0 50px 0;
    }
    img {
      margin-bottom: 100px;
    }
  }
`;