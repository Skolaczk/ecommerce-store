import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper.min.css';
import { Autoplay } from 'swiper';
import {
  StyledSwiper,
  StyledImage,
  StyledSpecialPhone,
  StyledTitle,
  StyledSlidePhones,
  StyledParagraph,
  StyledSlidePromotion,
  Container,
  StyledContainerPhones,
  PromotionWrapper,
} from '../assets/styles/views/Homepage.styles';
import { useWindowWidth } from 'hooks/useWindowWidth';
import Line from 'components/Line/Line';
import PhonesSlider from 'components/PhonesSlider/PhonesSlider';
import { chooseCountSlides } from 'helpers/chooseCountSlides';
import Banner1 from '.././assets/images/homepage/banner1.webp';
import Banner2 from '.././assets/images/homepage/banner2.webp';
import Banner3 from '.././assets/images/homepage/banner3.webp';
import Promotion1 from '.././assets/images/homepage/promotion1.webp';
import Promotion2 from '.././assets/images/homepage/promotion2.webp';
import Promotion3 from '.././assets/images/homepage/promotion3.webp';
import Promotion4 from '.././assets/images/homepage/promotion4.webp';
import Promotion5 from '.././assets/images/homepage/promotion5.webp';

const Homepage = () => {
  const [specialPhone, setSpecialPhone] = useState({});
  const [phones, setPhones] = useState([]);
  const { id, name, price, images } = specialPhone;
  const width = useWindowWidth();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/phones/24`)
      .then(({ data }) => setSpecialPhone(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/phones`)
      .then(({ data }) => setPhones(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <StyledSwiper
        loop={true}
        grabCursor={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <StyledImage src={Banner1} alt="banner maj??wka" />
        </SwiperSlide>
        <SwiperSlide>
          <StyledImage src={Banner2} alt="banner pc master challenge" />
        </SwiperSlide>
        <SwiperSlide>
          <StyledImage src={Banner3} alt="banner Xiaomi spring week" />
        </SwiperSlide>
      </StyledSwiper>
      <Container>
        {images ? (
          <Link to={`/phone/${id}`}>
            <StyledSpecialPhone>
              <h2>Gor??cy strza??</h2>
              <img src={images[0]} alt="" />
              <h3>{name}</h3>
              <p>{price + '.00'} z??</p>
              <p>{price - 200 + '.00'} z??</p>
              <div>
                Oszcz??d??
                <span>{price - (price - 200)} z??</span>
              </div>
            </StyledSpecialPhone>
          </Link>
        ) : null}
        <StyledContainerPhones>
          {phones.slice(32, 40).map(({ id, name, images, price }) => (
            <Link to={`/phone/${id}`} key={id}>
              <StyledSlidePhones>
                <img src={images[0]} alt="" />
                <h3>{name.length > 30 ? `${name.slice(0, 30)}...` : name}</h3>
                <StyledParagraph>{price + '.00'} z??</StyledParagraph>
              </StyledSlidePhones>
            </Link>
          ))}
        </StyledContainerPhones>
      </Container>
      <Line />
      <PhonesSlider
        phones={phones}
        countSlides={chooseCountSlides(width)}
        phonesIndex={[12, 20]}
        title="Polecamy"
      />
      <Line />
      <StyledTitle>Promocje</StyledTitle>
      <PromotionWrapper>
        <StyledSlidePromotion>
          <img src={Promotion1} alt="Wyprzeda??" />
          <h3>??ap ostatnie sztuki</h3>
          <StyledParagraph>
            ??led?? wyprzeda??e i nie przegap okazji.
          </StyledParagraph>
        </StyledSlidePromotion>
        <StyledSlidePromotion>
          <img src={Promotion2} alt="Promocja telefonu Xiaomi" />
          <h3>kup Xiaomi Red...</h3>
          <StyledParagraph>Skorzystaj z okazji.</StyledParagraph>
        </StyledSlidePromotion>
        <StyledSlidePromotion>
          <img src={Promotion3} alt="Promocja telefon??w OPPO" />
          <h3>smartfony OPPO...</h3>
          <StyledParagraph>Zacznij przygod?? z OPPO.</StyledParagraph>
        </StyledSlidePromotion>
        <StyledSlidePromotion>
          <img src={Promotion4} alt="Promocja tygodnia Xiaomi" />
          <h3>Xiaomi spring week</h3>
          <StyledParagraph>Rozkwit niskich cen.</StyledParagraph>
        </StyledSlidePromotion>
        <StyledSlidePromotion>
          <img src={Promotion5} alt="Promocja marki Netatmo" />
          <h3>Marka Netatmo ...</h3>
          <StyledParagraph>Odkryj sezon na smarthome.</StyledParagraph>
        </StyledSlidePromotion>
      </PromotionWrapper>
      <Line />
      <PhonesSlider
        phones={phones}
        countSlides={chooseCountSlides(width)}
        phonesIndex={[0, 8]}
        title="Ostatnio ogl??dane"
      />
    </>
  );
};

export default Homepage;
