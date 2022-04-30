import React, { useState, useEffect } from 'react';
import {
  StyledHeader,
  Wrapper,
  IconsWrapper,
  StyledIcon,
  StyledNavigation,
  StyledButton,
  StyledInput,
  StyledMenu,
  StyledMenuHeader,
  StyledMenuContent,
  StyledListItem,
  StyledTitle,
  LogoWrapper,
} from './Header.styles';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.svg';
import axios from 'axios';

const Header = ({ isOpen, setIsOpen }) => {
  const [producers, setProducers] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/producers')
      .then(({ data }) => setProducers(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <StyledHeader>
      <Wrapper>
        <LogoWrapper>
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
          <StyledInput
            type="text"
            name="search-engine"
            id="search-engine-deskop"
            placeholder="Czego szukasz?"
          />
        </LogoWrapper>
        <IconsWrapper>
          <StyledIcon to="/phone">
            <span className="fa-solid fa-phone"></span>
            <p>Pomoc i kontakt</p>
          </StyledIcon>
          <StyledIcon to="/phone">
            <span className="fa-solid fa-user"></span>
            <p>Twoje konto</p>
          </StyledIcon>
          <StyledIcon to="/phone">
            <span className="fa-solid fa-cart-shopping"></span>
            <p>Koszyk</p>
          </StyledIcon>
        </IconsWrapper>
      </Wrapper>
      <StyledNavigation>
        <StyledButton as="button" onClick={() => setIsOpen(true)}>
          <span className="fa-solid fa-bars"></span>
          <p>Menu</p>
        </StyledButton>
        <StyledInput
          type="text"
          name="search-engine"
          id="search-engine-mobile"
          placeholder="Czego szukasz?"
        />
      </StyledNavigation>
      <StyledMenu isOpen={isOpen}>
        <StyledMenuHeader>
          <StyledButton
            as="button"
            aria-label="button"
            onClick={() => setIsOpen(false)}
          >
            <span className="fa-solid fa-xmark"></span>
          </StyledButton>
          <h2>Menu</h2>
        </StyledMenuHeader>
        <StyledMenuContent>
          <StyledTitle>Marki</StyledTitle>
          <ul>
            {producers.map(({ id, name }) => (
              <StyledListItem key={id}>
                <Link to="/">
                  <p>{name}</p>
                  <span className="fa-solid fa-chevron-right"></span>
                </Link>
              </StyledListItem>
            ))}
          </ul>
        </StyledMenuContent>
      </StyledMenu>
    </StyledHeader>
  );
};

export default Header;
