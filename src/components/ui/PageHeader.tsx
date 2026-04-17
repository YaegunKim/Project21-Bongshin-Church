import { useTranslation } from 'react-i18next';
import { S } from './PageHeader.style';

interface Props {
  section: string;
  page: string;
  sectionPath: string;
}

export default function PageHeader({ section, page, sectionPath }: Props) {
  const { t } = useTranslation();
  
  return (
    <S.Wrapper>
      <S.Inner>
        <S.Title>{t(page)}</S.Title>
        <S.Breadcrumb>
          <S.BreadcrumbLink to="/">{t('home.pageTitle')}</S.BreadcrumbLink>
          <span>›</span>
          <S.BreadcrumbLink to={sectionPath}>{t(section)}</S.BreadcrumbLink>
          <span>›</span>
          <S.BreadcrumbCurrent>{t(page)}</S.BreadcrumbCurrent>
        </S.Breadcrumb>
      </S.Inner>
    </S.Wrapper>
  );
}
