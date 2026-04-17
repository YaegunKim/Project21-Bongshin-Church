import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import SubPageLayout from '../../components/ui/SubPageLayout';
import { WORSHIP_SCHEDULE } from '../../data/churchInfo';
import { S } from './WorshipInfoPage.style';

export default function WorshipInfoPage() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('worshipInfo.docTitle');
  }, [t]);

  return (
    <SubPageLayout>
      <S.PageTitle>{t('worshipInfo.pageTitle')}</S.PageTitle>

      <S.TableWrapper>
        <S.Table>
          <S.Thead>
            <tr>
              <S.Th>{t('worshipInfo.colService')}</S.Th>
              <S.Th>{t('worshipInfo.colTime')}</S.Th>
              <S.Th>{t('worshipInfo.colLocation')}</S.Th>
            </tr>
          </S.Thead>
          <tbody>
            {WORSHIP_SCHEDULE.map((s, i) => (
              <S.Tr key={s.nameKey} $isEven={i % 2 === 0}>
                <S.TdName>{t(s.nameKey)}</S.TdName>
                <S.TdTime>{s.time}</S.TdTime>
                <S.TdLocation>{t(s.locationKey)}</S.TdLocation>
              </S.Tr>
            ))}
          </tbody>
        </S.Table>
      </S.TableWrapper>

      <S.InfoBox>
        <S.InfoTitle>{t('worshipInfo.noticeTitle')}</S.InfoTitle>
        <S.InfoList>
          <li>{t('worshipInfo.notice1')}</li>
          <li>{t('worshipInfo.notice2')}</li>
          <li>{t('worshipInfo.notice3')}</li>
        </S.InfoList>
      </S.InfoBox>
    </SubPageLayout>
  );
}
