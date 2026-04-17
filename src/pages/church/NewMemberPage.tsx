import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import SubPageLayout from '../../components/ui/SubPageLayout';
import { CHURCH_INFO } from '../../data/churchInfo';
import { S } from './NewMemberPage.style';

const STEP_KEYS = ['1', '2', '3', '4', '5'] as const;

export default function NewMemberPage() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('newMember.docTitle');
  }, [t]);

  return (
    <SubPageLayout>
      <S.PageTitle>{t('newMember.pageTitle')}</S.PageTitle>

      <S.Intro>{t('newMember.intro')}</S.Intro>

      <S.StepList>
        {STEP_KEYS.map((step) => (
          <S.StepItem key={step}>
            <S.StepNumber>{step}</S.StepNumber>
            <div>
              <S.StepTitle>{t(`newMember.steps.${step}.title`)}</S.StepTitle>
              <S.StepDesc>{t(`newMember.steps.${step}.desc`)}</S.StepDesc>
            </div>
          </S.StepItem>
        ))}
      </S.StepList>

      <S.ContactBox>
        <S.ContactTitle>{t('newMember.contactTitle')}</S.ContactTitle>
        <S.ContactInfo>{t('newMember.officeLabel')}: {CHURCH_INFO.phone}</S.ContactInfo>
        <S.ContactInfo>{t('newMember.emailLabel')}: {CHURCH_INFO.email}</S.ContactInfo>
      </S.ContactBox>
    </SubPageLayout>
  );
}
