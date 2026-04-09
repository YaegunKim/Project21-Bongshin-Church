import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';

// Church pages
import GreetingPage from './pages/church/GreetingPage';
import HistoryPage from './pages/church/HistoryPage';
import StaffPage from './pages/church/StaffPage';
import WorshipInfoPage from './pages/church/WorshipInfoPage';
import NewMemberPage from './pages/church/NewMemberPage';
import DirectionsPage from './pages/church/DirectionsPage';
import OfferingPage from './pages/church/OfferingPage';

// TV pages
import SundayServicePage from './pages/tv/SundayServicePage';
import SpecialSongPage from './pages/tv/SpecialSongPage';
import ChoirPage from './pages/tv/ChoirPage';

// Nextgen pages
import InfantPage from './pages/nextgen/InfantPage';
import ToddlerPage from './pages/nextgen/ToddlerPage';
import KinderPage from './pages/nextgen/KinderPage';
import ElementaryPage from './pages/nextgen/ElementaryPage';
import MiddlePage from './pages/nextgen/MiddlePage';
import HighPage from './pages/nextgen/HighPage';
import YouthPage from './pages/nextgen/YouthPage';

// Mission pages
import MissionStatusPage from './pages/missions/MissionStatusPage';
import MissionCenterPage from './pages/missions/MissionCenterPage';

// Contact
import ContactPage from './pages/ContactPage';

// 404
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />

          {/* 교회소개 */}
          <Route path="/church" element={<Navigate to="/church/greeting" replace />} />
          <Route path="/church/greeting" element={<GreetingPage />} />
          <Route path="/church/history" element={<HistoryPage />} />
          <Route path="/church/staff" element={<StaffPage />} />
          <Route path="/church/worship-info" element={<WorshipInfoPage />} />
          <Route path="/church/new-member" element={<NewMemberPage />} />
          <Route path="/church/directions" element={<DirectionsPage />} />
          <Route path="/church/offering" element={<OfferingPage />} />

          {/* 봉신TV */}
          <Route path="/tv" element={<Navigate to="/tv/sunday" replace />} />
          <Route path="/tv/sunday" element={<SundayServicePage />} />
          <Route path="/tv/special-song" element={<SpecialSongPage />} />
          <Route path="/tv/choir" element={<ChoirPage />} />

          {/* 다음세대 */}
          <Route path="/nextgen" element={<Navigate to="/nextgen/infant" replace />} />
          <Route path="/nextgen/infant" element={<InfantPage />} />
          <Route path="/nextgen/toddler" element={<ToddlerPage />} />
          <Route path="/nextgen/kinder" element={<KinderPage />} />
          <Route path="/nextgen/elementary" element={<ElementaryPage />} />
          <Route path="/nextgen/middle" element={<MiddlePage />} />
          <Route path="/nextgen/high" element={<HighPage />} />
          <Route path="/nextgen/youth" element={<YouthPage />} />

          {/* 선교 */}
          <Route path="/missions" element={<Navigate to="/missions/status" replace />} />
          <Route path="/missions/status" element={<MissionStatusPage />} />
          <Route path="/missions/center" element={<MissionCenterPage />} />

          {/* 문의 */}
          <Route path="/contact" element={<ContactPage />} />

          {/* 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
