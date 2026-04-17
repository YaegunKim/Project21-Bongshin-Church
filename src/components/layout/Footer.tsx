import { useTranslation } from 'react-i18next';
import { CHURCH_INFO, WORSHIP_SCHEDULE } from '../../data/churchInfo';
import { NAV_ITEMS } from '../../data/navigation';
import { S } from './Footer.style';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <S.FooterEl>
      <S.Inner>
        <S.Grid>
          <div>
            <S.LogoRow>
              <S.LogoBadge>
                <S.LogoBadgeText>봉신</S.LogoBadgeText>
              </S.LogoBadge>
              <S.SectionTitle>{CHURCH_INFO.name}</S.SectionTitle>
            </S.LogoRow>
            <S.List>
              <li>📍 {t('footer.location')}</li>
              <li>📞 {CHURCH_INFO.phone}</li>
              <li>📠 {t('footer.fax')}: {CHURCH_INFO.fax}</li>
              <li>✉️ {CHURCH_INFO.email}</li>
              <li>🙏 {t('footer.pastor')}: {CHURCH_INFO.pastor}</li>
            </S.List>
          </div>

          <div>
            <S.SectionTitle>{t('footer.quickLinks')}</S.SectionTitle>
            <S.List>
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <S.NavLink
                    to={
                      item.children.length > 0
                        ? item.children[0].path
                        : item.path
                    }
                  >
                    {t(item.label)}
                  </S.NavLink>
                </li>
              ))}
            </S.List>
          </div>

          <div>
            <S.SectionTitle>{t('footer.worshipTimes')}</S.SectionTitle>
            <S.List>
              {WORSHIP_SCHEDULE.map((s) => (
                <S.ScheduleItem key={s.nameKey}>
                  <span>{t(s.nameKey)}</span>
                  <S.ScheduleTime>{s.time}</S.ScheduleTime>
                </S.ScheduleItem>
              ))}
            </S.List>
          </div>
        </S.Grid>
      </S.Inner>

      <S.Copyright>
        © {new Date().getFullYear()} {CHURCH_INFO.name}. All rights reserved.
      </S.Copyright>
    </S.FooterEl>
  );
}
