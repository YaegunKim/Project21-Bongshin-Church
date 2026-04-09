import { useEffect } from 'react';
import SubPageLayout from '../../components/ui/SubPageLayout';
import { S } from './OfferingPage.style';

const ACCOUNTS = [
  { bank: '[은행명]', number: '000-000-000000', holder: '봉신교회', label: '십일조/감사헌금' },
  { bank: '[은행명]', number: '000-000-000001', holder: '봉신교회', label: '선교헌금' },
  { bank: '[은행명]', number: '000-000-000002', holder: '봉신교회', label: '건축헌금' },
];

export default function OfferingPage() {
  useEffect(() => {
    document.title = '온라인헌금안내 | 봉신교회';
  }, []);

  return (
    <SubPageLayout>
      <S.PageTitle>온라인 헌금 안내</S.PageTitle>

      <S.Intro>
        아래 계좌로 헌금하실 수 있습니다. 헌금 시 이름과 헌금 종류를 기재해
        주시기 바랍니다.
      </S.Intro>

      <S.AccountList>
        {ACCOUNTS.map((acc) => (
          <S.AccountCard key={acc.label}>
            <S.AccountLabel>{acc.label}</S.AccountLabel>
            <S.AccountInfo>
              <S.AccountNumber>
                {acc.bank} {acc.number}
              </S.AccountNumber>
              <S.AccountHolder>예금주: {acc.holder}</S.AccountHolder>
            </S.AccountInfo>
          </S.AccountCard>
        ))}
      </S.AccountList>

      <S.ARSBox>
        <S.ARSTitle>💝 ARS 헌금</S.ARSTitle>
        <S.ARSInfo>
          ARS 헌금 안내: <strong>[ARS 번호]</strong>
        </S.ARSInfo>
        <S.ARSSub>통화 후 안내에 따라 헌금하실 수 있습니다.</S.ARSSub>
      </S.ARSBox>
    </SubPageLayout>
  );
}
