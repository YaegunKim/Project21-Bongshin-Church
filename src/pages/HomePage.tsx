import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import HeroSlider from '../components/ui/HeroSlider';
import WelcomeSection from '../components/sections/WelcomeSection';
import WorshipSchedule from '../components/sections/WorshipSchedule';
import NoticeBoard from '../components/sections/NoticeBoard';
import QuickLinks from '../components/sections/QuickLinks';

export default function HomePage() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('home.docTitle');
  }, [t]);

  return (
    <div>
      <HeroSlider />
      <WelcomeSection />
      <WorshipSchedule />
      <NoticeBoard />
      <QuickLinks />
    </div>
  );
}
