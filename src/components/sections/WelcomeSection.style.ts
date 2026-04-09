import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { colors, bp } from '../../styles/theme';

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
  Grid: styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 48px;
    align-items: center;
    ${bp.md} {
      grid-template-columns: repeat(2, 1fr);
    }
  `,
  PhotoCol: styled.div`
    order: 2;
    ${bp.md} {
      order: 1;
    }
  `,
  PastorPhoto: styled.div`
    height: 100%;
    aspect-ratio: 3 / 4;
    max-width: 384px;
    margin: 0 auto;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `,
  TextCol: styled.div`
    order: 1;
    ${bp.md} {
      order: 2;
    }
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
    margin: 0 0 24px;
  `,
  Divider: styled.div`
    width: 48px;
    height: 4px;
    background-color: ${colors.brandGold};
    margin-bottom: 24px;
  `,
  Paragraph: styled.p`
    color: ${colors.gray600};
    line-height: 1.625;
    margin: 0 0 16px;
  `,
  PastorName: styled.p`
    font-weight: 700;
    color: ${colors.gray800};
    margin: 0;
  `,
  MoreLink: styled(Link)`
    display: inline-block;
    margin-top: 24px;
    padding: 8px 24px;
    border: 2px solid ${colors.brandGold};
    color: ${colors.brandGold};
    font-weight: 700;
    text-decoration: none;
    transition: background-color 150ms, color 150ms;
    &:hover {
      background-color: ${colors.brandGold};
      color: ${colors.white};
    }
  `,
};
