import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import SubPageLayout from '../../components/ui/SubPageLayout';
import { HISTORY_DATA } from '../../data/historyData';
import { S } from './HistoryPage.style';

export default function HistoryPage() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('history.docTitle');
  }, [t]);

  return (
    <SubPageLayout>
      <S.PageTitle>{t('history.pageTitle')}</S.PageTitle>

      <S.Timeline>
        <S.VerticalLine />
        <S.List>
          {HISTORY_DATA.map((entry, i) => (
            <S.Entry key={i}>
              <S.YearDot>{entry.year.slice(2)}{t('history.yearSuffix')}</S.YearDot>
              <S.EntryContent>
                <S.EntryYear>
                  {entry.year}
                  {entry.month ? `.${entry.month}` : ''}
                </S.EntryYear>
                <S.EntryDesc>{entry.description}</S.EntryDesc>
              </S.EntryContent>
            </S.Entry>
          ))}
        </S.List>
      </S.Timeline>
    </SubPageLayout>
  );
}
