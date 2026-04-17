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
  { nameKey: 'worshipSchedule.sunday1', time: '오전 8:30', locationKey: 'worshipSchedule.main' },
  { nameKey: 'worshipSchedule.sunday2', time: '오전 11:00', locationKey: 'worshipSchedule.main' },
  { nameKey: 'worshipSchedule.sunday3', time: '오후 2:00', locationKey: 'worshipSchedule.main' },
  { nameKey: 'worshipSchedule.wednesday', time: '오전 10:30', locationKey: 'worshipSchedule.main' },
  { nameKey: 'worshipSchedule.friday', time: '오후 7:30', locationKey: 'worshipSchedule.main' },
  { nameKey: 'worshipSchedule.dawn', time: '오전 5:30', locationKey: 'worshipSchedule.main' },
];
