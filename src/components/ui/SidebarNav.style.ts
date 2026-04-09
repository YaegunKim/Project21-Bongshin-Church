import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { colors, bp } from '../../styles/theme';

export const S = {
  Aside: styled.aside`
    width: 100%;
    ${bp.md} {
      width: 240px;
      flex-shrink: 0;
    }
  `,
  SectionTitle: styled.div`
    background-color: ${colors.gray800};
    color: ${colors.white};
    padding: 16px 20px;
    font-weight: 700;
    font-size: 18px;
  `,
  NavList: styled.nav`
    border: 1px solid ${colors.gray200};
  `,
  NavLink: styled(Link)<{ $isActive: boolean }>`
    display: block;
    padding: 14px 20px;
    font-size: 14px;
    border-bottom: 1px solid ${colors.gray100};
    text-decoration: none;
    transition: color 150ms, background-color 150ms;
    color: ${({ $isActive }) => ($isActive ? colors.brandGold : colors.gray600)};
    font-weight: ${({ $isActive }) => ($isActive ? '700' : '400')};
    background-color: ${({ $isActive }) =>
      $isActive ? 'rgba(248, 181, 81, 0.05)' : 'transparent'};
    border-left: 4px solid
      ${({ $isActive }) => ($isActive ? colors.brandGold : 'transparent')};
    &:hover {
      color: ${colors.brandGold};
      background-color: ${colors.gray50};
    }
  `,
};
