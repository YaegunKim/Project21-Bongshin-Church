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
  TableWrapper: styled.div`
    overflow-x: auto;
  `,
  Table: styled.table`
    width: 100%;
    border-collapse: collapse;
    font-size: 14px;
  `,
  Thead: styled.thead`
    background-color: ${colors.gray800};
    color: ${colors.white};
  `,
  Th: styled.th`
    padding: 16px 20px;
    text-align: left;
    font-weight: 700;
  `,
  Td: styled.td`
    padding: 16px 20px;
    border-bottom: 1px solid ${colors.gray100};
  `,
  Tr: styled.tr<{ $isEven: boolean }>`
    background-color: ${(props) => (props.$isEven ? colors.gray50 : colors.white)};
    &:hover {
      background-color: ${colors.gray100};
    }
  `,
  TdName: styled.td`
    padding: 16px 20px;
    border-bottom: 1px solid ${colors.gray100};
    font-weight: 600;
  `,
  TdTime: styled.td`
    padding: 16px 20px;
    border-bottom: 1px solid ${colors.gray100};
  `,
  TdLocation: styled.td`
    padding: 16px 20px;
    border-bottom: 1px solid ${colors.gray100};
  `,
  InfoBox: styled.div`
    margin-top: 32px;
    padding: 20px;
    background-color: rgba(248, 181, 81, 0.1);
    border-radius: 8px;
    border: 1px solid rgba(248, 181, 81, 0.3);
  `,
  InfoTitle: styled.h3`
    font-weight: 700;
    color: ${colors.gray800};
    margin: 0 0 8px;
    font-size: 16px;
  `,
  InfoList: styled.ul`
    font-size: 14px;
    color: ${colors.gray600};
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding-left: 20px;
    margin: 0;
  `,
};
