import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { colors, bp } from '../../styles/theme';

export const S = {
  Overlay: styled.div`
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 40;
    ${bp.md} {
      display: none;
    }
  `,
  Drawer: styled.div<{ $isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 288px;
    background-color: ${colors.white};
    z-index: 50;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    transform: ${({ $isOpen }) =>
      $isOpen ? 'translateX(0)' : 'translateX(-100%)'};
    transition: transform 300ms;
    ${bp.md} {
      display: none;
    }
  `,
  DrawerHeader: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 20px;
    background-color: ${colors.brandGold};
  `,
  DrawerTitle: styled.span`
    color: ${colors.white};
    font-weight: 700;
    font-size: 18px;
  `,
  CloseButton: styled.button`
    color: ${colors.white};
    font-size: 24px;
    line-height: 1;
    background: none;
    border: none;
    cursor: pointer;
  `,
  Nav: styled.nav`
    overflow-y: auto;
    height: calc(100% - 60px);
  `,
  NavSection: styled.div`
    border-bottom: 1px solid ${colors.gray100};
  `,
  SectionButton: styled.button`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 20px;
    text-align: left;
    font-weight: 700;
    color: ${colors.gray700};
    background: none;
    border: none;
    cursor: pointer;
    &:hover {
      color: ${colors.brandGold};
    }
  `,
  ArrowIcon: styled.span`
    font-size: 12px;
    color: ${colors.gray400};
  `,
  ChildList: styled.div`
    background-color: ${colors.gray50};
  `,
  ChildLink: styled(Link)<{ $isActive: boolean }>`
    display: block;
    padding: 12px 32px;
    font-size: 14px;
    text-decoration: none;
    color: ${({ $isActive }) => ($isActive ? colors.brandGold : colors.gray500)};
    font-weight: ${({ $isActive }) => ($isActive ? '700' : '400')};
    border-left: ${({ $isActive }) =>
      $isActive ? `2px solid ${colors.brandGold}` : 'none'};
    &:hover {
      color: ${colors.brandGold};
    }
  `,
  RootLink: styled(Link)<{ $isActive: boolean }>`
    display: block;
    padding: 16px 20px;
    font-weight: 700;
    text-decoration: none;
    color: ${({ $isActive }) => ($isActive ? colors.brandGold : colors.gray700)};
    &:hover {
      color: ${colors.brandGold};
    }
  `,
};
