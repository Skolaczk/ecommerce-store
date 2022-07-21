import React, { useState, useEffect } from 'react';
import { useAuth } from 'hooks/useAuth';
import { Link, useNavigate } from 'react-router-dom';
import {
  StyledInputBox,
  StyledParagraph,
  StyledPasswordBox,
  Wrapper,
} from '../assets/styles/views/Sign.styles';
import Information from 'components/Information/Information';

const SignUp = () => {
  const { currentUser, handleSignUp, handleInputChange, error, success } =
    useAuth();
  const navigate = useNavigate();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowRepeatPassword, setIsShowRepeatPassword] = useState(false);

  useEffect(() => {
    if (currentUser && currentUser.emailVerified) navigate(`/user-account`);
  }, [currentUser, navigate]);

  return (
    <Wrapper>
      {success && <Information value={success} isSuccess={true} />}
      {error && <Information value={error} isSuccess={false} />}
      <h2>Załóż konto</h2>
      <form>
        <input
          type="text"
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
        <StyledPasswordBox>
          <input
            type={isShowRepeatPassword ? 'text' : 'password'}
            name="repeatPassword"
            id="repeat-password"
            placeholder="Powtórz hasło"
            onChange={handleInputChange}
          />
          <button
            onClick={() => setIsShowRepeatPassword(!isShowRepeatPassword)}
            type="button"
          >
            {isShowRepeatPassword ? 'Ukryj' : 'Pokaż'}
          </button>
        </StyledPasswordBox>
        <StyledInputBox>
          <input
            type="checkbox"
            name="consent"
            id="consent"
            onChange={handleInputChange}
          />
          <label>Akceptuję regulamin sklepu</label>
        </StyledInputBox>
        <button type="submit" onClick={handleSignUp}>
          Załóż konto
        </button>
      </form>
      <StyledParagraph>
        Masz już konto? <Link to="/sign-in">Zaloguj się</Link>
      </StyledParagraph>
    </Wrapper>
  );
};

export default SignUp;
