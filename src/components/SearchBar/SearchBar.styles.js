import styled from 'styled-components';

export const StyledInput = styled.input`
  height: 35px;
  border: 1px solid ${({ theme }) => theme.colors.silver};
  width: 100%;
  padding: 0 10px;
  border-radius: ${({ isVisible }) => (isVisible ? '15px 15px 0 0' : '25px')};
  border-bottom: ${({ isVisible }) =>
    isVisible ? 'none' : `1px solid ${({ theme }) => theme.colors.silver}`};

  &:focus {
    outline: none;
  }
`;

export const SearchBarWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const SearchResults = styled.ul`
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  z-index: 1000;
  max-height: 400px;
  border-radius: 0 0 15px 15px;
  list-style: none;
  overflow-y: hidden;
  width: 100%;
  position: absolute;
  top: 35px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.silver};
  border-top: none;

  ${({ theme }) => theme.mq.desktop} {
    left: 25px;
    width: 95%;
  }
`;

export const SearchResultsItem = styled.li`
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: ${({ theme }) => theme.font.size.s};
  background-color: ${({ theme, isHighlighted }) =>
    isHighlighted ? theme.colors.silver : theme.colors.white};
  padding: 15px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightSilver};
  }
  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.silver};
  }
`;
