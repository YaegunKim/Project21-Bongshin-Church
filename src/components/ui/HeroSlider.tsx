import { useTranslation } from 'react-i18next';
import { useHeroSlider } from '../../hooks/useHeroSlider';
import { S } from './HeroSlider.style';

import hero1 from '../../assets/images/pictures/471818824_486189377840686_2632481166972730955_n.jpg';
import hero2 from '../../assets/images/pictures/469315530_471530269306597_7831137403259707477_n.jpg';
import hero3 from '../../assets/images/pictures/pastor_pic01.jpg';

export default function HeroSlider() {
  const { t } = useTranslation();
  const { current, next, prev, goTo } = useHeroSlider(3);

  const SLIDES = [
    { image: hero1, titleKey: 'hero.slide1Title', subtitleKey: 'hero.slide1Subtitle' },
    { image: hero2, titleKey: 'hero.slide2Title', subtitleKey: 'hero.slide2Subtitle' },
    { image: hero3, titleKey: 'hero.slide3Title', subtitleKey: 'hero.slide3Subtitle' },
  ];

  return (
    <S.Container>
      {SLIDES.map((slide, i) => (
        <S.Slide key={i} $isActive={i === current}>
          <S.SlideImg
            src={slide.image}
            alt={t(slide.titleKey)}
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
          <S.SlideOverlay>
            <S.SlideText>
              <S.SlideTitle>{t(slide.titleKey)}</S.SlideTitle>
              <S.SlideSubtitle>{t(slide.subtitleKey)}</S.SlideSubtitle>
            </S.SlideText>
          </S.SlideOverlay>
        </S.Slide>
      ))}

      <S.ArrowButton onClick={prev} $side="left" aria-label={t('hero.prev')}>
        ‹
      </S.ArrowButton>
      <S.ArrowButton onClick={next} $side="right" aria-label={t('hero.next')}>
        ›
      </S.ArrowButton>

      <S.Dots>
        {SLIDES.map((_, i) => (
          <S.Dot
            key={i}
            onClick={() => goTo(i)}
            $isActive={i === current}
            aria-label={t('hero.slideLabel', { number: i + 1 })}
          />
        ))}
      </S.Dots>
    </S.Container>
  );
}
