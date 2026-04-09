import { useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../../data/navigation';
import { S } from './DesktopNav.style';

export default function DesktopNav() {
  const { pathname } = useLocation();

  return (
    <S.Nav>
      {NAV_ITEMS.map((item) => {
        const isActive = pathname.startsWith(item.path) && item.path !== '/';
        return (
          <S.NavItem key={item.path}>
            <S.NavLink
              to={item.children.length > 0 ? item.children[0].path : item.path}
              $isActive={isActive}
            >
              {item.label}
            </S.NavLink>

            {item.children.length > 0 && (
              <S.Dropdown>
                {item.children.map((child) => (
                  <S.DropdownLink
                    key={child.path}
                    to={child.path}
                    $isActive={pathname === child.path}
                  >
                    {child.label}
                  </S.DropdownLink>
                ))}
              </S.Dropdown>
            )}
          </S.NavItem>
        );
      })}
    </S.Nav>
  );
}
