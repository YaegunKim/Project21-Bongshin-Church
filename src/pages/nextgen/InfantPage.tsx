import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import MinistryPage from './MinistryPage';
import { MINISTRY_DATA } from '../../data/ministryData';

export default function InfantPage() {
  const { t } = useTranslation();
  useEffect(() => { document.title = `${t('ministry.infant.label')} | ${t('home.docTitle')}`; }, [t]);
  return <MinistryPage ministry={MINISTRY_DATA.find((m) => m.key === 'infant')!} />;
}
