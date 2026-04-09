export interface StaffMember {
  name: string;
  role: string;
  department: string;
  photo?: string;
}

export interface HistoryEntry {
  year: string;
  month?: string;
  description: string;
}

export interface Missionary {
  name: string;
  field: string;
  organization: string;
  since: string;
  photo?: string;
}

export interface Ministry {
  key: string;
  label: string;
  ageRange: string;
  meetingTime: string;
  leader: string;
  description: string;
}

export interface WorshipService {
  name: string;
  time: string;
  location: string;
}

export interface VideoItem {
  title: string;
  videoId: string;
  date: string;
}
