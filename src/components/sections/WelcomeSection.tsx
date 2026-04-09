import { CHURCH_INFO } from '../../data/churchInfo';
import { S } from './WelcomeSection.style';
import PastorImg from '../../assets/images/pictures/pastor_pic01.jpg';

export default function WelcomeSection() {
  return (
    <S.Section>
      <S.Inner>
        <S.Grid>
          <S.PhotoCol>
            <S.PastorPhoto aria-label="담임목사 사진" >
              <img src={PastorImg} alt="담임목사 사진" />
            </S.PastorPhoto>
          </S.PhotoCol>

          <S.TextCol>
            <S.Label>GREETING</S.Label>
            <S.Title>담임목사 인사말</S.Title>
            <S.Divider />
            <S.Paragraph>
              봉신교회 홈페이지를 방문해 주신 여러분을 환영합니다.
            </S.Paragraph>
            <S.Paragraph>
              저희 교회는 하나님의 말씀 위에 세워진 공동체로서, 예배와 기도,
              전도와 선교, 그리고 이웃 사랑을 실천하는 교회입니다.
            </S.Paragraph>
            <S.Paragraph>
              누구든지 오시면 따뜻하게 맞이하겠습니다. 하나님의 은혜가 여러분
              가정에 함께 하시기를 기도합니다.
            </S.Paragraph>
            <S.PastorName>봉신교회 담임목사 {CHURCH_INFO.pastor}</S.PastorName>
            <S.MoreLink to="/church/greeting">자세히 보기</S.MoreLink>
          </S.TextCol>
        </S.Grid>
      </S.Inner>
    </S.Section>
  );
}
