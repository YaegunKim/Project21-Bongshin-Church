import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import SubPageLayout from '../../components/ui/SubPageLayout';
import { CHURCH_INFO } from '../../data/churchInfo';
import { S } from './GreetingPage.style';
import PastorPhoto from '../../assets/images/pictures/pastor_pic01.jpg';

export default function GreetingPage() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('greeting.docTitle');
  }, [t]);

  return (
    <SubPageLayout>
      <S.PageTitle>{t('greeting.pageTitle')}</S.PageTitle>

      <S.ContentRow>
        <img src={PastorPhoto} alt={t('greeting.photoAlt')} width={300} height={400} style={{ objectFit: 'cover' }} />
        <S.TextBlock>
          <p>{t('greeting.para1')}</p>
          <p>{t('greeting.para2')}</p>
          <p>{t('greeting.para3')}</p>
          <p>{t('greeting.para4')}</p>
          <S.PastorName>{t('greeting.pastorOf')} {CHURCH_INFO.pastor}</S.PastorName>
        </S.TextBlock>
      </S.ContentRow>
    </SubPageLayout>
  );
}
