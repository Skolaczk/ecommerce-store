import React, { useState, useEffect } from 'react';
import { useAuth } from 'hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import {
  StyledButton,
  StyledInfoBox,
  Wrapper,
  StyledInputBox,
  StyledTitle,
  StyledGrayButton,
  StyledSmallTitle,
  StyledParagraph,
  Box,
  overlayStyle,
  StyledRedButton,
  StyledTransparentButton,
  StyledModal,
} from '../assets/styles/views/UserAccount.styles';
import Information from 'components/Information/Information';

const UserAccount = () => {
  const {
    currentUser,
    handleSignOut,
    handleSendEmailVerification,
    handleDeleteUser,
    handleUpdateEmail,
    handleUpdatePassword,
    success,
    error,
  } = useAuth();
  const navigate = useNavigate();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isEmailDisabled, setIsEmailDisabled] = useState(true);
  const [isPasswordDisabled, setIsPasswordDisabled] = useState(true);
  const [inputsValue, setInputsValue] = useState({
    email: currentUser && currentUser.email,
    password: '**********',
  });

  useEffect(() => {
    if (!currentUser) navigate(`/sign-in`);
  }, [currentUser, navigate]);

  return (
    <>
      {currentUser && currentUser.emailVerified ? (
        <>
          <Wrapper>
            <Box>
              {success && <Information value={success} isSuccess={true} />}
              {error && <Information value={error} isSuccess={false} />}
              <StyledTitle>Ustawienia konta</StyledTitle>
              <StyledInputBox>
                <label htmlFor="email">Adres e-mail</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={inputsValue.email}
                  onChange={(e) =>
                    setInputsValue({ ...inputsValue, email: e.target.value })
                  }
                  disabled={isEmailDisabled}
                />
                <button
                  type="button"
                  onClick={
                    !isEmailDisabled
                      ? () => {
                          handleUpdateEmail(inputsValue.email);
                          setIsEmailDisabled(!isEmailDisabled);
                        }
                      : () => setIsEmailDisabled(!isEmailDisabled)
                  }
                >
                  {isEmailDisabled ? 'Zmień' : 'Zapisz'}
                </button>
              </StyledInputBox>
              <StyledInputBox>
                <label htmlFor="password">Hasło</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={inputsValue.password}
                  onChange={(e) =>
                    setInputsValue({ ...inputsValue, password: e.target.value })
                  }
                  disabled={isPasswordDisabled}
                />
                <button
                  type="button"
                  onClick={
                    !isPasswordDisabled
                      ? () => {
                          handleUpdatePassword(inputsValue.password);
                          setIsPasswordDisabled(!isPasswordDisabled);
                        }
                      : () => setIsPasswordDisabled(!isPasswordDisabled)
                  }
                >
                  {isPasswordDisabled ? 'Zmień' : 'Zapisz'}
                </button>
              </StyledInputBox>
              <StyledSmallTitle>Usuwanie konta</StyledSmallTitle>
              <StyledParagraph>
                Jeśli klikniesz w ten przycisk, usuniesz swoje konto w naszym
                sklepie. Upewnij się, że na pewno chcesz to zrobić – Twojego
                konta nie będziemy mogli przywrócić.
              </StyledParagraph>
              <StyledGrayButton type="button" onClick={() => setIsOpen(true)}>
                Usuń konto
              </StyledGrayButton>
            </Box>
            <Box>
              <StyledTitle>Zamówienia</StyledTitle>
              <StyledSmallTitle>Nie masz żadnych zamówień</StyledSmallTitle>
              <StyledParagraph>
                Gdy zrealizujesz pierwsze zamówienie, pojawi się ono tutaj.
              </StyledParagraph>
            </Box>
            <StyledButton onClick={handleSignOut}>Wyloguj się</StyledButton>
          </Wrapper>
          <StyledModal
            isOpen={modalIsOpen}
            onRequestClose={() => setIsOpen(false)}
            appElement={document.getElementById('root')}
            contentLabel="Delete account Modal"
            style={overlayStyle}
          >
            <div>
              <h2>Usuwanie konto</h2>
              <button type="button" onClick={() => setIsOpen(false)}>
                <span className="fa-solid fa-xmark"></span>
              </button>
            </div>
            <p>Czy na pewno chcesz usunąć swoje konto?</p>
            <div>
              <StyledTransparentButton
                type="button"
                onClick={() => setIsOpen(false)}
              >
                Anuluj
              </StyledTransparentButton>
              <StyledRedButton type="button" onClick={handleDeleteUser}>
                Usuń konto
              </StyledRedButton>
            </div>
          </StyledModal>
        </>
      ) : (
        <StyledInfoBox>
          <h2>Konto nie zostało zweryfikowane.</h2>
          <p>
            Wejdź na podany adres e-mail i go zweryfikuj. Jeżeli nie widzisz
            wiadomości, sprawdź folder spam lub wyślij wiadomość weryfikacyjną
            ponownie.
          </p>
          <StyledButton onClick={handleSendEmailVerification}>
            Wyślij ponownie
          </StyledButton>
          <p>lub:</p>
          <StyledButton onClick={handleSignOut}>Wyloguj się</StyledButton>
        </StyledInfoBox>
      )}
    </>
  );
};

export default UserAccount;
