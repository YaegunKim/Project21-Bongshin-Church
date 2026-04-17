import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import MinistryPage from './MinistryPage';
import { MINISTRY_DATA } from '../../data/ministryData';

export default function KinderPage() {
  const { t } = useTranslation();
  useEffect(() => { document.title = `${t('ministry.kinder.label')} | ${t('home.docTitle')}`; }, [t]);
  return <MinistryPage ministry={MINISTRY_DATA.find((m) => m.key === 'kinder')!} />;
}
