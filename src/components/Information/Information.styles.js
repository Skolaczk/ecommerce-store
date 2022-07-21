import styled from 'styled-components';

export const StyledInformation = styled.div`
  color: ${({ isSuccess, theme }) =>
    isSuccess ? theme.colors.darkGreen : theme.colors.darkRed};
  border-color: ${({ isSuccess, theme }) =>
    isSuccess ? theme.colors.green : theme.colors.red};
  background-color: ${({ isSuccess, theme }) =>
    isSuccess ? theme.colors.lightGreen : theme.colors.lightRed};
  border: 1px solid;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
`;
