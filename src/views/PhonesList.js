import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Line from 'components/Line/Line';
import {
  StyledBigButton,
  PhonesWrapper,
  StyledPhone,
  StyledSpecification,
  Container,
  StyledPrice,
  StyledButton,
} from 'assets/styles/views/PhonesList.styles';

const PhonesList = () => {
  const [phones, setPhones] = useState([]);
  const { producer } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/phones?producer=${producer}`)
      .then(({ data }) => setPhones(data))
      .catch((err) => console.log(err));
  }, [producer]);

  return (
    <div>
      <StyledBigButton>Filtry i sortowanie</StyledBigButton>
      <PhonesWrapper>
        {phones.map(({ id, images, name, specification, price }) => (
          <div key={id}>
            <StyledPhone>
              <Link to={`/phone/${id}`}>
                <img src={images[0]} alt="" />
                <h2>{name}</h2>
                <StyledSpecification>
                  Ekran: {specification.screen}
                </StyledSpecification>
                <StyledSpecification>
                  Procesor: {specification.processor}
                </StyledSpecification>
                <StyledSpecification>
                  Pamięć: {specification.memory}
                </StyledSpecification>
                <StyledSpecification>
                  System: {specification.system}
                </StyledSpecification>
                <Container>
                  <div>
                    <StyledPrice>{price}.00 zł</StyledPrice>
                    <p>Darmowa dostawa</p>
                  </div>
                </Container>
              </Link>
              <StyledButton>
                <span className="fa-solid fa-cart-plus"></span>
              </StyledButton>
            </StyledPhone>
            <Line />
          </div>
        ))}
      </PhonesWrapper>
    </div>
  );
};

export default PhonesList;
