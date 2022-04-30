import styled from 'styled-components';
import { Swiper } from 'swiper/react/swiper-react.js';

export const StyledPhone = styled.div`
  img {
    max-width: 100%;
    margin-bottom: 5px;
  }

  h2 {
    font-weight: ${({ theme }) => theme.font.weight.regular};
  }

  button {
    text-align: right;
    background-color: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.font.size.s};
    border: none;
    border-radius: 25px;
    cursor: pointer;
    display: flex;
    align-items: center;
    width: 200px;
    padding: 10px;
    justify-content: space-evenly;
    margin: 0 0 20px auto;

    span {
      font-size: ${({ theme }) => theme.font.size.m};
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    margin-top: 15px;
  }
`;

export const StyledPrice = styled.p`
  text-align: right;
  font-size: ${({ theme }) => theme.font.size.m};
  color: ${({ theme }) => theme.colors.gray};
  margin: 10px 0 5px;
`;

export const StyledName = styled.h2`
  font-size: ${({ theme }) => theme.font.size.m};

  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.font.size.xl};
    margin-bottom: 25px;
  }
`;

export const StyledTitle = styled.h2`
  font-size: ${({ theme }) => theme.font.size.xxl};
  text-align: center;
`;

export const StyledDescription = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.font.size.l};
  text-align: justify;
  margin: 15px 0;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  color: ${({ theme }) => theme.colors.darkGray};
  &:nth-child(even) {
    background-color: ${({ theme }) => theme.colors.lightSilver};
  }

  div:first-child {
    width: 35%;
    word-wrap: break-word;
    margin-right: 10px;
    font-weight: ${({ theme }) => theme.font.weight.bold};
  }

  div:last-child {
    width: 65%;
  }
`;

export const StyledInformation = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.silver};
  border-bottom: none;
  display: flex;
  align-items: center;
  padding: 15px;

  span {
    margin-right: 15px;
  }

  div p:first-child {
    color: ${({ theme }) => theme.colors.blue};
    font-size: ${({ theme }) => theme.font.size.s};
  }

  div p:last-child {
    color: ${({ theme }) => theme.colors.lightGray};
    font-size: ${({ theme }) => theme.font.size.xs};
  }

  &:first-child {
    border-radius: 5px 5px 0 0;
  }

  &:last-child {
    border-bottom: 1px solid ${({ theme }) => theme.colors.silver};
    border-radius: 0 0 5px 5px;
  }
`;

export const Container = styled.div`
  ${({ theme }) => theme.mq.tablet} {
    display: flex;
  }
`;

export const WrapperInformation = styled.div`
  ${({ theme }) => theme.mq.tablet} {
    width: 125%;
    margin-top: 35px;
  }
`;

export const StyledSwiper = styled(Swiper)`
  text-align: center;
`;
