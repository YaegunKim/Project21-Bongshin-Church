import { useEffect } from 'react';
import SubPageLayout from '../../components/ui/SubPageLayout';
import { STAFF_DATA } from '../../data/staffData';
import { S } from './StaffPage.style';

export default function StaffPage() {
  useEffect(() => {
    document.title = '섬기는분들 | 봉신교회';
  }, []);

  return (
    <SubPageLayout>
      <S.PageTitle>섬기는분들</S.PageTitle>

      <S.Grid>
        {STAFF_DATA.map((member, i) => (
          <S.MemberCard key={i}>
            <S.MemberPhoto
              label={member.photo ? undefined : `${member.name} 사진`}
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
