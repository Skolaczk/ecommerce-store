import styled from 'styled-components';

export const StyledFooter = styled.footer`
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.lightSilver};
  margin-top: 25px;

  p {
    text-align: center;
    margin: 25px 0 10px 0;
    color: ${({ theme }) => theme.colors.gray};
    font-size: ${({ theme }) => theme.font.size.xs};
  }

  h2 {
    font-size: ${({ theme }) => theme.font.size.m};
    margin-bottom: 15px;
  }

  ${({ theme }) => theme.mq.tablet} {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h2 {
      display: none;
    }
  }
`;

export const Wrapper = styled.div`
  ${({ theme }) => theme.mq.tablet} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1400px;
  }
`;

export const StyledList = styled.div`
  div {
    margin: 20px 0;

    span {
      color: ${({ theme }) => theme.colors.gray};
      margin: 0 10px;
    }
  }

  ${({ theme }) => theme.mq.tablet} {
    display: flex;
  }
`;

export const StyledIconsList = styled.div`
  span {
    color: ${({ theme }) => theme.colors.gray};
    margin: 10px 15px 0 10px;
    font-size: ${({ theme }) => theme.font.size.l};
    cursor: pointer;
  }
`;
