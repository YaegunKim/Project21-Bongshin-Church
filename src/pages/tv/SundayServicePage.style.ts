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
  FeaturedBlock: styled.div`
    margin-bottom: 32px;
  `,
  VideoTitle: styled.p`
    margin: 8px 0 0;
    font-weight: 700;
    color: ${colors.gray800};
  `,
  VideoDate: styled.p`
    font-size: 14px;
    color: ${colors.gray500};
    margin: 2px 0 0;
  `,
  SectionTitle: styled.h3`
    font-weight: 700;
    color: ${colors.gray700};
    margin: 0 0 16px;
    padding-left: 12px;
    border-left: 4px solid ${colors.brandGold};
    font-size: 16px;
  `,
  Grid: styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
    ${bp.md} {
    grid-template-columns: repeat(2, 1fr);
    }
  `,
  VideoCard: styled.div`
    background-color: ${colors.gray50};
    border-radius: 8px;
    overflow: hidden;
  `,
  CardInfo: styled.div`
    padding: 12px;
  `,
  CardTitle: styled.p`
    font-weight: 700;
    font-size: 14px;
    color: ${colors.gray800};
    margin: 0 0 4px;
  `,
  CardDate: styled.p`
    font-size: 12px;
    color: ${colors.gray500};
    margin: 0;
  `,
};
