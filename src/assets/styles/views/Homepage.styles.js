import styled from 'styled-components';
import { Swiper } from 'swiper/react/swiper-react.js';

export const Container = styled.div`
  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    align-items: center;
  }
`;

export const PromotionWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 25px;
`;

export const StyledSwiper = styled(Swiper)`
  border-radius: 15px;
  z-index: 1;
  margin-bottom: 10px;
`;

export const StyledImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const StyledSpecialPhone = styled.div`
  margin: 15px 0;
  border: 2px solid ${({ theme }) => theme.colors.pink};
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  position: relative;

  img {
    width: 100%;
    margin-top: 30px;
  }

  h2 {
    font-size: ${({ theme }) => theme.font.size.xl};
    color: ${({ theme }) => theme.colors.darkGray};
    text-align: left;
  }

  h3 {
    font-weight: ${({ theme }) => theme.font.weight.regular};
    color: ${({ theme }) => theme.colors.darkGray};
    font-size: ${({ theme }) => theme.font.size.l};
    margin: 5px 0 20px;
  }

  p:nth-child(4) {
    color: ${({ theme }) => theme.colors.lightGray};
    font-size: ${({ theme }) => theme.font.size.m};
    text-decoration: line-through;
  }

  p:nth-child(5) {
    color: ${({ theme }) => theme.colors.pink};
    font-size: ${({ theme }) => theme.font.size.xl};
    font-weight: ${({ theme }) => theme.font.weight.bold};
  }

  div {
    color: ${({ theme }) => theme.colors.white};
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.lightGray};
    position: absolute;
    right: 15px;
    top: 15px;
    width: 100px;
    height: 60px;

    span {
      display: block;
      font-size: ${({ theme }) => theme.font.size.l};
    }
  }

  ${({ theme }) => theme.mq.bigPhone} {
    max-width: 400px;
    margin: 10px auto;
  }

  ${({ theme }) => theme.mq.desktop} {
    margin: 10px 0;
  }
`;

export const StyledSlidePhones = styled.div`
  max-width: 1400px;

  img {
    max-width: 100%;
  }

  h3 {
    color: ${({ theme }) => theme.colors.darkGray};
    font-size: ${({ theme }) => theme.font.size.s};
    font-weight: ${({ theme }) => theme.font.weight.regular};
    margin: 5px 0;
  }
`;

export const StyledContainerPhones = styled.div`
  display: none;

  img {
    max-height: 200px;
  }

  ${({ theme }) => theme.mq.desktop} {
    margin: 25px 0 25px 50px;
    display: grid;
    gap: 5px 30px;
    grid-template-columns: repeat(4, 1fr);
  }

  ${StyledSlidePhones} {
    padding: 15px;
    border-radius: 10px;

    &:hover {
      box-shadow: ${({ theme }) => theme.shadow};
    }
  }
`;

export const StyledTitle = styled.h2`
  color: ${({ theme }) => theme.colors.darkGray};
  margin-bottom: 15px;
  font-size: ${({ theme }) => theme.font.size.xl};
`;

export const StyledSlidePromotion = styled(StyledSlidePhones)`
  img {
    box-shadow: ${({ theme }) => theme.shadow};
    border-radius: 10px;
  }

  h3 {
    font-size: ${({ theme }) => theme.font.size.m};
    font-weight: ${({ theme }) => theme.font.weight.bold};
  }
`;

export const StyledParagraph = styled.p`
  color: ${({ theme }) => theme.colors.lightGray};
  text-decoration: ${({ isSale }) => (isSale ? 'line-through' : 'none')};
  font-size: ${({ theme }) => theme.font.size.xs};
`;
