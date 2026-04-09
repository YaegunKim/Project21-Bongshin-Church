import { useEffect } from 'react';
import SubPageLayout from '../../components/ui/SubPageLayout';
import { WORSHIP_SCHEDULE } from '../../data/churchInfo';
import { S } from './WorshipInfoPage.style';

export default function WorshipInfoPage() {
  useEffect(() => {
    document.title = '예배안내 | 봉신교회';
  }, []);

  return (
    <SubPageLayout>
      <S.PageTitle>예배 안내</S.PageTitle>

      <S.TableWrapper>
        <S.Table>
          <S.Thead>
            <tr>
              <S.Th>예배 구분</S.Th>
              <S.Th>시간</S.Th>
              <S.Th>장소</S.Th>
            </tr>
          </S.Thead>
          <tbody>
            {WORSHIP_SCHEDULE.map((s, i) => (
              <S.Tr key={s.name} $isEven={i % 2 === 0}>
                <S.TdName>{s.name}</S.TdName>
                <S.TdTime>{s.time}</S.TdTime>
                <S.TdLocation>{s.location}</S.TdLocation>
              </S.Tr>
            ))}
          </tbody>
        </S.Table>
      </S.TableWrapper>

      <S.InfoBox>
        <S.InfoTitle>안내 사항</S.InfoTitle>
        <S.InfoList>
          <li>예배 30분 전에 도착하시면 더욱 풍성한 예배를 드릴 수 있습니다.</li>
          <li>주차는 교회 주차장을 이용해 주시기 바랍니다.</li>
          <li>어린 자녀를 동반하신 분들은 영아실을 이용하실 수 있습니다.</li>
        </S.InfoList>
      </S.InfoBox>
    </SubPageLayout>
  );
}
