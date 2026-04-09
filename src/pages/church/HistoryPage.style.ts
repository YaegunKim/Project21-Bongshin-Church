import styled from '@emotion/styled';
import { colors } from '../../styles/theme';

export const S = {
  PageTitle: styled.h2`
    font-size: 24px;
    font-weight: 700;
    color: ${colors.gray800};
    margin: 0 0 24px;
    padding-bottom: 12px;
    border-bottom: 2px solid ${colors.brandGold};
  `,
  Timeline: styled.div`
    position: relative;
  `,
  VerticalLine: styled.div`
    position: absolute;
    left: 24px;
    top: 0;
    bottom: 0;
    width: 2px;
    background-color: ${colors.brandLightgray};
  `,
  List: styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
  `,
  Entry: styled.div`
    display: flex;
    gap: 24px;
    position: relative;
  `,
  YearDot: styled.div`
    flex-shrink: 0;
    width: 48px;
    height: 48px;
    border-radius: 9999px;
    background-color: ${colors.brandGold};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${colors.white};
    font-weight: 700;
    font-size: 12px;
    z-index: 10;
  `,
  EntryContent: styled.div`
    flex: 1;
    padding-bottom: 8px;
  `,
  EntryYear: styled.p`
    font-weight: 700;
    color: ${colors.brandGold};
    font-size: 18px;
    margin: 0 0 4px;
  `,
  EntryDesc: styled.p`
    color: ${colors.gray700};
    margin: 0;
  `,
};
