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
  Intro: styled.p`
    color: ${colors.gray600};
    margin: 0 0 32px;
    line-height: 1.625;
  `,
  AccountList: styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 40px;
  `,
  AccountCard: styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 20px;
    background-color: ${colors.gray50};
    border-radius: 8px;
    border: 1px solid ${colors.gray200};
    @media (min-width: 400px) {
    flex-direction: row;
    align-items: center;
    }
  `,
  AccountLabel: styled.div`
    flex-shrink: 0;
    padding: 4px 12px;
    background-color: ${colors.brandGold};
    color: ${colors.white};
    font-size: 14px;
    font-weight: 700;
    border-radius: 4px;
  `,
  AccountInfo: styled.div`
    flex: 1;
  `,
  AccountNumber: styled.p`
    font-weight: 700;
    color: ${colors.gray800};
    margin: 0 0 2px;
  `,
  AccountHolder: styled.p`
    font-size: 14px;
    color: ${colors.gray500};
    margin: 0;
  `,
  ARSBox: styled.div`
    padding: 20px;
    background-color: rgba(248, 181, 81, 0.1);
    border-radius: 8px;
    border: 1px solid rgba(248, 181, 81, 0.3);
  `,
  ARSTitle: styled.h3`
    font-weight: 700;
    color: ${colors.gray800};
    margin: 0 0 8px;
    font-size: 16px;
  `,
  ARSInfo: styled.p`
    font-size: 14px;
    color: ${colors.gray600};
    margin: 0 0 4px;
  `,
  ARSSub: styled.p`
    font-size: 14px;
    color: ${colors.gray500};
    margin: 0;
  `,
};
