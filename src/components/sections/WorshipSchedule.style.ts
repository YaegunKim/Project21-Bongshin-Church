import styled from '@emotion/styled';
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
    grid-template-columns: 1fr;
    gap: 24px;
    ${bp.sm} {
      grid-template-columns: repeat(2, 1fr);
    }
    ${bp.lg} {
      grid-template-columns: repeat(3, 1fr);
    }
  `,
  Card: styled.div`
    background-color: ${colors.white};
    border-radius: 8px;
    padding: 24px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    border: 1px solid ${colors.gray100};
    transition: border-color 150ms, box-shadow 150ms;
    &:hover {
      border-color: ${colors.brandGold};
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }
  `,
  IconCircle: styled.div`
    width: 40px;
    height: 40px;
    background-color: rgba(248, 181, 81, 0.1);
    border-radius: 9999px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
    font-size: 18px;
  `,
  ServiceName: styled.h3`
    font-weight: 700;
    color: ${colors.gray800};
    margin: 0 0 8px;
    font-size: 16px;
  `,
  ServiceTime: styled.p`
    color: ${colors.brandGold};
    font-weight: 700;
    font-size: 18px;
    margin: 0 0 4px;
  `,
  ServiceLocation: styled.p`
    color: ${colors.gray500};
    font-size: 14px;
    margin: 0;
  `,
};
