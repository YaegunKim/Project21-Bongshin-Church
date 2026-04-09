import styled from '@emotion/styled';
import PlaceholderImage from '../../components/ui/PlaceholderImage';
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
  TextBlock: styled.div`
    color: ${colors.gray600};
    line-height: 1.625;
    display: flex;
    flex-direction: column;
    gap: 16px;
  `,
  PastorName: styled.p`
    padding-top: 16px;
    font-weight: 700;
    color: ${colors.gray800};
    margin: 0;
  `,
};
