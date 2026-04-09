import { useEffect } from 'react';
import MinistryPage from './MinistryPage';
import { MINISTRY_DATA } from '../../data/ministryData';

export default function HighPage() {
  useEffect(() => { document.title = '고등부 | 봉신교회'; }, []);
  return <MinistryPage ministry={MINISTRY_DATA.find((m) => m.key === 'high')!} />;
}
