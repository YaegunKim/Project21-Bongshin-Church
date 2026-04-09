import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { colors } from '../styles/theme';

export const S = {
  Wrapper: styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 96px 20px;
    text-align: center;
  `,
  Icon: styled.div`
    font-size: 60px;
    margin-bottom: 24px;
  `,
  ErrorCode: styled.h1`
    font-size: 36px;
    font-weight: 700;
    color: ${colors.gray800};
    margin: 0 0 16px;
  `,
  Message: styled.p`
    color: ${colors.gray600};
    margin: 0 0 32px;
  `,
};
