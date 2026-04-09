import styled from '@emotion/styled';
import { colors } from '../../styles/theme';

export const S = {
  Wrapper: styled.div`
    background-color: rgba(248, 181, 81, 0.1);
    border: 2px dashed rgba(248, 181, 81, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${colors.brandDarkgray};
    font-size: 14px;
  `,
};
