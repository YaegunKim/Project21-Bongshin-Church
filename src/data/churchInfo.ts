import type { WorshipService } from '../types/content';

export const CHURCH_INFO = {
  name: '봉신교회',
  address: '50 NB Khizarabad, Sargodha, Pakistan',
  phone: '+92 (301) 530-9441',
  fax: '+92 (301) 530-9441',
  email: 'bongshinholinesschurchofficial@gmail.com',
  pastor: 'Javed Masih',
  founded: '[설립연도]',
  denomination: 'holiness',
};

export const WORSHIP_SCHEDULE: WorshipService[] = [
  { nameKey: 'worshipSchedule.sunday', time: '11:00am', locationKey: 'worshipSchedule.main' },
  { nameKey: 'worshipSchedule.school', time: '4:00pm', locationKey: 'worshipSchedule.main' },
  { nameKey: 'worshipSchedule.wednesdayRevivalService', time: '5:00pm', locationKey: 'worshipSchedule.main' },
  { nameKey: 'worshipSchedule.fridayWomenPrayerMeeting', time: '4:00pm', locationKey: 'worshipSchedule.main' },
  { nameKey: 'worshipSchedule.dawn', time: '5:00am', locationKey: 'worshipSchedule.main' },
];
