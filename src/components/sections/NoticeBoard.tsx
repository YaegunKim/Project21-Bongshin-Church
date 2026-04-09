import { S } from './NoticeBoard.style';

const NOTICES = [
  { id: 1, title: '2026년 부활절 연합 예배 안내', date: '2026-04-01', category: '공지' },
  { id: 2, title: '4월 구역 예배 일정 안내', date: '2026-03-28', category: '공지' },
  { id: 3, title: '봄 수련회 참가 신청 안내', date: '2026-03-25', category: '행사' },
  { id: 4, title: '새가족 환영 식사 초대', date: '2026-03-20', category: '새가족' },
  { id: 5, title: '선교사 파송 예배 안내', date: '2026-03-15', category: '선교' },
];

export default function NoticeBoard() {
  return (
    <S.Section>
      <S.Inner>
        <S.TopRow>
          <div>
            <S.Label>NOTICE</S.Label>
            <S.Title>공지사항</S.Title>
          </div>
          <S.MoreLink to="/church/greeting">더보기 →</S.MoreLink>
        </S.TopRow>

        <S.List>
          {NOTICES.map((notice) => (
            <S.Item key={notice.id}>
              <S.CategoryBadge>{notice.category}</S.CategoryBadge>
              <S.NoticeTitle>{notice.title}</S.NoticeTitle>
              <S.Date>{notice.date}</S.Date>
            </S.Item>
          ))}
        </S.List>
      </S.Inner>
    </S.Section>
  );
}
