import styled, {css} from "styled-components";

export const CartCostSummaryContainer = styled.div`
  margin: 40px 30px;
  color: ${blackFont};
  font-weight: bold;
  font-size: 18px;

  > div:nth-child(2) {
    margin: 20px 0;
  }
`;

export const Total = styled.div`
  font-size: ${H4Fs};
  line-height: 32px;
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  border-top: 1px solid ${lightGrey};
`;

export const PricePart = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  > div:first-child {
  }

  > div:last-child {
  }
`;

export const CostSummaryButton = styled.button`
  height: 59px;
  width: 380px;
  background-color: ${pink};
  border: 1px solid ${pink};
  color: ${white};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${H5Fs};
  font-weight: bold;
  line-height: 23px;  
  cursor: pointer;
  
  ${(props) => props.disabled === true && css`       
     border: 1px solid ${blackFont};
     background-color: ${lightGrey};
     color: ${blackFont};
     cursor: not-allowed;
  `}
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  justify-content: center;
  margin-top: ${ContainerHorizonIndent};
`;

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  min-width: 187px;
  width: auto;
  margin: 0;
  padding: 20px;
  border-radius: 7px;
  border: 1px solid ${darkgrey};
  color: ${blackFont};
  font-family: ${FFSarabunExtraBold};
  font-size: ${bodyFs};
  font-weight: bold;
  align-items: center;
  justify-content: center;
  background-color: ${white};

  &:hover {
    background-color: ${darkPurple};
    border: 1px solid ${darkPurple};
    color: ${white};
    cursor: pointer;
  }

  &:first-child {
  }
  &:not(:last-child) {
    margin-right: 75px;
  }
`;

export const TermsAndService = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0 30px;
`;

export const TermsAndServiceSign = styled.div`
  color: ${blackFont};
  font-size: 14px;

  & > a {
    color: ${pink};
    text-decoration: none;
  }
`;
