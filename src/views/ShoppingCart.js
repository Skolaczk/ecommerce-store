import React, { useState, useEffect } from 'react';
import { useShoppingCart } from 'hooks/useShoppingCart';
import { getSumPrice } from 'helpers/getSumPrice';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PhonesSlider from 'components/PhonesSlider/PhonesSlider';
import { useWindowWidth } from 'hooks/useWindowWidth';
import { chooseCountSlides } from 'helpers/chooseCountSlides';
import Line from 'components/Line/Line';
import {
  Box,
  Cart,
  StyledHeader,
  StyledTitle,
  StyledButtonWrapper,
  StyledList,
  StyledListItem,
  StyledPrice,
  Wrapper,
  Container,
  StyledButton,
  StyledTransparentButton,
  StyledInfo,
} from 'assets/styles/views/ShoppingCart.styles';

const ShoppingCart = () => {
  const { shoppingCartItems, handleRemoveItem, handleRemoveAllItems } =
    useShoppingCart();
  const [phones, setPhones] = useState([]);
  const width = useWindowWidth();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/phones`)
      .then(({ data }) => setPhones(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {shoppingCartItems.length ? (
        <Box>
          <Cart>
            <StyledHeader>
              <StyledTitle>
                Koszyk <span>({shoppingCartItems.length})</span>
              </StyledTitle>
              <StyledButtonWrapper>
                <button onClick={handleRemoveAllItems}>
                  <span className="fa-solid fa-trash"></span>Wyczyść koszyk
                </button>
              </StyledButtonWrapper>
            </StyledHeader>
            <StyledList>
              {shoppingCartItems.map(({ id, name, images, price }) => (
                <StyledListItem key={id}>
                  <div>
                    <Link to={`/phone/${id}`}>
                      <img src={images[0]} alt="" />
                      <p>{name}</p>
                    </Link>
                    <button onClick={() => handleRemoveItem(id)}>
                      <span className="fa-solid fa-trash"></span>
                    </button>
                  </div>
                  <StyledPrice>{price}.00 zł</StyledPrice>
                </StyledListItem>
              ))}
            </StyledList>
          </Cart>
          <div>
            <Wrapper>
              <div>
                <p>Łączna kwota</p>
                <p>{getSumPrice(shoppingCartItems)}.00 zł</p>
              </div>
              <StyledButton>Przejdź do dostawy</StyledButton>
              <StyledTransparentButton>Oblicz ratę</StyledTransparentButton>
            </Wrapper>
            <StyledInfo>
              <span className="fa-solid fa-circle-info"></span>
              <p>
                Dokończ składanie zamówienia - dodanie produktów do koszyka nie
                oznacza ich rezerwacji.
              </p>
            </StyledInfo>
          </div>
        </Box>
      ) : (
        <Container>
          <h2>Twój koszyk jest pusty</h2>
          <p>Szukasz inspiracji?</p>
          <Link to="/">
            <StyledButton>Przejdź do strony głównej</StyledButton>
          </Link>
        </Container>
      )}
      <Line />
      <PhonesSlider
        phones={phones}
        countSlides={chooseCountSlides(width)}
        phonesIndex={[0, 8]}
        title="Ostatnio oglądane"
      />
    </div>
  );
};

export default ShoppingCart;
