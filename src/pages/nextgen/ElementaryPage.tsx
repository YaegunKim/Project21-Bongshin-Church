import { useEffect } from 'react';
import MinistryPage from './MinistryPage';
import { MINISTRY_DATA } from '../../data/ministryData';

export default function ElementaryPage() {
  useEffect(() => { document.title = '초등부 | 봉신교회'; }, []);
  return <MinistryPage ministry={MINISTRY_DATA.find((m) => m.key === 'elementary')!} />;
}
