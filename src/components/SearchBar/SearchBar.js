import React, { useState, useEffect } from 'react';
import { useCombobox } from 'downshift';
import axios from 'axios';
import {
  SearchBarWrapper,
  SearchResults,
  SearchResultsItem,
  StyledInput,
} from './SearchBar.styles';
import { Link, useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [phones, setPhones] = useState([]);
  const [filteredPhones, setFilteredPhones] = useState([]);
  const navigate = useNavigate();
  const {
    isOpen,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    items: filteredPhones,
    itemToString: ({ name }) => (name ? name : ''),
    onInputValueChange: ({ inputValue }) => {
      setFilteredPhones(
        phones.filter(({ name }) =>
          name.toLowerCase().includes(inputValue.toLowerCase())
        )
      );
    },
  });

  const handleNavigateToPhone = (e) => {
    const matchingPhone = phones.find(({ name }) => name === e.target.value);

    if (!matchingPhone) return;
    if (e.charCode === 13) {
      navigate(`/phone/${matchingPhone.id}`);
    }
  };

  useEffect(() => {
    axios
      .get('http://localhost:8000/phones')
      .then(({ data }) => setPhones(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <SearchBarWrapper>
      <div {...getComboboxProps()}>
        <StyledInput
          type="text"
          name="search-engine"
          id="search-engine"
          placeholder="Czego szukasz?"
          onKeyPress={handleNavigateToPhone}
          isVisible={isOpen && filteredPhones.length}
          {...getInputProps()}
        ></StyledInput>
      </div>
      <SearchResults
        isVisible={isOpen && filteredPhones.length}
        {...getMenuProps()}
      >
        {isOpen &&
          filteredPhones.map(({ id, name }, index) => (
            <Link to={`/phone/${id}`} key={id}>
              <SearchResultsItem
                isHighlighted={highlightedIndex === index}
                {...getItemProps({ name, index })}
              >
                {name}
              </SearchResultsItem>
            </Link>
          ))}
      </SearchResults>
    </SearchBarWrapper>
  );
};

export default SearchBar;
