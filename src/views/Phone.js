import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import { Pagination } from 'swiper';
import Line from 'components/Line/Line';
import {
  StyledPhone,
  Container,
  StyledSwiper,
  WrapperInformation,
  StyledName,
  StyledPrice,
  StyledInformation,
  StyledTitle,
  StyledDescription,
  Wrapper,
} from '../assets/styles/views/Phone.styles';

const Phone = () => {
  const [phone, setPhone] = useState({});
  const { id } = useParams();
  const { name, price, images, description, specification } = phone;

  useEffect(() => {
    axios
      .get(`http://localhost:8000/phones/${id}`)
      .then(({ data }) => setPhone(data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <StyledPhone>
      {images ? (
        <div>
          <Container>
            <StyledSwiper
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              grabCursor={true}
            >
              {images.map((image) => (
                <SwiperSlide key={image}>
                  <img src={image} alt="" />
                </SwiperSlide>
              ))}
            </StyledSwiper>
            <WrapperInformation>
              <StyledName>{name}</StyledName>
              <StyledPrice>{price}.00 zł</StyledPrice>
              <button>
                <span className="fa-solid fa-cart-plus"></span> Dodaj do koszyka
              </button>
              <div>
                <StyledInformation>
                  <div>
                    <span className="fa-solid fa-circle-check"></span>
                  </div>
                  <div>
                    <p>Dostępny</p>
                    <p>Dowiedz się więcej</p>
                  </div>
                </StyledInformation>
                <StyledInformation>
                  <div>
                    <span className="fa-solid fa-clock"></span>
                  </div>
                  <div>
                    <p>Kup teraz, otrzymasz pojutrze</p>
                    <p>Dowiedz się więcej</p>
                  </div>
                </StyledInformation>
                <StyledInformation>
                  <div>
                    <span className="fa-solid fa-truck-front"></span>
                  </div>
                  <div>
                    <p>Darmowa dostawa</p>
                    <p>Sprawdź szczegóły</p>
                  </div>
                </StyledInformation>
              </div>
            </WrapperInformation>
          </Container>
          <Line />
          <StyledTitle>Smartfon {name}</StyledTitle>
          <StyledDescription>{description}</StyledDescription>
          <div>
            {Object.entries(specification).map(([key, value]) => (
              <Wrapper key={key}>
                <div>{key}</div>
                <div>{value}</div>
              </Wrapper>
            ))}
          </div>
        </div>
      ) : null}
    </StyledPhone>
  );
};

export default Phone;
