import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 25px;
  box-shadow: ${({ theme }) => theme.shadow};
  border-radius: 10px;
  max-width: 450px;
  margin: 0 auto;
  position: relative;

  h2 {
    font-size: ${({ theme }) => theme.font.size.xl};
    margin-bottom: 25px;
  }

  input:not([type='checkbox']) {
    border: 1px solid ${({ theme }) => theme.colors.silver};
    width: 100%;
    border-radius: 25px;
    padding: 10px;
    margin-bottom: 15px;

    &:focus {
      box-shadow: ${({ theme }) => theme.shadow};
      outline: none;
    }
  }

  input:not([type='email']) {
    padding: 10px 55px 10px 10px;
  }

  button[type='submit'] {
    background-color: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.white};
    border: none;
    border-radius: 25px;
    padding: 10px;
    margin-top: 10px;
    width: 100%;
    cursor: pointer;
  }

  ${({ theme }) => theme.mq.tablet} {
    margin: 50px auto;
    padding: 30px;
  }

  a {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

export const Container = styled.div`
  max-width: 450px;
  margin: 0 auto;
  padding: 25px 25px 0;

  h2 {
    font-size: ${({ theme }) => theme.font.size.xl};
  }

  button {
    border: 1px solid ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.blue};
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 25px;
    padding: 10px;
    width: 100%;
    margin-top: 25px;
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.blue};
    }
  }
`;

export const StyledPasswordBox = styled.div`
  position: relative;

  button[type='button'] {
    position: absolute;
    right: 15px;
    top: 11px;
    border: none;
    background: transparent;
    color: ${({ theme }) => theme.colors.lightGray};
    cursor: pointer;
  }
`;

export const StyledParagraph = styled.p`
  text-align: center;
  margin-top: 10px;
`;

export const StyledInputBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  input {
    margin: 0 5px;
  }

  label {
    color: ${({ theme }) => theme.colors.darkGray};
    font-size: ${({ theme }) => theme.font.size.s};
  }
`;

export const StyledContent = styled.p`
  text-align: left;
  color: ${({ theme }) => theme.colors.lightGray};
  margin-bottom: 15px;
`;
