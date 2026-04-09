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
    border: 1px solid ${colors.gray200};
    border-radius: 8px;
    overflow: hidden;
    transition: box-shadow 150ms;
    &:hover {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }
  `,
  MissionPhoto: styled.div`
    width: 100%;
    height: 180px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `,
  CardBody: styled.div`
    padding: 16px;
  `,
  MissionName: styled.h3`
    font-weight: 700;
    color: ${colors.gray800};
    margin: 0 0 8px;
    font-size: 16px;
  `,
  InfoList: styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    font-size: 14px;
    color: ${colors.gray600};
  `,
};
