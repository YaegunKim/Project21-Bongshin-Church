import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import SubPageLayout from '../../components/ui/SubPageLayout';
import YoutubeEmbed from '../../components/ui/YoutubeEmbed';
import type { VideoItem } from '../../types/content';
import { S } from './SundayServicePage.style';

const VIDEOS: VideoItem[] = [
  { title: '2026년 4월 6일 주일예배', videoId: 'dQw4w9WgXcQ', date: '2026-04-06' },
  { title: '2026년 3월 30일 주일예배', videoId: 'dQw4w9WgXcQ', date: '2026-03-30' },
  { title: '2026년 3월 23일 주일예배', videoId: 'dQw4w9WgXcQ', date: '2026-03-23' },
];

export default function SundayServicePage() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('sunday.docTitle');
  }, [t]);

  return (
    <SubPageLayout>
      <S.PageTitle>{t('sunday.pageTitle')}</S.PageTitle>

      <S.FeaturedBlock>
        <YoutubeEmbed videoId={VIDEOS[0].videoId} title={VIDEOS[0].title} />
        <S.VideoTitle>{VIDEOS[0].title}</S.VideoTitle>
        <S.VideoDate>{VIDEOS[0].date}</S.VideoDate>
      </S.FeaturedBlock>

      {VIDEOS.length > 1 && (
        <>
          <S.SectionTitle>{t('sunday.previousTitle')}</S.SectionTitle>
          <S.Grid>
            {VIDEOS.slice(1).map((v) => (
              <S.VideoCard key={v.videoId + v.date}>
                <YoutubeEmbed videoId={v.videoId} title={v.title} />
                <S.CardInfo>
                  <S.CardTitle>{v.title}</S.CardTitle>
                  <S.CardDate>{v.date}</S.CardDate>
                </S.CardInfo>
              </S.VideoCard>
            ))}
          </S.Grid>
        </>
      )}
    </SubPageLayout>
  );
}
