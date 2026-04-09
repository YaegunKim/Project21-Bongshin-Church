import { useLocation } from 'react-router-dom';
import type { NavItem } from '../../types/navigation';
import { S } from './SidebarNav.style';

interface Props {
  navItem: NavItem;
}

export default function SidebarNav({ navItem }: Props) {
  const { pathname } = useLocation();

  return (
    <S.Aside>
      <S.SectionTitle>{navItem.label}</S.SectionTitle>
      <S.NavList>
        {navItem.children.map((child) => (
          <S.NavLink
            key={child.path}
            to={child.path}
            $isActive={pathname === child.path}
          >
            {child.label}
          </S.NavLink>
        ))}
      </S.NavList>
    </S.Aside>
  );
}
