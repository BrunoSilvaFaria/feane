import { styled } from "styled-components";
import { alinhamento, displayFlex } from "../../styles"
import colors from "../../../helpers/color";
import { fonts } from "../../../helpers/tipografia";

export const Conteiner = styled.article`
  background: ${colors.blackBack};
  border-radius: 5px;
  width: 450px;
  height: 215px;
  @media (max-width: 990px) {
    width: 360px;
    height: 415px;
  }
  @media (max-width: 765px) {
    width: 540px;
    height: 215px;
    margin: 30px auto;
  }
  @media (max-width: 575px) {
    width: 100%;
  }
  @media (max-width: 430px) {
    height: 360px;
  }
  .alinhamento {
    ${displayFlex};
    ${alinhamento};
    height: inherit;
    @media (min-width: 760px) and (max-width: 990px) {
      flex-direction: column;
      height: 400px;
    }
    @media (max-width: 990px) {
      justify-content: center;
    }
    @media (max-width: 430px) {
      height: 350px;
      flex-direction: column;
    }
  }
  .background {
    ${displayFlex}
    width: 180px;
    height: 180px;
    border: 5px solid ${colors.yellowLight};
    border-radius: 50%;
    overflow: hidden;
    @media (min-width: 760px) and (max-width: 990px) {
      margin-bottom: 20px;
    }
    @media (max-width: 990px) {
      margin-right: 20px;
    }
    @media (max-width: 430px) {
      margin: 10px auto 15px auto;
    }
    img {
      border-radius: 50%;
      width: 175px;
      height: 175px;
      width: 100%;
    }
    img:hover {
      transition: all 0.2s;
      scale: calc(1.1);
    }
  }

  .descripition {
    width: 50%;
    @media (min-width: 760px) and (max-width: 990px) {
      text-align: center;
    }
    @media (max-width: 430px) {
      margin: auto;
      width: fit-content;
      text-align: center;
    }
    .item {
      font-size: 24px;
      line-height: 29px;
    }
    .price {
      display: inline-block;
      font-size: 40px;
      line-height: 48px;
      font-weight: ${fonts.weight[700]};
    }
    .price--small {
      margin-left: 3px;

      font-size: 16px;
      line-height: 19px;
    }

    .item,
    .price--small {
      font-weight: ${fonts.weight[500]};
    }

    .item,
    .price {
      margin-bottom: 10px;
    }
    .btn {
      ${displayFlex};
      padding: 10px 30px;
    }
  }
`;