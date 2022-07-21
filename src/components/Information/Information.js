import { useAuth } from 'hooks/useAuth';
import React, { useEffect } from 'react';
import { StyledInformation } from './Information.styles';

const Information = ({ value, isSuccess }) => {
  const { setSuccess, setError } = useAuth();

  useEffect(() => {
    setTimeout(() => {
      setError(null);
      setSuccess(null);
    }, 5000);
  }, [setError, setSuccess]);

  return (
    <StyledInformation isSuccess={isSuccess}>
      <p>{value}</p>
    </StyledInformation>
  );
};

export default Information;
