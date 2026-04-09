import { useEffect } from 'react';
import SubPageLayout from '../../components/ui/SubPageLayout';
import { HISTORY_DATA } from '../../data/historyData';
import { S } from './HistoryPage.style';

export default function HistoryPage() {
  useEffect(() => {
    document.title = '교회연혁 | 봉신교회';
  }, []);

  return (
    <SubPageLayout>
      <S.PageTitle>교회연혁</S.PageTitle>

      <S.Timeline>
        <S.VerticalLine />
        <S.List>
          {HISTORY_DATA.map((entry, i) => (
            <S.Entry key={i}>
              <S.YearDot>{entry.year.slice(2)}년</S.YearDot>
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
