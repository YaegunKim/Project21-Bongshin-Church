import { useTranslation } from 'react-i18next';
import { WORSHIP_SCHEDULE } from '../../data/churchInfo';
import { S } from './WorshipSchedule.style';

export default function WorshipSchedule() {
  const { t } = useTranslation();

  return (
    <S.Section>
      <S.Inner>
        <S.Header>
          <S.Label>{t('worshipSection.label')}</S.Label>
          <S.Title>{t('worshipSection.title')}</S.Title>
          <S.Divider />
        </S.Header>

        <S.Grid>
          {WORSHIP_SCHEDULE.map((service) => (
            <S.Card key={service.nameKey}>
              <S.IconCircle>🙏</S.IconCircle>
              <S.ServiceName>{t(service.nameKey)}</S.ServiceName>
              <S.ServiceTime>{service.time}</S.ServiceTime>
              <S.ServiceLocation>{t(service.locationKey)}</S.ServiceLocation>
            </S.Card>
          ))}
        </S.Grid>
      </S.Inner>
    </S.Section>
  );
}
