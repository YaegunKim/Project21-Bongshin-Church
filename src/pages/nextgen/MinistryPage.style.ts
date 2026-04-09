import styled from '@emotion/styled';
import { colors, bp } from '../../styles/theme';

export const S = {
  PageTitle: styled.h2`
    font-size: 24px;
    font-weight: 700;
    color: ${colors.gray800};
    margin: 0 0 24px;
    padding-bottom: 12px;
    border-bottom: 2px solid ${colors.brandGold};
  `,
  Grid: styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 32px;
    margin-bottom: 32px;
    ${bp.md} {
    grid-template-columns: 1fr 2fr;
    }
  `,
  MinistryPhoto: styled.div`
    width: 100%;
    aspect-ratio: 4 / 3;
    border-radius: 8px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `,
  InfoGrid: styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    margin-bottom: 24px;
  `,
  InfoCard: styled.div`
    padding: 16px;
    background-color: rgba(248, 181, 81, 0.1);
    border-radius: 8px;
  `,
  InfoCardFull: styled.div`
    grid-column: span 2;
    padding: 16px;
    background-color: rgba(248, 181, 81, 0.1);
    border-radius: 8px;
  `,
  InfoLabel: styled.p`
    font-size: 12px;
    color: ${colors.gray500};
    margin: 0 0 4px;
  `,
  InfoValue: styled.p`
    font-weight: 700;
    color: ${colors.gray800};
    margin: 0;
  `,
  Description: styled.p`
    color: ${colors.gray600};
    line-height: 1.625;
    margin: 0;
  `,
};
