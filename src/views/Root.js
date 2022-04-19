import React from 'react';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { ThemeProvider } from 'styled-components';

const Root = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <h1>Hello world</h1>
  </ThemeProvider>
);

export default Root;
