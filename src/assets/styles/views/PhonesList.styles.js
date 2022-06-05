import styled from 'styled-components';

export const PhonesWrapper = styled.div`
  margin: 10px 0;
  display: grid;
  gap: 0 25px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  ${({ theme }) => theme.mq.tablet} {
    width: calc(100% - 250px);
  }
`;

export const StyledPhone = styled.div`
  border-radius: 10px;
  padding: 20px;
  position: relative;

  img {
    max-width: 100%;
  }

  h2 {
    font-size: ${({ theme }) => theme.font.size.s};
    color: ${({ theme }) => theme.colors.black};
    font-weight: ${({ theme }) => theme.font.weight.regular};
    margin-bottom: 5px;
  }

  &:hover {
    box-shadow: ${({ theme }) => theme.shadow};
  }
`;

export const StyledPrice = styled.p`
  font-size: ${({ theme }) => theme.font.size.m};
  color: ${({ theme }) => theme.colors.darkGray};
`;

export const StyledSpecification = styled.p`
  font-size: ${({ theme }) => theme.font.size.xs};
  color: ${({ theme }) => theme.colors.gray};
  margin: 3px 0;
`;

export const Container = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p:last-child {
    color: ${({ theme }) => theme.colors.lightGray};
    font-size: ${({ theme }) => theme.font.size.s};
  }
`;

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.blue};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  color: ${({ theme }) => theme.colors.blue};
  cursor: pointer;
  position: absolute;
  right: 20px;
  bottom: 20px;
`;

export const StyledBigButton = styled.button`
  color: ${({ theme }) => theme.colors.darkGray};
  background-color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  border: 1px solid ${({ theme }) => theme.colors.lightSilver};
  font-size: ${({ theme }) => theme.font.size.xs};
  padding: 15px;
  width: 100%;
  cursor: pointer;

  ${({ theme }) => theme.mq.tablet} {
    display: none;
  }
`;

export const StyledFilters = styled.form`
  overflow: auto;
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
  top: 0;
  left: -100%;
  z-index: 2;
  transform: ${({ isFiltersOpen }) =>
    isFiltersOpen ? 'translateX(100%)' : ''};
  transition: transform 0.25s ease-in-out;

  ${({ theme }) => theme.mq.tablet} {
    position: static;
    height: auto;
    max-width: 320px;
    height: 100%;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.colors.silver};
  }
`;

export const StyledFiltersHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.lightSilver};
  display: flex;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.silver};
  color: ${({ theme }) => theme.colors.gray};

  button {
    background-color: transparent;
    border: none;
    font-size: ${({ theme }) => theme.font.size.l};
    margin-right: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h2 {
    font-size: ${({ theme }) => theme.font.size.m};
  }

  span {
    color: ${({ theme }) => theme.colors.gray};
  }

  ${({ theme }) => theme.mq.tablet} {
    display: none;
  }
`;

export const StyledTitle = styled.div`
  color: ${({ theme }) => theme.colors.gray};
  background-color: ${({ theme }) => theme.colors.lightSilver};
  border-bottom: 1px solid ${({ theme }) => theme.colors.silver};
  padding: 10px 15px;
  font-size: ${({ theme }) => theme.font.size.s};
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;

export const StyledFilter = styled.details`
  summary {
    display: flex;
    justify-content: space-between;
    padding: 15px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.silver};
    color: ${({ theme }) => theme.colors.darkGray};
    font-size: ${({ theme }) => theme.font.size.s};
    cursor: pointer;
  }

  span {
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export const StyledButtonWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightSilver};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 15px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.silver};
  color: ${({ theme }) => theme.colors.gray};

  button {
    cursor: pointer;
  }

  button:first-child {
    background-color: transparent;
    border: none;
    font-size: ${({ theme }) => theme.font.size.s};
    color: ${({ theme }) => theme.colors.gray};
    width: 30%;
  }

  button:last-child {
    background-color: ${({ theme }) => theme.colors.blue};
    border: none;
    font-size: ${({ theme }) => theme.font.size.s};
    color: ${({ theme }) => theme.colors.white};
    border-radius: 25px;
    width: 65%;
    height: 35px;
  }

  ${({ theme }) => theme.mq.tablet} {
    border-bottom: none;
  }
`;

export const StyledBox = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.silver};
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: ${({ theme }) => theme.font.size.s};

  label {
    margin-left: 10px;
    cursor: pointer;
  }

  input {
    cursor: pointer;
  }
`;

export const StyledPriceBox = styled.div`
  padding: 15px 30px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.silver};
  display: flex;
  align-items: center;

  input {
    width: 50%;
    height: 30px;
    border: 1px solid ${({ theme }) => theme.colors.silver};
    border-radius: 15px;
    text-align: center;

    &::placeholder {
      text-align: center;
    }

    &:first-child {
      margin-right: 5px;
    }

    &:last-child {
      margin-left: 5px;
    }
  }
`;

export const Wrapper = styled.div`
  ${({ theme }) => theme.mq.tablet} {
    display: flex;
    justify-content: space-between;
    gap: 0 50px;
  }
`;
