import { useEffect } from 'react';
import SubPageLayout from '../../components/ui/SubPageLayout';
import { CHURCH_INFO } from '../../data/churchInfo';
import { S } from './GreetingPage.style';
import PastorPhoto from '../../assets/images/pictures/pastor_pic01.jpg';

export default function GreetingPage() {
  useEffect(() => {
    document.title = '인사말 | 봉신교회';
  }, []);

  return (
    <SubPageLayout>
      <S.PageTitle>담임목사 인사말</S.PageTitle>

      <S.ContentRow>
        <img src={PastorPhoto} alt="담임목사 사진" width={300} height={400} style={{ objectFit: 'cover' }} />
        <S.TextBlock>
          <p>샬롬! 봉신교회 홈페이지를 방문해 주신 여러분을 환영합니다.</p>
          <p>
            저희 교회는 하나님의 말씀 위에 세워진 공동체로서, 예배와 기도,
            전도와 선교, 그리고 이웃 사랑을 실천하는 교회입니다.
          </p>
          <p>
            예수 그리스도의 복음이 온 땅에 전파되기를 소망하며, 하나님 나라의
            확장을 위해 함께 달려가는 봉신교회가 되기를 원합니다.
          </p>
          <p>
            누구든지 오시면 따뜻하게 맞이하겠습니다. 주님의 사랑과 은혜가
            여러분 가정에 충만하시기를 기도합니다.
          </p>
          <S.PastorName>봉신교회 담임목사 {CHURCH_INFO.pastor}</S.PastorName>
        </S.TextBlock>
      </S.ContentRow>
    </SubPageLayout>
  );
}
