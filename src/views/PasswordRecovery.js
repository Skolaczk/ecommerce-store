import React, { useState } from 'react';
import Information from 'components/Information/Information';
import { useAuth } from 'hooks/useAuth';
import { Wrapper, StyledContent } from '../assets/styles/views/Sign.styles';

const PasswordRecovery = () => {
  const [email, setEmail] = useState('');
  const { handleSendResetPasswordEmail, error, success } = useAuth();

  return (
    <Wrapper>
      {success && <Information value={success} isSuccess={true} />}
      {error && <Information value={error} isSuccess={false} />}
      <h2>Nie pamiętasz hasła?</h2>
      <StyledContent>
        Jeśli na ten e-mail jest założone konto, to wyślemy na niego wiadomość.
      </StyledContent>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="E-mail"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit" onClick={() => handleSendResetPasswordEmail(email)}>
        Odzyskaj hasło
      </button>
    </Wrapper>
  );
};

export default PasswordRecovery;
