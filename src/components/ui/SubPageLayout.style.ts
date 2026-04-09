import styled from '@emotion/styled';
import { bp } from '../../styles/theme';

export const S = {
  Outer: styled.div``,
  Inner: styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 20px;
  `,
  ContentRow: styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    ${bp.md} {
      flex-direction: row;
    }
  `,
  Content: styled.div`
    flex: 1;
    min-width: 0;
  `,
};
