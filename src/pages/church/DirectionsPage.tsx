import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import SubPageLayout from '../../components/ui/SubPageLayout';
import { CHURCH_INFO } from '../../data/churchInfo';
import { S } from './DirectionsPage.style';

export default function DirectionsPage() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('directions.docTitle');
  }, [t]);

  return (
    <SubPageLayout>
      <S.PageTitle>{t('directions.pageTitle')}</S.PageTitle>

      <S.MapPlaceholder>
        <S.MapInner>
          <S.MapIcon>🗺️</S.MapIcon>
          <S.MapLabel>{t('directions.mapLabel')}</S.MapLabel>
          <S.MapSub>{t('directions.mapSub')}</S.MapSub>
        </S.MapInner>
      </S.MapPlaceholder>

      <S.Grid>
        <div>
          <S.SectionTitle>{t('directions.addressTitle')}</S.SectionTitle>
          <S.InfoText>{CHURCH_INFO.address}</S.InfoText>
          <S.InfoText>📞 {CHURCH_INFO.phone}</S.InfoText>
        </div>

        <div>
          <S.SectionTitle>{t('directions.transitTitle')}</S.SectionTitle>
          <S.TransportBlock>
            <S.TransportItem>
              <S.TransportLabel>🚇 {t('directions.subwayLabel')}</S.TransportLabel>
              <p style={{ margin: 0 }}>{t('directions.subwayInfo')}</p>
            </S.TransportItem>
            <S.TransportItem>
              <S.TransportLabel>🚌 {t('directions.busLabel')}</S.TransportLabel>
              <p style={{ margin: 0 }}>{t('directions.busInfo')}</p>
            </S.TransportItem>
          </S.TransportBlock>
        </div>

        <div>
          <S.SectionTitle>{t('directions.carTitle')}</S.SectionTitle>
          <S.InfoText>{t('directions.carInfo')}</S.InfoText>
          <S.InfoText>{t('directions.parkingInfo')}</S.InfoText>
        </div>
      </S.Grid>
    </SubPageLayout>
  );
}
