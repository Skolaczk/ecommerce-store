import styled from 'styled-components';

export const PhonesWrapper = styled.div`
  margin: 10px 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;

export const StyledPhone = styled.div`
  padding: 10px;
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
  right: 10px;
  bottom: 10px;
`;

export const StyledBigButton = styled.button`
  color: ${({ theme }) => theme.colors.darkGray};
  background-color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  border: 1px solid ${({ theme }) => theme.colors.lightSilver};
  font-size: ${({ theme }) => theme.font.size.xs};
  padding: 15px;
  width: 100%;
`;
