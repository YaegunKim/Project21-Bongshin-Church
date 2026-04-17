import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { colors, bp } from '../../styles/theme';

export const S = {
  HeaderEl: styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 30;
    background-color: ${colors.white};
    border-bottom: 1px solid ${colors.brandLightgray};
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    height: 80px;
    display: flex;
    align-items: center;
  `,
  Inner: styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  `,
  LogoLink: styled(Link)`
    display: flex;
    align-items: center;
    gap: 12px;
    flex-shrink: 0;
    text-decoration: none;
  `,
  LogoImg: styled.img`
    width: 60px;
    height: auto;
    display: none;
    ${bp.sm} {
      display: block;
    }
  `,
  LogoTextGroup: styled.div`
    display: none;
    flex-direction: column;
    align-items: center;
    ${bp.sm} {
      display: flex;
    }
    line-height: 1.2;
  `,
  LogoName: styled.span`
    font-size: 22px;
    font-weight: 700;
    letter-spacing: 1px;
    color: ${colors.gray800};
  `,
  LogoSubname: styled.span`
    font-size: 10px;
    font-weight: 300;
    color: ${colors.gray800};
  `,
  RightGroup: styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
  `,
  HamburgerButton: styled.button`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 8px;
    background: none;
    border: none;
    cursor: pointer;
    ${bp.md} {
      display: none;
    }
  `,
  HamburgerLine: styled.span`
    display: block;
    width: 24px;
    height: 2px;
    background-color: ${colors.gray700};
  `,
};
