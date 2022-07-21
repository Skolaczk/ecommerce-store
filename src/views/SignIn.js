import React, { useEffect, useState } from 'react';
import { useAuth } from 'hooks/useAuth';
import { Link, useNavigate } from 'react-router-dom';
import {
  Container,
  StyledParagraph,
  StyledPasswordBox,
  Wrapper,
} from '../assets/styles/views/Sign.styles';
import Information from 'components/Information/Information';

const SignIn = () => {
  const { currentUser, handleSignIn, handleInputChange, error, success } =
    useAuth();
  const navigate = useNavigate();
  const [isShowPassword, setIsShowPassword] = useState(false);

  useEffect(() => {
    if (currentUser) navigate(`/user-account`);
  }, [currentUser, navigate]);

  return (
    <>
      <Wrapper>
        {success && <Information value={success} isSuccess={true} />}
        {error && <Information value={error} isSuccess={false} />}
        <h2>Zaloguj się</h2>
        <form>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="E-mail"
            onChange={handleInputChange}
          />
          <StyledPasswordBox>
            <input
              type={isShowPassword ? 'text' : 'password'}
              name="password"
              id="password"
              placeholder="Hasło"
              onChange={handleInputChange}
            />
            <button
              onClick={() => setIsShowPassword(!isShowPassword)}
              type="button"
            >
              {isShowPassword ? 'Ukryj' : 'Pokaż'}
            </button>
          </StyledPasswordBox>
          <button type="submit" onClick={handleSignIn}>
            Zaloguj się
          </button>
        </form>
        <StyledParagraph>
          Nie pamiętasz hasła?{' '}
          <Link to="/password-recovery">Odzyskaj hasło</Link>
        </StyledParagraph>
      </Wrapper>
      <Container>
        <h2>Nie masz konta?</h2>
        <Link to="/sign-up">
          <button type="button">Załóż konto</button>
        </Link>
      </Container>
    </>
  );
};

export default SignIn;
