import React from 'react';
import styled from 'styled-components';

const StyledLine = styled.span`
  display: block;
  width: 100%;
  height: 1px;
  margin: 25px 0;
  background-color: ${({ theme }) => theme.colors.lightSilver};
`;

const Line = () => {
  return <StyledLine></StyledLine>;
};

export default Line;
