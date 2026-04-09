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
  ContentRow: styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin-bottom: 32px;
    ${bp.md} {
    flex-direction: row;
    }
  `,
  CenterPhoto: styled.div`
    width: 100%;
    max-width: 400px;
    img {
      width: 100%;
      height: auto;
      border-radius: 8px;
      object-fit: cover;
    }
  `,
  TextBlock: styled.div`
    color: ${colors.gray600};
    line-height: 1.625;
    display: flex;
    flex-direction: column;
    gap: 12px;
  `,
  Grid: styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
    ${bp.md} {
    grid-template-columns: repeat(2, 1fr);
    }
  `,
  InfoCard: styled.div`
    padding: 20px;
    background-color: ${colors.gray50};
    border-radius: 8px;
  `,
  SectionTitle: styled.h3`
    font-weight: 700;
    color: ${colors.gray800};
    margin: 0 0 12px;
    padding-left: 12px;
    border-left: 4px solid ${colors.brandGold};
    font-size: 16px;
  `,
  BulletList: styled.ul`
    font-size: 14px;
    color: ${colors.gray600};
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding-left: 20px;
    margin: 0;
  `,
  ContactList: styled.div`
    font-size: 14px;
    color: ${colors.gray600};
    display: flex;
    flex-direction: column;
    gap: 8px;
  `,
};
