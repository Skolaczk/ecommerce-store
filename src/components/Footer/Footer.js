import React from 'react';
import {
  StyledFooter,
  StyledList,
  StyledIconsList,
  Wrapper,
} from './Footer.styles';

const Footer = () => {
  return (
    <StyledFooter>
      <h2>Kontakt</h2>
      <Wrapper>
        <StyledList>
          <div>
            <span className="fa-solid fa-phone"></span>
            <span>34 377 00 00</span>
          </div>
          <div>
            <span className="fa-solid fa-envelope"></span>
            <span>x-kom@x-kom.pl</span>
          </div>
          <div>
            <span className="fa-solid fa-location-dot"></span>
            <span>Salony x-kom</span>
          </div>
          <div>
            <span className="fa-solid fa-calendar-days"></span>
            <span>Umów wizytę w salonie</span>
          </div>
        </StyledList>
        <StyledIconsList>
          <span className="fa-brands fa-facebook"></span>
          <span className="fa-brands fa-instagram"></span>
          <span className="fa-brands fa-youtube"></span>
          <span className="fa-brands fa-twitter"></span>
        </StyledIconsList>
      </Wrapper>
      <p>© x-kom 2002 - 2022</p>
    </StyledFooter>
  );
};

export default Footer;
