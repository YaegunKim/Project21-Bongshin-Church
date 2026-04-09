import { useEffect } from 'react';
import SubPageLayout from '../../components/ui/SubPageLayout';
import { CHURCH_INFO } from '../../data/churchInfo';
import { S } from './MissionCenterPage.style';
import CenterPhoto from '../../assets/images/pictures/469315530_471530269306597_7831137403259707477_n.jpg';

export default function MissionCenterPage() {
  useEffect(() => {
    document.title = '선교센터 | 봉신교회';
  }, []);

  return (
    <SubPageLayout>
      <S.PageTitle>선교센터</S.PageTitle>

      <S.ContentRow>
        <S.CenterPhoto>
          <img src={CenterPhoto} alt="선교센터 사진" />
        </S.CenterPhoto>
        <S.TextBlock>
          <p>
            봉신교회 선교센터는 국내외 선교사를 지원하고, 선교에 관심 있는
            성도들을 훈련하는 기관입니다.
          </p>
          <p>
            매년 단기선교팀을 파송하며, 선교사 자녀 교육 및 안식년 지원
            프로그램을 운영합니다.
          </p>
        </S.TextBlock>
      </S.ContentRow>

      <S.Grid>
        <S.InfoCard>
          <S.SectionTitle>주요 사역</S.SectionTitle>
          <S.BulletList>
            <li>선교사 파송 및 후원</li>
            <li>단기선교 훈련 및 파송</li>
            <li>선교사 자녀(MK) 지원</li>
            <li>선교 기도회</li>
            <li>선교 컨퍼런스</li>
          </S.BulletList>
        </S.InfoCard>

        <S.InfoCard>
          <S.SectionTitle>연락처</S.SectionTitle>
          <S.ContactList>
            <p>📞 {CHURCH_INFO.phone}</p>
            <p>✉️ {CHURCH_INFO.email}</p>
          </S.ContactList>
        </S.InfoCard>
      </S.Grid>
    </SubPageLayout>
  );
}
