import { useHeroSlider } from '../../hooks/useHeroSlider';
import { S } from './HeroSlider.style';

import hero1 from '../../assets/images/pictures/471818824_486189377840686_2632481166972730955_n.jpg';
import hero2 from '../../assets/images/pictures/469315530_471530269306597_7831137403259707477_n.jpg';
import hero3 from '../../assets/images/pictures/pastor_pic01.jpg';

const SLIDES = [
  {
    image: hero1,
    title: '하나님의 사랑이 넘치는',
    subtitle: '봉신교회에 오신 것을 환영합니다',
  },
  {
    image: hero2,
    title: '함께 예배하고',
    subtitle: '함께 성장하는 봉신교회',
  },
  {
    image: hero3,
    title: '세상을 향한 선교와 섬김',
    subtitle: '봉신교회는 이웃을 사랑합니다',
  },
];

export default function HeroSlider() {
  const { current, next, prev, goTo } = useHeroSlider(SLIDES.length);

  return (
    <S.Container>
      {SLIDES.map((slide, i) => (
        <S.Slide key={i} $isActive={i === current}>
          <S.SlideImg
            src={slide.image}
            alt={slide.title}
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
          <S.SlideOverlay>
            <S.SlideText>
              <S.SlideTitle>{slide.title}</S.SlideTitle>
              <S.SlideSubtitle>{slide.subtitle}</S.SlideSubtitle>
            </S.SlideText>
          </S.SlideOverlay>
        </S.Slide>
      ))}

      <S.ArrowButton onClick={prev} $side="left" aria-label="이전">
        ‹
      </S.ArrowButton>
      <S.ArrowButton onClick={next} $side="right" aria-label="다음">
        ›
      </S.ArrowButton>

      <S.Dots>
        {SLIDES.map((_, i) => (
          <S.Dot
            key={i}
            onClick={() => goTo(i)}
            $isActive={i === current}
            aria-label={`슬라이드 ${i + 1}`}
          />
        ))}
      </S.Dots>
    </S.Container>
  );
}
