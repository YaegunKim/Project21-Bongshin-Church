import styled from '@emotion/styled';
import { colors, bp } from '../styles/theme';

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
    gap: 40px;
    ${bp.md} {
    grid-template-columns: repeat(2, 1fr);
    }
  `,
  InfoTitle: styled.h3`
    font-weight: 700;
    color: ${colors.gray800};
    margin: 0 0 20px;
    font-size: 16px;
  `,
  InfoList: styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    color: ${colors.gray600};
  `,
  InfoItem: styled.div`
    display: flex;
    gap: 12px;
  `,
  InfoIcon: styled.span`
    color: ${colors.brandGold};
    font-size: 20px;
  `,
  InfoLabel: styled.p`
    font-weight: 700;
    color: ${colors.gray700};
    font-size: 14px;
    margin: 0 0 2px;
  `,
  InfoValue: styled.p`
    font-size: 14px;
    margin: 0;
  `,
  Form: styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
  `,
  FieldLabel: styled.label`
    display: block;
    font-size: 14px;
    font-weight: 700;
    color: ${colors.gray700};
    margin-bottom: 4px;
  `,
  Input: styled.input`
    width: 100%;
    border: 1px solid ${colors.gray300};
    border-radius: 4px;
    padding: 8px 12px;
    font-size: 14px;
    font-family: inherit;
    outline: none;
    box-sizing: border-box;
    &:focus {
    border-color: ${colors.brandGold};
    }
  `,
  Textarea: styled.textarea`
    width: 100%;
    border: 1px solid ${colors.gray300};
    border-radius: 4px;
    padding: 8px 12px;
    font-size: 14px;
    font-family: inherit;
    outline: none;
    resize: none;
    box-sizing: border-box;
    &:focus {
    border-color: ${colors.brandGold};
    }
  `,
  SubmitButton: styled.button`
    width: 100%;
    padding: 12px;
    background-color: ${colors.brandGold};
    color: ${colors.white};
    font-weight: 700;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    font-size: 16px;
    font-family: inherit;
    transition: background-color 150ms;
    &:hover {
    background-color: rgba(248, 181, 81, 0.9);
    }
  `,
};
