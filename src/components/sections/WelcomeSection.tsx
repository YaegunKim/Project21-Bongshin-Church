import { useTranslation } from 'react-i18next';
import { CHURCH_INFO } from '../../data/churchInfo';
import { S } from './WelcomeSection.style';
import PastorImg from '../../assets/images/pictures/pastor_pic01.jpg';

export default function WelcomeSection() {
  const { t } = useTranslation();

  return (
    <S.Section>
      <S.Inner>
        <S.Grid>
          <S.PhotoCol>
            <S.PastorPhoto aria-label={t('welcome.photoAlt')}>
              <img src={PastorImg} alt={t('welcome.photoAlt')} />
            </S.PastorPhoto>
          </S.PhotoCol>

          <S.TextCol>
            <S.Label>{t('welcome.label')}</S.Label>
            <S.Title>{t('welcome.title')}</S.Title>
            <S.Divider />
            <S.Paragraph>{t('welcome.para1')}</S.Paragraph>
            <S.Paragraph>{t('welcome.para2')}</S.Paragraph>
            <S.Paragraph>{t('welcome.para3')}</S.Paragraph>
            <S.Paragraph>{t('welcome.para4')}</S.Paragraph>
            <S.Paragraph>{t('welcome.para5')}</S.Paragraph>
            <S.Paragraph>{t('welcome.para6')}</S.Paragraph>
            <S.PastorName>{t('welcome.pastorOf')} {CHURCH_INFO.pastor}</S.PastorName>
            <S.MoreLink to="/church/greeting">{t('welcome.readMore')}</S.MoreLink>
          </S.TextCol>
        </S.Grid>
      </S.Inner>
    </S.Section>
  );
}
