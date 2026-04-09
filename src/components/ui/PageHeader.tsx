import { S } from './PageHeader.style';

interface Props {
  section: string;
  page: string;
  sectionPath: string;
}

export default function PageHeader({ section, page, sectionPath }: Props) {
  return (
    <S.Wrapper>
      <S.Inner>
        <S.Title>{page}</S.Title>
        <S.Breadcrumb>
          <S.BreadcrumbLink to="/">홈</S.BreadcrumbLink>
          <span>›</span>
          <S.BreadcrumbLink to={sectionPath}>{section}</S.BreadcrumbLink>
          <span>›</span>
          <S.BreadcrumbCurrent>{page}</S.BreadcrumbCurrent>
        </S.Breadcrumb>
      </S.Inner>
    </S.Wrapper>
  );
}
