import SubPageLayout from '../../components/ui/SubPageLayout';
import type { Ministry } from '../../types/content';
import { S } from './MinistryPage.style';
import MinistryPhoto from '../../assets/images/pictures/471818824_486189377840686_2632481166972730955_n.jpg'

interface Props {
  ministry: Ministry;
}

export default function MinistryPage({ ministry }: Props) {
  return (
    <SubPageLayout>
      <S.PageTitle>{ministry.label}</S.PageTitle>

      <S.Grid>
        <S.MinistryPhoto>
          <img src={MinistryPhoto} alt={`${ministry.label} 사진`} />
          </S.MinistryPhoto>

        <div>
          <S.InfoGrid>
            <S.InfoCard>
              <S.InfoLabel>대상</S.InfoLabel>
              <S.InfoValue>{ministry.ageRange}</S.InfoValue>
            </S.InfoCard>
            <S.InfoCard>
              <S.InfoLabel>예배 시간</S.InfoLabel>
              <S.InfoValue>{ministry.meetingTime}</S.InfoValue>
            </S.InfoCard>
            <S.InfoCardFull>
              <S.InfoLabel>담당 교역자</S.InfoLabel>
              <S.InfoValue>{ministry.leader}</S.InfoValue>
            </S.InfoCardFull>
          </S.InfoGrid>

          <S.Description>{ministry.description}</S.Description>
        </div>
      </S.Grid>
    </SubPageLayout>
  );
}
