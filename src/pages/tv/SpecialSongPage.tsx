import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import SubPageLayout from '../../components/ui/SubPageLayout';
import YoutubeEmbed from '../../components/ui/YoutubeEmbed';
import type { VideoItem } from '../../types/content';
import { S } from './SpecialSongPage.style';

const VIDEOS: VideoItem[] = [
  { title: '봉헌송 - [제목]', videoId: 'dQw4w9WgXcQ', date: '2026-04-06' },
  { title: '특송 - [제목]', videoId: 'dQw4w9WgXcQ', date: '2026-03-30' },
];

export default function SpecialSongPage() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('specialSong.docTitle');
  }, [t]);

  return (
    <SubPageLayout>
      <S.PageTitle>{t('specialSong.pageTitle')}</S.PageTitle>
      <S.Grid>
        {VIDEOS.map((v) => (
          <S.VideoCard key={v.videoId + v.date}>
            <YoutubeEmbed videoId={v.videoId} title={v.title} />
            <S.CardInfo>
              <S.CardTitle>{v.title}</S.CardTitle>
              <S.CardDate>{v.date}</S.CardDate>
            </S.CardInfo>
          </S.VideoCard>
        ))}
      </S.Grid>
    </SubPageLayout>
  );
}
