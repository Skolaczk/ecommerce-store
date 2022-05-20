import styled from 'styled-components';

export const StyledTitle = styled.h2`
  color: ${({ theme }) => theme.colors.darkGray};
  margin-bottom: 10px;

  span {
    color: ${({ theme }) => theme.colors.lightGray};
  }
`;

export const StyledButtonWrapper = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.silver};
  border-bottom: 1px solid ${({ theme }) => theme.colors.silver};
  margin-left: -15px;
  width: 100vw;
  padding: 10px 15px;

  button {
    background-color: transparent;
    border: none;
    font-size: ${({ theme }) => theme.font.size.s};
    color: ${({ theme }) => theme.colors.darkGray};
    cursor: pointer;

    span {
      margin-right: 7.5px;
    }
  }

  ${({ theme }) => theme.mq.tablet} {
    margin-left: 0;
    width: auto;
    border: none;
  }
`;

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightSilver};
  margin-left: -15px;
  width: 100vw;
  padding: 15px;
  border-top: 1px solid ${({ theme }) => theme.colors.silver};
  border-bottom: 1px solid ${({ theme }) => theme.colors.silver};

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: ${({ theme }) => theme.font.weight.bold};
    color: ${({ theme }) => theme.colors.darkGray};
    margin: 5px 0 10px;
  }

  ${({ theme }) => theme.mq.tablet} {
    max-width: 400px;
    margin: 0 auto;
    border: 1px solid ${({ theme }) => theme.colors.silver};
    border-radius: 10px;
  }

  ${({ theme }) => theme.mq.desktop} {
    position: relative;
    top: 50px;
  }
`;

export const StyledButton = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.blue};
  border: none;
  color: ${({ theme }) => theme.colors.white};
  padding: 10px;
  border-radius: 25px;
  text-align: center;
  cursor: pointer;
`;

export const StyledTransparentButton = styled(StyledButton)`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.gray};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  margin-top: 10px;
`;

export const StyledListItem = styled.div`
  width: 100vw;
  padding: 10px 15px;
  margin-left: -15px;
  color: ${({ theme }) => theme.colors.darkGray};

  a {
    color: ${({ theme }) => theme.colors.darkGray};
    display: flex;
  }

  img {
    width: 70px;
    margin-right: 5px;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  p {
    font-size: ${({ theme }) => theme.font.size.s};
  }

  button {
    border: none;
    background-color: transparent;
    margin-left: 25px;
    padding: 5px;
    color: ${({ theme }) => theme.colors.darkGray};
    font-size: ${({ theme }) => theme.font.size.m};
    cursor: pointer;
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.silver};
  }

  ${({ theme }) => theme.mq.tablet} {
    width: 100%;
    margin-left: 0;
    display: flex;
    align-items: center;
    position: relative;

    div {
      justify-content: center;
      align-items: center;
    }

    p {
      display: flex;
      align-items: center;
    }

    button {
      position: absolute;
      right: 15px;
    }
  }
`;

export const StyledPrice = styled.p`
  text-align: right;

  ${({ theme }) => theme.mq.tablet} {
    position: absolute;
    right: 50px;
  }
`;

export const StyledInfo = styled.div`
  color: ${({ theme }) => theme.colors.lightGray};
  margin: 10px 0 25px;
  display: flex;

  span {
    margin-right: 10px;
  }

  p {
    font-size: ${({ theme }) => theme.font.size.xs};
  }

  ${({ theme }) => theme.mq.tablet} {
    max-width: 400px;
    margin: 15px auto 0;
  }

  ${({ theme }) => theme.mq.desktop} {
    margin-top: 65px;
  }
`;

export const Container = styled.div`
  text-align: center;
  margin: 0 auto 25px;
  max-width: 400px;

  h2 {
    font-weight: ${({ theme }) => theme.font.weight.regular};
    color: ${({ theme }) => theme.colors.darkGray};
    font-size: ${({ theme }) => theme.font.size.xl};
  }

  p {
    color: ${({ theme }) => theme.colors.lightGray};
    font-size: ${({ theme }) => theme.font.size.m};
    margin: 10px 0;
  }
`;

export const StyledHeader = styled.div`
  ${({ theme }) => theme.mq.tablet} {
    display: flex;
    justify-content: space-between;
  }
`;

export const StyledList = styled.div`
  ${({ theme }) => theme.mq.tablet} {
    border: 1px solid ${({ theme }) => theme.colors.silver};
    border-radius: 10px;
    margin: 10px 0 25px;
  }
`;

export const Box = styled.div`
  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    justify-content: space-between;
  }
`;

export const Cart = styled.div`
  ${({ theme }) => theme.mq.desktop} {
    width: 100%;
    margin-right: 20px;
  }
`;
