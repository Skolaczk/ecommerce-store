import React from 'react';
import {
  StyledTitle,
  StyledSlidePhones,
  StyledParagraph,
} from '../../assets/styles/views/Homepage.styles';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

const PhonesSlider = ({ phones, countSlides, phonesIndex, title }) => {
  const [start, end] = phonesIndex;

  return (
    <div>
      <StyledTitle>{title}</StyledTitle>
      <Swiper slidesPerView={countSlides} spaceBetween={30} grabCursor={true}>
        {phones.slice(start, end).map(({ id, name, images, price }) => (
          <SwiperSlide key={id}>
            <StyledSlidePhones>
              <img src={images[0]} alt="" />
              <h3>{name.length > 30 ? `${name.slice(0, 30)}...` : name}</h3>
              <StyledParagraph>{price + '.00'} zł</StyledParagraph>
            </StyledSlidePhones>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PhonesSlider;
