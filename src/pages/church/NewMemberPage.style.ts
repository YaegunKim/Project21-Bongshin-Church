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
    line-height: 1.625;
    margin: 0 0 32px;
  `,
  StepList: styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-bottom: 40px;
  `,
  StepItem: styled.div`
    display: flex;
    gap: 20px;
    align-items: flex-start;
  `,
  StepNumber: styled.div`
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    border-radius: 9999px;
    background-color: ${colors.brandGold};
    color: ${colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 16px;
  `,
  StepTitle: styled.h3`
    font-weight: 700;
    color: ${colors.gray800};
    margin: 0 0 4px;
    font-size: 16px;
  `,
  StepDesc: styled.p`
    font-size: 14px;
    color: ${colors.gray600};
    margin: 0;
  `,
  ContactBox: styled.div`
    padding: 20px;
    background-color: rgba(0, 160, 233, 0.05);
    border-radius: 8px;
    border: 1px solid rgba(0, 160, 233, 0.2);
  `,
  ContactTitle: styled.h3`
    font-weight: 700;
    color: ${colors.gray800};
    margin: 0 0 8px;
    font-size: 16px;
  `,
  ContactInfo: styled.p`
    font-size: 14px;
    color: ${colors.gray600};
    margin: 0;
  `,
};
