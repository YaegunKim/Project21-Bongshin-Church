import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { colors, bp } from '../../styles/theme';

export const S = {
  Section: styled.section`
    padding: 64px 0;
    background-color: ${colors.gray50};
  `,
  Inner: styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  `,
  Header: styled.div`
    text-align: center;
    margin-bottom: 40px;
  `,
  Label: styled.p`
    color: ${colors.brandGold};
    font-weight: 700;
    font-size: 14px;
    margin: 0 0 8px;
    letter-spacing: 0.1em;
  `,
  Title: styled.h2`
    font-size: 30px;
    font-weight: 700;
    color: ${colors.gray800};
    margin: 0;
  `,
  Divider: styled.div`
    width: 48px;
    height: 4px;
    background-color: ${colors.brandGold};
    margin: 16px auto 0;
  `,
  Grid: styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    ${bp.sm} {
      grid-template-columns: repeat(3, 1fr);
    }
    ${bp.lg} {
      grid-template-columns: repeat(6, 1fr);
    }
  `,
  Card: styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    padding: 24px;
    background-color: ${colors.white};
    border-radius: 12px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    text-decoration: none;
    transition: box-shadow 150ms;
    &:hover {
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }
  `,
  IconCircle: styled.div<{ $color: string }>`
    width: 56px;
    height: 56px;
    background-color: ${({ $color }) => $color};
    border-radius: 9999px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    transition: transform 150ms;
  `,
  CardLabel: styled.span`
    font-size: 14px;
    font-weight: 700;
    color: ${colors.gray700};
    text-align: center;
    transition: color 150ms;
  `,
};
