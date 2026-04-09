import type { WorshipService } from '../types/content';

export const CHURCH_INFO = {
  name: '봉신교회',
  address: '서울특별시 [구] [동] [번지]',
  phone: '02-000-0000',
  fax: '02-000-0001',
  email: 'bongshin@example.com',
  pastor: '[담임목사 이름]',
  founded: '[설립연도]',
  denomination: '[교단명]',
};

export const WORSHIP_SCHEDULE: WorshipService[] = [
  { name: '주일 1부 예배', time: '오전 8:30', location: '본당' },
  { name: '주일 2부 예배', time: '오전 11:00', location: '본당' },
  { name: '주일 3부 예배', time: '오후 2:00', location: '본당' },
  { name: '수요 예배', time: '오전 10:30', location: '본당' },
  { name: '금요 기도회', time: '오후 7:30', location: '본당' },
  { name: '새벽 기도회', time: '오전 5:30', location: '본당' },
];
