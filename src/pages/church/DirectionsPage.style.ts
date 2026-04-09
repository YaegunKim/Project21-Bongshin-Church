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
  MapPlaceholder: styled.div`
    width: 100%;
    height: 288px;
    background-color: ${colors.gray200};
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 32px;
    border: 2px dashed ${colors.gray300};
  `,
  MapInner: styled.div`
    text-align: center;
    color: ${colors.gray500};
  `,
  MapIcon: styled.div`
    font-size: 36px;
    margin-bottom: 8px;
  `,
  MapLabel: styled.p`
    font-weight: 700;
    margin: 0 0 4px;
  `,
  MapSub: styled.p`
    font-size: 14px;
    margin: 0;
  `,
  Grid: styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 32px;
    ${bp.md} {
    grid-template-columns: repeat(2, 1fr);
    }
  `,
  SectionTitle: styled.h3`
    font-weight: 700;
    color: ${colors.gray800};
    margin: 0 0 12px;
    padding-left: 12px;
    border-left: 4px solid ${colors.brandGold};
    font-size: 16px;
  `,
  InfoText: styled.p`
    color: ${colors.gray600};
    font-size: 14px;
    line-height: 1.625;
    margin: 0 0 4px;
  `,
  TransportBlock: styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    font-size: 14px;
    color: ${colors.gray600};
  `,
  TransportItem: styled.div`
  `,
  TransportLabel: styled.p`
    font-weight: 700;
    color: ${colors.gray700};
    margin: 0 0 4px;
  `,
};
