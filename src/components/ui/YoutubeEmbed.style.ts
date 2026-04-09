import styled from '@emotion/styled';

export const S = {
  Container: styled.div`
    width: 100%;
    aspect-ratio: 16 / 9;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  `,
  Frame: styled.iframe`
    width: 100%;
    height: 100%;
    border: none;
  `,
};
