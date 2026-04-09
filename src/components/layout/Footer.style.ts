import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { colors, bp } from '../../styles/theme';

export const S = {
  FooterEl: styled.footer`
    background-color: ${colors.gray800};
    color: ${colors.gray300};
    margin-top: auto;
  `,
  Inner: styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 48px 20px;
  `,
  Grid: styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
    ${bp.md} {
      grid-template-columns: repeat(3, 1fr);
    }
  `,
  LogoRow: styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 16px;
  `,
  LogoBadge: styled.div`
    width: 32px;
    height: 32px;
    background-color: ${colors.brandGold};
    border-radius: 9999px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  LogoBadgeText: styled.span`
    color: ${colors.white};
    font-weight: 700;
    font-size: 12px;
  `,
  SectionTitle: styled.h3`
    color: ${colors.white};
    font-weight: 700;
    font-size: 18px;
    margin: 0 0 16px;
  `,
  List: styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: 14px;
  `,
  NavLink: styled(Link)`
    color: inherit;
    text-decoration: none;
    transition: color 150ms;
    &:hover {
      color: ${colors.brandGold};
    }
  `,
  ScheduleItem: styled.li`
    display: flex;
    justify-content: space-between;
    gap: 16px;
  `,
  ScheduleTime: styled.span`
    color: ${colors.brandGold};
    flex-shrink: 0;
  `,
  Copyright: styled.div`
    border-top: 1px solid ${colors.gray700};
    padding: 16px 0;
    text-align: center;
    font-size: 14px;
    color: ${colors.gray500};
  `,
};
