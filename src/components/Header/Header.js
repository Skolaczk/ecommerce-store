import React, { useState, useEffect } from 'react';
import {
  StyledHeader,
  Wrapper,
  IconsWrapper,
  StyledIcon,
  StyledNavigation,
  StyledButton,
  StyledMenu,
  StyledMenuHeader,
  StyledMenuContent,
  StyledListItem,
  StyledTitle,
  LogoWrapper,
  StyledCounter,
} from './Header.styles';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.svg';
import axios from 'axios';
import { useShoppingCart } from 'hooks/useShoppingCart';
import SearchBar from 'components/SearchBar/SearchBar';

const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  const [producers, setProducers] = useState([]);
  const { shoppingCartItems } = useShoppingCart();

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
          <SearchBar />
        </LogoWrapper>
        <IconsWrapper>
          <StyledIcon to="/phone">
            <span className="fa-solid fa-phone"></span>
            <p>Pomoc i kontakt</p>
          </StyledIcon>
          <StyledIcon to="/user-account">
            <span className="fa-solid fa-user"></span>
            <p>Twoje konto</p>
          </StyledIcon>
          <StyledIcon to="/shopping-cart">
            <span className="fa-solid fa-cart-shopping"></span>
            <p>Koszyk</p>
            {shoppingCartItems.length ? (
              <StyledCounter>{shoppingCartItems.length}</StyledCounter>
            ) : null}
          </StyledIcon>
        </IconsWrapper>
      </Wrapper>
      <StyledNavigation>
        <StyledButton as="button" onClick={() => setIsMenuOpen(true)}>
          <span className="fa-solid fa-bars"></span>
          <p>Menu</p>
        </StyledButton>
        <SearchBar />
      </StyledNavigation>
      <StyledMenu isMenuOpen={isMenuOpen}>
        <StyledMenuHeader>
          <StyledButton
            as="button"
            aria-label="button"
            onClick={() => setIsMenuOpen(false)}
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
                <Link
                  to={`/phones/${name}`}
                  onClick={() => setIsMenuOpen(false)}
                >
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
