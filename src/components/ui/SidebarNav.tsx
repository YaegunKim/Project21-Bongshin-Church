import { useLocation } from 'react-router-dom';
import type { NavItem } from '../../types/navigation';
import { S } from './SidebarNav.style';
import { useTranslation } from 'react-i18next';

interface Props {
  navItem: NavItem;
}

export default function SidebarNav({ navItem }: Props) {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  return (
    <S.Aside>
      <S.SectionTitle>{t(navItem.label)}</S.SectionTitle>
      <S.NavList>
        {navItem.children.map((child) => (
          <S.NavLink
            key={child.path}
            to={child.path}
            $isActive={pathname === child.path}
          >
            {t(child.label)}
          </S.NavLink>
        ))}
      </S.NavList>
    </S.Aside>
  );
}
