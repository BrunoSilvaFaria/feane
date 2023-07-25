import { styled } from "styled-components";
import { displayFlex } from "../../components/styles";
export const Discount = styled.section`
  @media (min-width: 766px){
    ${displayFlex};
    justify-content: center;
    align-items: flex-end;
  }
  gap: 30px;
  width: 95%;
  margin: 100px auto;
`;