import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import {
  StyledBigButton,
  PhonesWrapper,
  StyledPhone,
  StyledSpecification,
  Container,
  StyledPrice,
  StyledButton,
  StyledFilters,
  StyledFiltersHeader,
  StyledTitle,
  StyledFilter,
  StyledButtonWrapper,
  StyledBox,
  StyledPriceBox,
  Wrapper,
} from 'assets/styles/views/PhonesList.styles';
import { useShoppingCart } from 'hooks/useShoppingCart';
import { useForm } from 'react-hook-form';

const PhonesList = ({ isFiltersOpen, setIsFiltersOpen }) => {
  const [allPhones, setAllPhones] = useState([]);
  const [phones, setPhones] = useState([]);
  const { producer } = useParams();
  const { handleAddItem } = useShoppingCart();
  const [producers, setProducers] = useState([]);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = ({ priceFrom, priceTo, sort, producerName }) => {
    if (!priceFrom) priceFrom = 199;
    if (!priceTo) priceTo = 8099;
    const filteredPhones = allPhones.filter(
      (phone) =>
        phone.price >= priceFrom &&
        phone.price <= priceTo &&
        phone.producer === (producerName ? producerName : producer)
    );
    if (sort === 'min') {
      setPhones(filteredPhones.sort((a, b) => a.price - b.price));
    } else if (sort === 'max') {
      setPhones(filteredPhones.sort((a, b) => a.price - b.price).reverse());
    } else {
      setPhones(filteredPhones);
    }

    setIsFiltersOpen(false);
  };

  useEffect(() => {
    axios
      .get('http://localhost:8000/phones')
      .then(({ data }) => setAllPhones(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get('http://localhost:8000/producers')
      .then(({ data }) => setProducers(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/phones?producer=${producer}`)
      .then(({ data }) => setPhones(data))
      .catch((err) => console.log(err));
  }, [producer]);

  return (
    <Wrapper>
      <StyledBigButton onClick={() => setIsFiltersOpen(true)}>
        Filtry i sortowanie
      </StyledBigButton>
      <StyledFilters
        onSubmit={handleSubmit(onSubmit)}
        isFiltersOpen={isFiltersOpen}
      >
        <StyledFiltersHeader>
          <button aria-label="button" onClick={() => setIsFiltersOpen(false)}>
            <span className="fa-solid fa-xmark"></span>
          </button>
          <h2>Filtry i sortowanie</h2>
        </StyledFiltersHeader>
        <StyledTitle>Sortowanie według</StyledTitle>
        <StyledBox>
          <input
            type="radio"
            id="min"
            value="min"
            name="sort"
            {...register('sort')}
          />
          <label htmlFor="min">Cena: od najtańszych</label>
        </StyledBox>
        <StyledBox>
          <input
            type="radio"
            id="max"
            value="max"
            name="sort"
            {...register('sort')}
          />
          <label htmlFor="max">Cena: od najdroższych</label>
        </StyledBox>
        <StyledTitle>Filtry</StyledTitle>
        <StyledFilter open>
          <summary>
            <p>Cena</p>
            <span className="fa-solid fa-angle-right"></span>
          </summary>
          <StyledPriceBox>
            <input
              type="number"
              id="price-from"
              name="price-from"
              placeholder="od"
              {...register('priceFrom')}
            />
            <span>-</span>
            <input
              type="number"
              id="price-to"
              name="price-to"
              placeholder="do"
              {...register('priceTo')}
            />
          </StyledPriceBox>
        </StyledFilter>
        <StyledFilter open>
          <summary>
            <p>Producent</p>
            <span className="fa-solid fa-angle-right"></span>
          </summary>
          <div>
            {producers.map(({ id, name }) => (
              <StyledBox key={id}>
                <input
                  type="radio"
                  id={name}
                  name={name}
                  value={name}
                  {...register('producerName')}
                />
                <label htmlFor={name}>{name}</label>
              </StyledBox>
            ))}
          </div>
        </StyledFilter>
        <StyledButtonWrapper>
          <button type="reset" onClick={() => reset()}>
            Wyczyść filtry
          </button>
          <button type="submit">Pokaż wyniki</button>
        </StyledButtonWrapper>
      </StyledFilters>
      <PhonesWrapper>
        {phones.map(({ id, images, name, specification, price }) => (
          <div key={id}>
            <StyledPhone>
              <Link to={`/phone/${id}`}>
                <div>
                  <img src={images[0]} alt="" />
                  <h2>{name.length > 25 ? `${name.slice(0, 25)}...` : name}</h2>
                  <StyledSpecification>
                    Ekran: {specification.screen}
                  </StyledSpecification>
                  <StyledSpecification>
                    Procesor:{' '}
                    {specification.processor.length > 25
                      ? `${specification.processor.slice(0, 25)}...`
                      : specification.processor}
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
                </div>
              </Link>
              <StyledButton
                onClick={() =>
                  handleAddItem({
                    id,
                    name,
                    producer,
                    price,
                    images,
                    specification,
                  })
                }
              >
                <span className="fa-solid fa-cart-plus"></span>
              </StyledButton>
            </StyledPhone>
          </div>
        ))}
      </PhonesWrapper>
    </Wrapper>
  );
};

export default PhonesList;
