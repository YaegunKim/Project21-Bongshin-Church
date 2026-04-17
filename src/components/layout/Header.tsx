import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import LanguageSwitcher from '../ui/LanguageSwitcher';
import logoPicRemoveBg from '../../assets/images/logo_pic_removebg.png';
import { S } from './Header.style';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <S.HeaderEl>
        <S.Inner>
          <S.LogoLink to="/">
            <S.LogoImg src={logoPicRemoveBg} alt={t('header.logoAlt')} />
            <S.LogoTextGroup>
              <S.LogoName>{t('header.churchName')}</S.LogoName>
              <S.LogoSubname>BongShin Holiness Church</S.LogoSubname>
            </S.LogoTextGroup>
          </S.LogoLink>

          <DesktopNav />

          <S.RightGroup>
            <LanguageSwitcher />
            <S.HamburgerButton
              onClick={() => setMobileOpen(true)}
              aria-label={t('header.menuOpen')}
            >
              <S.HamburgerLine />
              <S.HamburgerLine />
              <S.HamburgerLine />
            </S.HamburgerButton>
          </S.RightGroup>
        </S.Inner>
      </S.HeaderEl>

      <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
