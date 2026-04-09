import { useEffect } from 'react';
import SubPageLayout from '../../components/ui/SubPageLayout';
import { CHURCH_INFO } from '../../data/churchInfo';
import { S } from './DirectionsPage.style';

export default function DirectionsPage() {
  useEffect(() => {
    document.title = '오시는길 | 봉신교회';
  }, []);

  return (
    <SubPageLayout>
      <S.PageTitle>오시는 길</S.PageTitle>

      <S.MapPlaceholder>
        <S.MapInner>
          <S.MapIcon>🗺️</S.MapIcon>
          <S.MapLabel>지도</S.MapLabel>
          <S.MapSub>Kakao Maps / Google Maps 삽입 위치</S.MapSub>
        </S.MapInner>
      </S.MapPlaceholder>

      <S.Grid>
        <div>
          <S.SectionTitle>주소</S.SectionTitle>
          <S.InfoText>{CHURCH_INFO.address}</S.InfoText>
          <S.InfoText>📞 {CHURCH_INFO.phone}</S.InfoText>
        </div>

        <div>
          <S.SectionTitle>대중교통</S.SectionTitle>
          <S.TransportBlock>
            <S.TransportItem>
              <S.TransportLabel>🚇 지하철</S.TransportLabel>
              <p style={{ margin: 0 }}>[호선] [역명]역 [번] 출구에서 도보 [분]</p>
            </S.TransportItem>
            <S.TransportItem>
              <S.TransportLabel>🚌 버스</S.TransportLabel>
              <p style={{ margin: 0 }}>[버스번호] [정류장명] 하차</p>
            </S.TransportItem>
          </S.TransportBlock>
        </div>

        <div>
          <S.SectionTitle>자동차</S.SectionTitle>
          <S.InfoText>[내비게이션 검색어: 봉신교회]</S.InfoText>
          <S.InfoText>주차: 교회 주차장 이용 가능</S.InfoText>
        </div>
      </S.Grid>
    </SubPageLayout>
  );
}
