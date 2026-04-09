import { useEffect } from 'react';
import SubPageLayout from '../../components/ui/SubPageLayout';
import { CHURCH_INFO } from '../../data/churchInfo';
import { S } from './NewMemberPage.style';

const STEPS = [
  { step: '1', title: '첫 방문', desc: '주일예배에 참석하시면 됩니다. 안내위원이 친절하게 도와드립니다.' },
  { step: '2', title: '새가족 등록', desc: '예배 후 새가족 카드를 작성해 주시면 담당자가 연락드립니다.' },
  { step: '3', title: '새가족 환영회', desc: '매월 첫째 주 예배 후 새가족 환영 점심 식사에 초대됩니다.' },
  { step: '4', title: '새가족 교육', desc: '6주 과정의 새가족 양육 프로그램을 통해 교회를 더 잘 알아가게 됩니다.' },
  { step: '5', title: '소그룹 배치', desc: '지역/나이에 맞는 구역 또는 소그룹에 연결되어 공동체 삶을 시작합니다.' },
];

export default function NewMemberPage() {
  useEffect(() => {
    document.title = '새가족안내 | 봉신교회';
  }, []);

  return (
    <SubPageLayout>
      <S.PageTitle>새가족 안내</S.PageTitle>

      <S.Intro>
        봉신교회에 처음 오신 것을 환영합니다! 아래 절차를 통해 저희 교회 가족이 되실 수 있습니다.
      </S.Intro>

      <S.StepList>
        {STEPS.map((item) => (
          <S.StepItem key={item.step}>
            <S.StepNumber>{item.step}</S.StepNumber>
            <div>
              <S.StepTitle>{item.title}</S.StepTitle>
              <S.StepDesc>{item.desc}</S.StepDesc>
            </div>
          </S.StepItem>
        ))}
      </S.StepList>

      <S.ContactBox>
        <S.ContactTitle>문의</S.ContactTitle>
        <S.ContactInfo>교회 사무실: {CHURCH_INFO.phone}</S.ContactInfo>
        <S.ContactInfo>이메일: {CHURCH_INFO.email}</S.ContactInfo>
      </S.ContactBox>
    </SubPageLayout>
  );
}
