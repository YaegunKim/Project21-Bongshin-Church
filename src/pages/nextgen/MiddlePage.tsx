import { useEffect } from 'react';
import MinistryPage from './MinistryPage';
import { MINISTRY_DATA } from '../../data/ministryData';

export default function MiddlePage() {
  useEffect(() => { document.title = '중등부 | 봉신교회'; }, []);
  return <MinistryPage ministry={MINISTRY_DATA.find((m) => m.key === 'middle')!} />;
}
