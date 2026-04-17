import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import SubPageLayout from '../../components/ui/SubPageLayout';
import { STAFF_DATA } from '../../data/staffData';
import { S } from './StaffPage.style';

export default function StaffPage() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('staff.docTitle');
  }, [t]);

  return (
    <SubPageLayout>
      <S.PageTitle>{t('staff.pageTitle')}</S.PageTitle>

      <S.Grid>
        {STAFF_DATA.map((member, i) => (
          <S.MemberCard key={i}>
            <S.MemberPhoto
              label={member.photo ? undefined : `${member.name} ${t('staff.photoAlt')}`}
            />
            <S.MemberName>{member.name}</S.MemberName>
            <S.MemberRole>{member.role}</S.MemberRole>
            <S.MemberDept>{member.department}</S.MemberDept>
          </S.MemberCard>
        ))}
      </S.Grid>
    </SubPageLayout>
  );
}
