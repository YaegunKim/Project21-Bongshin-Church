import { useEffect } from 'react';
import HeroSlider from '../components/ui/HeroSlider';
import WelcomeSection from '../components/sections/WelcomeSection';
import WorshipSchedule from '../components/sections/WorshipSchedule';
import NoticeBoard from '../components/sections/NoticeBoard';
import QuickLinks from '../components/sections/QuickLinks';

export default function HomePage() {
  useEffect(() => {
    document.title = '봉신교회';
  }, []);

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
