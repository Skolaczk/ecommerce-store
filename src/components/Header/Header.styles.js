import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledHeader = styled.header`
  padding: 10px;
  box-shadow: ${({ theme }) => theme.shadow};

  ${({ theme }) => theme.mq.desktop} {
    padding: 10px 0 0 0;
  }
`;

export const Container = styled.div`
  ${({ theme }) => theme.mq.desktop} {
    padding: 10px 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ theme }) => theme.mq.desktop} {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 15px;
  }
`;

export const IconsWrapper = styled.div`
  display: flex;
  position: relative;
`;

export const StyledIcon = styled(Link)`
  text-align: center;
  color: ${({ theme }) => theme.colors.black};

  p {
    font-size: ${({ theme }) => theme.font.size.xxs};
    margin-top: 5px;
  }

  &:not(:last-child) {
    margin-right: 10px;

    ${({ theme }) => theme.mq.tablet} {
      margin-right: 25px;
    }
  }
`;

export const StyledButton = styled(StyledIcon)`
  background-color: transparent;
  border: none;
  cursor: pointer;

  ${({ theme }) => theme.mq.desktop} {
    display: none;
  }

  span {
    font-size: ${({ theme }) => theme.font.size.s};
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 100px;
  }

  input {
    display: none;
  }

  ${({ theme }) => theme.mq.desktop} {
    width: 83%;

    input {
      display: block;
      height: 35px;
      width: 95%;
      margin: 0 25px;
    }
  }
`;

export const StyledNavigation = styled.nav`
  display: flex;
  margin-top: 10px;

  ${({ theme }) => theme.mq.desktop} {
    input {
      display: none;
    }
  }
`;

export const StyledMenu = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: white;
  top: 0;
  left: -100%;
  z-index: 2;
  transform: ${({ isMenuOpen }) => (isMenuOpen ? 'translateX(100%)' : '')};
  transition: transform 0.25s ease-in-out;

  ${({ theme }) => theme.mq.desktop} {
    transform: none;
    position: static;
    height: auto;
    background-color: ${({ theme }) => theme.colors.lightSilver};
  }
`;

export const StyledMenuHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.lightSilver};
  display: flex;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.silver};

  ${({ theme }) => theme.mq.desktop} {
    display: none;
  }

  ${StyledButton} {
    margin-right: 15px;
    span {
      font-size: ${({ theme }) => theme.font.size.l};
      color: ${({ theme }) => theme.colors.gray};
    }
  }

  h2 {
    font-size: ${({ theme }) => theme.font.size.m};
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export const StyledMenuContent = styled.div`
  padding: 15px;

  ${({ theme }) => theme.mq.desktop} {
    padding: 0;
  }

  ul {
    list-style: none;
    ${({ theme }) => theme.mq.desktop} {
      display: flex;
      justify-content: space-around;
      max-width: 1400px;
      margin: 0 auto;
    }
  }
`;

export const StyledTitle = styled.p`
  color: ${({ theme }) => theme.colors.lightGray};
  font-size: ${({ theme }) => theme.font.size.xs};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  margin-bottom: 10px;

  ${({ theme }) => theme.mq.desktop} {
    display: none;
  }
`;

export const StyledListItem = styled.li`
  margin: 20px 0;

  a {
    display: flex;
    justify-content: space-between;
  }

  p,
  span {
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.font.size.s};
  }

  span {
    color: ${({ theme }) => theme.colors.gray};

    ${({ theme }) => theme.mq.desktop} {
      display: none;
    }
  }
`;

export const StyledCounter = styled.span`
  position: absolute;
  top: -6px;
  right: -1px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  font-size: ${({ theme }) => theme.font.size.xxs};
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
`;
