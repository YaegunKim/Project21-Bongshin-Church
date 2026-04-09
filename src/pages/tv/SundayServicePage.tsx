import { useEffect } from 'react';
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
  useEffect(() => {
    document.title = '주일예배 | 봉신교회';
  }, []);

  return (
    <SubPageLayout>
      <S.PageTitle>주일예배</S.PageTitle>

      <S.FeaturedBlock>
        <YoutubeEmbed videoId={VIDEOS[0].videoId} title={VIDEOS[0].title} />
        <S.VideoTitle>{VIDEOS[0].title}</S.VideoTitle>
        <S.VideoDate>{VIDEOS[0].date}</S.VideoDate>
      </S.FeaturedBlock>

      {VIDEOS.length > 1 && (
        <>
          <S.SectionTitle>이전 예배</S.SectionTitle>
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
