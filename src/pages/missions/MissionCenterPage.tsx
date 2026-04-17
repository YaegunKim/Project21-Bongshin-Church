import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import SubPageLayout from '../../components/ui/SubPageLayout';
import { CHURCH_INFO } from '../../data/churchInfo';
import { S } from './MissionCenterPage.style';
import CenterPhoto from '../../assets/images/pictures/469315530_471530269306597_7831137403259707477_n.jpg';

export default function MissionCenterPage() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('missionCenter.docTitle');
  }, [t]);

  return (
    <SubPageLayout>
      <S.PageTitle>{t('missionCenter.pageTitle')}</S.PageTitle>

      <S.ContentRow>
        <S.CenterPhoto>
          <img src={CenterPhoto} alt={t('missionCenter.photoAlt')} />
        </S.CenterPhoto>
        <S.TextBlock>
          <p>{t('missionCenter.para1')}</p>
          <p>{t('missionCenter.para2')}</p>
        </S.TextBlock>
      </S.ContentRow>

      <S.Grid>
        <S.InfoCard>
          <S.SectionTitle>{t('missionCenter.mainMinistryTitle')}</S.SectionTitle>
          <S.BulletList>
            <li>{t('missionCenter.ministry1')}</li>
            <li>{t('missionCenter.ministry2')}</li>
            <li>{t('missionCenter.ministry3')}</li>
            <li>{t('missionCenter.ministry4')}</li>
            <li>{t('missionCenter.ministry5')}</li>
          </S.BulletList>
        </S.InfoCard>

        <S.InfoCard>
          <S.SectionTitle>{t('missionCenter.contactTitle')}</S.SectionTitle>
          <S.ContactList>
            <p>📞 {CHURCH_INFO.phone}</p>
            <p>✉️ {CHURCH_INFO.email}</p>
          </S.ContactList>
        </S.InfoCard>
      </S.Grid>
    </SubPageLayout>
  );
}
