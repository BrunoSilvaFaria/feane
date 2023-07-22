import { styled } from "styled-components";
import { HeaderDancing, ParagraphOpen } from "../../helpers/tipografia";
import { displayFlex } from '../../components/styles';
// import colors from "../../helpers/color";


export const Conteiner = styled.section`
  background-color: #222831;
  height: 900px;
  .conteiner{
    ${displayFlex};
    margin: auto;
    height: inherit;
    width: 90%;
    max-width: 950px;
  }

  img{
    width: 445px;
  }

  section{
    width: 450px;
    h1{
      ${HeaderDancing};
      margin-bottom: 15px;
    }

    p{
      ${ParagraphOpen};
    }
    
    .btn {
      display: block;
      margin-top: 30px;
      padding: 10px 45px;
    }
  }
`;