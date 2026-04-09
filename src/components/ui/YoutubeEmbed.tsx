import { S } from './YoutubeEmbed.style';

interface Props {
  videoId: string;
  title?: string;
}

export default function YoutubeEmbed({ videoId, title = '동영상' }: Props) {
  return (
    <S.Container>
      <S.Frame
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    </S.Container>
  );
}
