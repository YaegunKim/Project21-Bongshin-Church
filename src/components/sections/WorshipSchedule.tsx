import { WORSHIP_SCHEDULE } from '../../data/churchInfo';
import { S } from './WorshipSchedule.style';

export default function WorshipSchedule() {
  return (
    <S.Section>
      <S.Inner>
        <S.Header>
          <S.Label>WORSHIP</S.Label>
          <S.Title>예배 안내</S.Title>
          <S.Divider />
        </S.Header>

        <S.Grid>
          {WORSHIP_SCHEDULE.map((service) => (
            <S.Card key={service.name}>
              <S.IconCircle>🙏</S.IconCircle>
              <S.ServiceName>{service.name}</S.ServiceName>
              <S.ServiceTime>{service.time}</S.ServiceTime>
              <S.ServiceLocation>{service.location}</S.ServiceLocation>
            </S.Card>
          ))}
        </S.Grid>
      </S.Inner>
    </S.Section>
  );
}
