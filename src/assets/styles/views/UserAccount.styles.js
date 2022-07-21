import styled from 'styled-components';
import ReactModal from 'react-modal';

export const StyledButton = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 25px;
  padding: 10px;
  border: none;
  margin-top: 10px;
  cursor: pointer;

  ${({ theme }) => theme.mq.desktop} {
    margin: 0 auto;
    width: 200px;
  }
`;

export const StyledInfoBox = styled.div`
  text-align: center;
  margin: 0 auto;
  max-width: 450px;

  p {
    margin: 15px 0;
  }
`;

export const Wrapper = styled.div`
  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

export const StyledInputBox = styled.div`
  margin: 15px 0;
  position: relative;

  label {
    display: block;
    margin-bottom: 5px;
    color: ${({ theme }) => theme.colors.darkGray};
  }

  input {
    width: 100%;
    border-radius: 5px;
    background: transparent;
    border: 1px solid ${({ theme }) => theme.colors.lightSilver};
    padding: 15px 60px 15px 15px;
  }

  button {
    position: absolute;
    right: 10px;
    top: 40px;
    color: ${({ theme }) => theme.colors.blue};
    background: transparent;
    border: none;
    cursor: pointer;
  }
`;

export const StyledGrayButton = styled.button`
  border-radius: 25px;
  background-color: ${({ theme }) => theme.colors.lightSilver};
  color: ${({ theme }) => theme.colors.gray};
  border: none;
  padding: 10px 15px;
  width: 100%;
  margin-bottom: 25px;
  cursor: pointer;

  ${({ theme }) => theme.mq.desktop} {
    width: 200px;
  }
`;

export const StyledTitle = styled.h2`
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: ${({ theme }) => theme.font.size.xl};
  font-weight: ${({ theme }) => theme.font.weight.regular};
`;

export const StyledSmallTitle = styled.h3`
  font-size: ${({ theme }) => theme.font.size.l};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  margin-top: 20px;
`;

export const StyledParagraph = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.font.size.s};
  margin: 15px 0;
`;

export const Box = styled.div`
  ${({ theme }) => theme.mq.desktop} {
    width: 48%;
  }
`;

export const StyledModal = styled(ReactModal)`
  height: 150px;
  background-color: ${({ theme }) => theme.colors.white};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  padding: 20px;
  box-shadow: ${({ theme }) => theme.shadow};
  min-width: 300px;

  h2 {
    font-size: ${({ theme }) => theme.font.size.m};
    color: ${({ theme }) => theme.colors.darkGray};
  }

  div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: transparent;
      border: none;
      font-size: 20px;
    }
  }

  p {
    margin: 10px 0 20px;
    color: ${({ theme }) => theme.colors.gray};
    font-size: ${({ theme }) => theme.font.size.s};
  }

  button {
    cursor: pointer;
  }

  div:last-child {
    display: flex;
    justify-content: flex-end;
  }
`;

export const StyledTransparentButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.font.size.s};
  padding: 10px 15px;
`;

export const StyledRedButton = styled.button`
  border-radius: 25px;
  background-color: ${({ theme }) => theme.colors.juicyRed};
  border: none;
  padding: 10px 15px;
  color: ${({ theme }) => theme.colors.white};
`;

export const overlayStyle = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
};
