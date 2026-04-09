import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../../data/navigation';
import { useScrollLock } from '../../hooks/useScrollLock';
import { S } from './MobileNav.style';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: Props) {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const { pathname } = useLocation();

  useScrollLock(isOpen);

  const toggleSection = (path: string) => {
    setOpenSection((prev) => (prev === path ? null : path));
  };

  return (
    <>
      {isOpen && <S.Overlay onClick={onClose} />}

      <S.Drawer $isOpen={isOpen}>
        <S.DrawerHeader>
          <S.DrawerTitle>봉신교회</S.DrawerTitle>
          <S.CloseButton onClick={onClose} aria-label="메뉴 닫기">
            ✕
          </S.CloseButton>
        </S.DrawerHeader>

        <S.Nav>
          {NAV_ITEMS.map((item) => (
            <S.NavSection key={item.path}>
              {item.children.length > 0 ? (
                <>
                  <S.SectionButton onClick={() => toggleSection(item.path)}>
                    <span>{item.label}</span>
                    <S.ArrowIcon>
                      {openSection === item.path ? '▲' : '▼'}
                    </S.ArrowIcon>
                  </S.SectionButton>

                  {openSection === item.path && (
                    <S.ChildList>
                      {item.children.map((child) => (
                        <S.ChildLink
                          key={child.path}
                          to={child.path}
                          onClick={onClose}
                          $isActive={pathname === child.path}
                        >
                          {child.label}
                        </S.ChildLink>
                      ))}
                    </S.ChildList>
                  )}
                </>
              ) : (
                <S.RootLink
                  to={item.path}
                  onClick={onClose}
                  $isActive={pathname === item.path}
                >
                  {item.label}
                </S.RootLink>
              )}
            </S.NavSection>
          ))}
        </S.Nav>
      </S.Drawer>
    </>
  );
}
