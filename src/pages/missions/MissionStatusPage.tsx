import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import SubPageLayout from '../../components/ui/SubPageLayout';
import { MISSION_DATA } from '../../data/missionData';
import { S } from './MissionStatusPage.style';
import MissionPhoto from '../../assets/images/pictures/469315530_471530269306597_7831137403259707477_n.jpg';

export default function MissionStatusPage() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('missionStatus.docTitle');
  }, [t]);

  return (
    <SubPageLayout>
      <S.PageTitle>{t('missionStatus.pageTitle')}</S.PageTitle>

      <S.Grid>
        {MISSION_DATA.map((m, i) => (
          <S.Card key={i}>
            <S.MissionPhoto>
              <img src={MissionPhoto} alt={`${m.name} ${t('missionStatus.photoAlt')}`} />
            </S.MissionPhoto>
            <S.CardBody>
              <S.MissionName>{m.name} {t('missionStatus.missionarySuffix')}</S.MissionName>
              <S.InfoList>
                <p>🌍 {t('missionStatus.fieldLabel')}: {m.field}</p>
                <p>🏢 {t('missionStatus.orgLabel')}: {m.organization}</p>
                <p>📅 {t('missionStatus.sinceLabel')}: {m.since}{t('missionStatus.yearSuffix')}</p>
              </S.InfoList>
            </S.CardBody>
          </S.Card>
        ))}
      </S.Grid>
    </SubPageLayout>
  );
}
