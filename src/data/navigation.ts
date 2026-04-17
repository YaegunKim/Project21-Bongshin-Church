import type { NavItem } from '../types/navigation';

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'nav.church',
    path: '/church',
    children: [
      { label: 'nav.greeting', path: '/church/greeting' },
      { label: 'nav.history', path: '/church/history' },
      { label: 'nav.staff', path: '/church/staff' },
      { label: 'nav.worshipInfo', path: '/church/worship-info' },
      { label: 'nav.newMember', path: '/church/new-member' },
      { label: 'nav.directions', path: '/church/directions' },
      { label: 'nav.offering', path: '/church/offering' },
    ],
  },
  {
    label: 'nav.tv',
    path: '/tv',
    children: [
      { label: 'nav.sunday', path: '/tv/sunday' },
      { label: 'nav.specialSong', path: '/tv/special-song' },
      { label: 'nav.choir', path: '/tv/choir' },
    ],
  },
  {
    label: 'nav.nextgen',
    path: '/nextgen',
    children: [
      { label: 'nav.infant', path: '/nextgen/infant' },
      { label: 'nav.toddler', path: '/nextgen/toddler' },
      { label: 'nav.kinder', path: '/nextgen/kinder' },
      { label: 'nav.elementary', path: '/nextgen/elementary' },
      { label: 'nav.middle', path: '/nextgen/middle' },
      { label: 'nav.high', path: '/nextgen/high' },
      { label: 'nav.youth', path: '/nextgen/youth' },
    ],
  },
  {
    label: 'nav.missions',
    path: '/missions',
    children: [
      { label: 'nav.missionStatus', path: '/missions/status' },
      { label: 'nav.missionCenter', path: '/missions/center' },
    ],
  },
  {
    label: 'nav.contact',
    path: '/contact',
    children: [],
  },
];
