import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { colors, bp } from '../../styles/theme';

export const S = {
  Nav: styled.nav`
    display: none;
    align-items: stretch;
    height: 100%;
    ${bp.md} {
      display: flex;
    }
  `,
  NavItem: styled.div`
    position: relative;
    display: flex;
    align-items: center;
  `,
  NavLink: styled(Link)<{ $isActive: boolean }>`
    padding: 0 20px;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 700;
    text-decoration: none;
    transition: color 200ms;
    color: ${({ $isActive }) => ($isActive ? colors.brandGold : colors.gray700)};
    border-bottom: 2px solid
      ${({ $isActive }) => ($isActive ? colors.brandGold : 'transparent')};
  &:hover {
    color: ${colors.brandGold};
  }
`,
  Dropdown: styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    display: none;
    z-index: 50;
    min-width: 160px;
    background-color: ${colors.white};
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
    border-top: 2px solid ${colors.brandGold};
  &:hover {
    display: block;
  }
`,
  DropdownLink: styled(Link)<{ $isActive: boolean }>`
    display: block;
    padding: 12px 20px;
    font-size: 14px;
    text-decoration: none;
    transition: color 150ms, background-color 150ms;
    color: ${({ $isActive }) => ($isActive ? colors.brandGold : colors.gray600)};
    font-weight: ${({ $isActive }) => ($isActive ? '700' : '400')};
    background-color: ${({ $isActive }) =>
      $isActive ? colors.gray50 : 'transparent'};
    border-left: 2px solid
      ${({ $isActive }) => ($isActive ? colors.brandGold : 'transparent')};
  &:hover {
    color: ${colors.brandGold};
    background-color: ${colors.gray50};
  }
`,
};
