import React, { useState } from 'react';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { ThemeProvider } from 'styled-components';
import { MainTemplate } from 'templates/MainTemplate';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Phone from './Phone';
import PhonesList from './PhonesList';
import ShoppingCart from './ShoppingCart';
import { ShoppingCartProvider } from 'hooks/useShoppingCart';
import UserAccount from './UserAccount';
import { AuthProvider } from 'hooks/useAuth';
import SignIn from './SignIn';
import SignUp from './SignUp';
import PasswordRecovery from './PasswordRecovery';

const Root = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <ShoppingCartProvider>
            <GlobalStyle
              isMenuOpen={isMenuOpen}
              isFiltersOpen={isFiltersOpen}
            />
            <MainTemplate isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}>
              <Routes>
                <Route path="/phone/:id" element={<Phone />} />
                <Route
                  path="/phones/:producer"
                  element={
                    <PhonesList
                      isFiltersOpen={isFiltersOpen}
                      setIsFiltersOpen={setIsFiltersOpen}
                    />
                  }
                />
                <Route path="/shopping-cart" element={<ShoppingCart />} />
                <Route path="user-account" element={<UserAccount />} />
                <Route path="sign-in" element={<SignIn />} />
                <Route path="sign-up" element={<SignUp />} />
                <Route
                  path="password-recovery"
                  element={<PasswordRecovery />}
                />
                <Route path="/" element={<Homepage />} />
              </Routes>
            </MainTemplate>
          </ShoppingCartProvider>
        </AuthProvider>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
