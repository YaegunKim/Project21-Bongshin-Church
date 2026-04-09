import styled from '@emotion/styled';
import { colors, bp } from '../../styles/theme';

export const S = {
  Container: styled.div`
    position: relative;
    width: 100%;
    height: 300px;
    overflow: hidden;
    background-color: ${colors.gray200};
    ${bp.md} {
      height: 500px;
    }
  `,
  Slide: styled.div<{ $isActive: boolean }>`
    position: absolute;
    inset: 0;
    transition: opacity 700ms;
    opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
  `,
  SlideImg: styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `,
  SlideOverlay: styled.div`
    position: absolute;
    inset: 0;
    // background: linear-gradient(
    //   to bottom right,
    //   rgba(248, 181, 81, 0.6),
    //   rgba(0, 160, 233, 0.4)
    // );
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  SlideText: styled.div`
    text-align: center;
    color: ${colors.white};
    padding: 0 24px;
  `,
  SlideTitle: styled.p`
    font-size: 14px;
    margin: 0 0 8px;
    opacity: 0.8;
    ${bp.md} {
      font-size: 16px;
    }
  `,
  SlideSubtitle: styled.h2`
    font-size: 24px;
    font-weight: 700;
    margin: 0;
    ${bp.md} {
      font-size: 36px;
    }
  `,
  ArrowButton: styled.button<{ $side: 'left' | 'right' }>`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    ${({ $side }) => ($side === 'left' ? 'left: 16px;' : 'right: 16px;')}
    width: 40px;
    height: 40px;
    border-radius: 9999px;
    background-color: rgba(0, 0, 0, 0.3);
    color: ${colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    font-size: 20px;
    transition: background-color 150ms;
    &:hover {
      background-color: ${colors.brandGold};
    }
  `,
  Dots: styled.div`
    position: absolute;
    bottom: 16px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 8px;
  `,
  Dot: styled.button<{ $isActive: boolean }>`
    width: 12px;
    height: 12px;
    border-radius: 9999px;
    border: none;
    cursor: pointer;
    padding: 0;
    transition: background-color 150ms;
    background-color: ${({ $isActive }) =>
      $isActive ? colors.brandGold : 'rgba(255, 255, 255, 0.5)'};
    &:hover {
      background-color: ${({ $isActive }) =>
        $isActive ? colors.brandGold : colors.white};
    }
  `,
};
