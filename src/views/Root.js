import React, { useState } from 'react';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { ThemeProvider } from 'styled-components';
import { MainTemplate } from 'templates/MainTemplate';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';

const Root = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle isOpen={isOpen} />
        <MainTemplate isOpen={isOpen} setIsOpen={setIsOpen}>
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
