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
  Grid: styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    ${bp.md} {
    grid-template-columns: repeat(3, 1fr);
    }
  `,
  MemberCard: styled.div`
    text-align: center;
  `,
  MemberPhoto: styled(PlaceholderImage)`
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    margin-bottom: 12px;
    object-fit: cover;
  `,
  MemberName: styled.p`
    font-weight: 700;
    color: ${colors.gray800};
    margin: 0 0 2px;
  `,
  MemberRole: styled.p`
    color: ${colors.brandGold};
    font-size: 14px;
    font-weight: 700;
    margin: 0 0 2px;
  `,
  MemberDept: styled.p`
    color: ${colors.gray500};
    font-size: 14px;
    margin: 0;
  `,
};
