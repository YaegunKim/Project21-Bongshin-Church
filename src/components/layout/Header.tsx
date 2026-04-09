import { useState } from 'react';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import logoPicRemoveBg from '../../assets/images/logo_pic_removebg.png';
import { S } from './Header.style';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <S.HeaderEl>
        <S.Inner>
          <S.LogoLink to="/">
            <S.LogoImg src={logoPicRemoveBg} alt="봉신교회 로고" />
            <S.LogoTextGroup>
              <S.LogoName>봉신성결교회</S.LogoName>
              <S.LogoSubname>BongShin Holiness Church</S.LogoSubname>
            </S.LogoTextGroup>
          </S.LogoLink>

          <DesktopNav />

          <S.HamburgerButton
            onClick={() => setMobileOpen(true)}
            aria-label="메뉴 열기"
          >
            <S.HamburgerLine />
            <S.HamburgerLine />
            <S.HamburgerLine />
          </S.HamburgerButton>
        </S.Inner>
      </S.HeaderEl>

      <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
