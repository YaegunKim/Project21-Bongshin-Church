import type { NavItem } from '../types/navigation';

export const NAV_ITEMS: NavItem[] = [
  {
    label: '교회소개',
    path: '/church',
    children: [
      { label: '인사말', path: '/church/greeting' },
      { label: '교회연혁', path: '/church/history' },
      { label: '섬기는분들', path: '/church/staff' },
      { label: '예배안내', path: '/church/worship-info' },
      { label: '새가족안내', path: '/church/new-member' },
      { label: '오시는길', path: '/church/directions' },
      { label: '온라인헌금안내', path: '/church/offering' },
    ],
  },
  {
    label: '봉신TV',
    path: '/tv',
    children: [
      { label: '주일예배', path: '/tv/sunday' },
      { label: '봉헌송/특송', path: '/tv/special-song' },
      { label: '찬양대', path: '/tv/choir' },
    ],
  },
  {
    label: '다음세대',
    path: '/nextgen',
    children: [
      { label: '영아부', path: '/nextgen/infant' },
      { label: '유아부', path: '/nextgen/toddler' },
      { label: '유치부', path: '/nextgen/kinder' },
      { label: '초등부', path: '/nextgen/elementary' },
      { label: '중등부', path: '/nextgen/middle' },
      { label: '고등부', path: '/nextgen/high' },
      { label: '청년공동체', path: '/nextgen/youth' },
    ],
  },
  {
    label: '선교',
    path: '/missions',
    children: [
      { label: '선교현황', path: '/missions/status' },
      { label: '선교센터', path: '/missions/center' },
    ],
  },
  {
    label: '문의',
    path: '/contact',
    children: [],
  },
];
