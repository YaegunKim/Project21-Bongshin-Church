import { useTranslation } from 'react-i18next';
import { S } from './NoticeBoard.style';

type CategoryKey = 'notice' | 'event' | 'newMember' | 'mission';

const NOTICES: { id: number; titleKey: string; date: string; categoryKey: CategoryKey }[] = [
  { id: 1, titleKey: 'notice.items.1', date: '2026-04-01', categoryKey: 'notice' },
  { id: 2, titleKey: 'notice.items.2', date: '2026-03-28', categoryKey: 'notice' },
  { id: 3, titleKey: 'notice.items.3', date: '2026-03-25', categoryKey: 'event' },
  { id: 4, titleKey: 'notice.items.4', date: '2026-03-20', categoryKey: 'newMember' },
  { id: 5, titleKey: 'notice.items.5', date: '2026-03-15', categoryKey: 'mission' },
];

export default function NoticeBoard() {
  const { t } = useTranslation();

  return (
    <S.Section>
      <S.Inner>
        <S.TopRow>
          <div>
            <S.Label>{t('notice.label')}</S.Label>
            <S.Title>{t('notice.title')}</S.Title>
          </div>
          <S.MoreLink to="/church/greeting">{t('notice.more')}</S.MoreLink>
        </S.TopRow>

        <S.List>
          {NOTICES.map((notice) => (
            <S.Item key={notice.id}>
              <S.CategoryBadge>{t(`notice.categories.${notice.categoryKey}`)}</S.CategoryBadge>
              <S.NoticeTitle>{t(notice.titleKey)}</S.NoticeTitle>
              <S.Date>{notice.date}</S.Date>
            </S.Item>
          ))}
        </S.List>
      </S.Inner>
    </S.Section>
  );
}
