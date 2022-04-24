import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header/Header';
import { Wrapper } from './MainTemplate.styles';
import Footer from 'components/Footer/Footer';

export const MainTemplate = ({ children, isOpen, setIsOpen }) => (
  <>
    <Header isOpen={isOpen} setIsOpen={setIsOpen} />
    <Wrapper>{children}</Wrapper>
    <Footer />
  </>
);

MainTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};
