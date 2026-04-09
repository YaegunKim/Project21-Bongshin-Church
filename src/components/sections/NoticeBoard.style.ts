import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { colors } from '../../styles/theme';

export const S = {
  Section: styled.section`
    padding: 64px 0;
    background-color: ${colors.white};
  `,
  Inner: styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  `,
  TopRow: styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 32px;
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
  MoreLink: styled(Link)`
    font-size: 14px;
    color: ${colors.gray500};
    text-decoration: none;
    transition: color 150ms;
    &:hover {
      color: ${colors.brandGold};
    }
  `,
  List: styled.div`
    border-top: 1px solid ${colors.gray100};
  `,
  Item: styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 16px 12px;
    margin: 0 -12px;
    cursor: pointer;
    border-bottom: 1px solid ${colors.gray100};
    transition: background-color 150ms;
    &:hover {
      background-color: ${colors.gray50};
    }
  `,
  CategoryBadge: styled.span`
    flex-shrink: 0;
    padding: 2px 8px;
    font-size: 12px;
    background-color: rgba(248, 181, 81, 0.1);
    color: ${colors.brandGold};
    border-radius: 4px;
    font-weight: 700;
  `,
  NoticeTitle: styled.span`
    flex: 1;
    color: ${colors.gray700};
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: color 150ms;
    &:hover {
      color: ${colors.brandGold};
    }
  `,
  Date: styled.span`
    flex-shrink: 0;
    font-size: 12px;
    color: ${colors.gray400};
  `,
};
