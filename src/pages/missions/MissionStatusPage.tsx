import { useEffect } from 'react';
import SubPageLayout from '../../components/ui/SubPageLayout';
import { MISSION_DATA } from '../../data/missionData';
import { S } from './MissionStatusPage.style';
import MissionPhoto from '../../assets/images/pictures/469315530_471530269306597_7831137403259707477_n.jpg';

export default function MissionStatusPage() {
  useEffect(() => {
    document.title = '선교현황 | 봉신교회';
  }, []);

  return (
    <SubPageLayout>
      <S.PageTitle>선교 및 후원 현황</S.PageTitle>

      <S.Grid>
        {MISSION_DATA.map((m, i) => (
          <S.Card key={i}>
            <S.MissionPhoto>
              <img src={MissionPhoto} alt={`${m.name} 사진`} />
            </S.MissionPhoto>
            <S.CardBody>
              <S.MissionName>{m.name} 선교사</S.MissionName>
              <S.InfoList>
                <p>🌍 사역지: {m.field}</p>
                <p>🏢 소속: {m.organization}</p>
                <p>📅 파송: {m.since}년</p>
              </S.InfoList>
            </S.CardBody>
          </S.Card>
        ))}
      </S.Grid>
    </SubPageLayout>
  );
}
