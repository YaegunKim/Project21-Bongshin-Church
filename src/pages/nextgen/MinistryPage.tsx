import { useTranslation } from 'react-i18next';
import SubPageLayout from '../../components/ui/SubPageLayout';
import type { Ministry } from '../../types/content';
import { S } from './MinistryPage.style';
import MinistryPhoto from '../../assets/images/pictures/471818824_486189377840686_2632481166972730955_n.jpg'

interface Props {
  ministry: Ministry;
}

export default function MinistryPage({ ministry }: Props) {
  const { t } = useTranslation();
  const key = ministry.key;

  return (
    <SubPageLayout>
      <S.PageTitle>{t(`ministry.${key}.label`)}</S.PageTitle>

      <S.Grid>
        <S.MinistryPhoto>
          <img src={MinistryPhoto} alt={`${t(`ministry.${key}.label`)} ${t('ministry.photoAlt')}`} />
        </S.MinistryPhoto>

        <div>
          <S.InfoGrid>
            <S.InfoCard>
              <S.InfoLabel>{t('ministry.target')}</S.InfoLabel>
              <S.InfoValue>{t(`ministry.${key}.ageRange`)}</S.InfoValue>
            </S.InfoCard>
            <S.InfoCard>
              <S.InfoLabel>{t('ministry.worshipTime')}</S.InfoLabel>
              <S.InfoValue>{t(`ministry.${key}.meetingTime`)}</S.InfoValue>
            </S.InfoCard>
            <S.InfoCardFull>
              <S.InfoLabel>{t('ministry.leader')}</S.InfoLabel>
              <S.InfoValue>{ministry.leader}</S.InfoValue>
            </S.InfoCardFull>
          </S.InfoGrid>

          <S.Description>{t(`ministry.${key}.description`)}</S.Description>
        </div>
      </S.Grid>
    </SubPageLayout>
  );
}
