import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import MinistryPage from './MinistryPage';
import { MINISTRY_DATA } from '../../data/ministryData';

export default function ToddlerPage() {
  const { t } = useTranslation();
  useEffect(() => { document.title = `${t('ministry.toddler.label')} | ${t('home.docTitle')}`; }, [t]);
  return <MinistryPage ministry={MINISTRY_DATA.find((m) => m.key === 'toddler')!} />;
}
