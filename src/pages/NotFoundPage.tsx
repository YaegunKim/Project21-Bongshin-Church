import { useEffect } from 'react';
import { S } from './NotFoundPage.style';

export default function NotFoundPage() {
  useEffect(() => {
    document.title = '페이지를 찾을 수 없습니다 | 봉신교회';
  }, []);

  return (
    <S.Wrapper>
      <S.Icon>⛪</S.Icon>
      <S.ErrorCode>404</S.ErrorCode>
      <S.Message>요청하신 페이지를 찾을 수 없습니다.</S.Message>
      <S.HomeLink to="/">홈으로 돌아가기</S.HomeLink>
    </S.Wrapper>
  );
}
