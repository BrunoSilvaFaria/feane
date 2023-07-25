import { styled } from "styled-components";
import { HeaderDancing, ParagraphOpen } from "../../helpers/tipografia";
import { displayFlex } from "../../components/styles";
import colors from "../../helpers/color";

export const Conteiner = styled.section`
  height: 690px;
  margin: auto;
  max-width: 960px;
  @media (max-width: 990px){
    max-width: 720px;
    height: inherit;
    margin: 70px auto 100px auto;
  }
`;

export const Form = styled.form`
  width: 100%;
  height: inherit;
  ${displayFlex};
  flex-wrap: wrap;

  .conteiner {
    width: 100%;
  }
  .display {
    ${displayFlex};
    flex-wrap: wrap;
    width: 100%;
  }

  h1 {
    ${HeaderDancing};
    margin: 20px auto 30px auto ;
  }

  h1,
  input,
  select {
    color: ${colors.blackFont};
  }

  .inputs {
    width: 450px;
  }
  input,
  select {
    ${ParagraphOpen};
    border: 1px solid #999999;
    border-radius: 5px;
    padding: 15px 20px;
    margin-bottom: 25px;
    width: 100%;
  }

  .btn {
    display: block;
    margin-top: 5px;
    padding: 10px 55px;
    text-transform: uppercase;
  }

  iframe {
    border-radius: 10px;
    height: 345px;
  }

  .iframe{
    width: 450px;
  }

  @media (max-width: 990px) {
    .inputs,
    .iframe {
      width: 330px;
    }
  }
  @media (max-width: 765px) {
    .btn {
      margin-bottom: 50px;
    }
    .inputs,
    .iframe {
      width: 510px;
      margin: auto;
    }
  }
  @media (max-width: 575px) {
    .inputs,
    .iframe {
      width: 100%;
    }
  }
`;
