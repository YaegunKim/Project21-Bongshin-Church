import { useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../../data/navigation';
import PageHeader from './PageHeader';
import SidebarNav from './SidebarNav';
import { S } from './SubPageLayout.style';

interface Props {
  children: React.ReactNode;
}

export default function SubPageLayout({ children }: Props) {
  const { pathname } = useLocation();

  const navItem =
    NAV_ITEMS.find((item) => item.path !== '/' && pathname.startsWith(item.path)) ??
    NAV_ITEMS[0];

  const currentChild = navItem.children.find((c) => c.path === pathname);
  const pageLabel = currentChild?.label ?? navItem.label;

  return (
    <S.Outer>
      <PageHeader
        section={navItem.label}
        page={pageLabel}
        sectionPath={navItem.children[0]?.path ?? navItem.path}
      />

      <S.Inner>
        <S.ContentRow>
          {navItem.children.length > 0 && <SidebarNav navItem={navItem} />}
          <S.Content>{children}</S.Content>
        </S.ContentRow>
      </S.Inner>
    </S.Outer>
  );
}
