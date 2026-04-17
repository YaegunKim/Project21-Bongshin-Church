import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import SubPageLayout from '../../components/ui/SubPageLayout';
import { S } from './OfferingPage.style';

const ACCOUNTS = [
  { bank: '[은행명]', number: '000-000-000000', holder: '봉신교회', labelKey: 'offering.accounts.tithe' },
  { bank: '[은행명]', number: '000-000-000001', holder: '봉신교회', labelKey: 'offering.accounts.mission' },
  { bank: '[은행명]', number: '000-000-000002', holder: '봉신교회', labelKey: 'offering.accounts.building' },
];

export default function OfferingPage() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('offering.docTitle');
  }, [t]);

  return (
    <SubPageLayout>
      <S.PageTitle>{t('offering.pageTitle')}</S.PageTitle>

      <S.Intro>{t('offering.intro')}</S.Intro>

      <S.AccountList>
        {ACCOUNTS.map((acc) => (
          <S.AccountCard key={acc.labelKey}>
            <S.AccountLabel>{t(acc.labelKey)}</S.AccountLabel>
            <S.AccountInfo>
              <S.AccountNumber>
                {acc.bank} {acc.number}
              </S.AccountNumber>
              <S.AccountHolder>{t('offering.holderLabel')}: {acc.holder}</S.AccountHolder>
            </S.AccountInfo>
          </S.AccountCard>
        ))}
      </S.AccountList>

      <S.ARSBox>
        <S.ARSTitle>💝 {t('offering.arsTitle')}</S.ARSTitle>
        <S.ARSInfo>
          {t('offering.arsInfo')}: <strong>[ARS 번호]</strong>
        </S.ARSInfo>
        <S.ARSSub>{t('offering.arsSub')}</S.ARSSub>
      </S.ARSBox>
    </SubPageLayout>
  );
}
