import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { colors, bp } from '../../styles/theme';

export const S = {
  Wrapper: styled.div`
    background-color: ${colors.brandGold};
  `,
  Inner: styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 20px;
    ${bp.md} {
      padding: 56px 20px;
    }
  `,
  Title: styled.h1`
    font-size: 24px;
    font-weight: 700;
    color: ${colors.white};
    margin: 0 0 12px;
    ${bp.md} {
      font-size: 30px;
    }
  `,
  Breadcrumb: styled.nav`
    font-size: 14px;
    color: rgba(255, 255, 255, 0.8);
    display: flex;
    align-items: center;
    gap: 8px;
  `,
  BreadcrumbLink: styled(Link)`
    color: inherit;
    text-decoration: none;
    transition: color 150ms;
    &:hover {
      color: ${colors.white};
    }
  `,
  BreadcrumbCurrent: styled.span`
    color: ${colors.white};
  `,
};
