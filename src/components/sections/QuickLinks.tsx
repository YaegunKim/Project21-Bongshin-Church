import { useTranslation } from 'react-i18next';
import { colors } from '../../styles/theme';
import { S } from './QuickLinks.style';

export default function QuickLinks() {
  const { t } = useTranslation();

  const LINKS = [
    { labelKey: 'quickLinks.worshipInfo', icon: '⛪', path: '/church/worship-info', color: colors.brandGold },
    { labelKey: 'quickLinks.newMember', icon: '👋', path: '/church/new-member', color: colors.brandBlue },
    { labelKey: 'quickLinks.directions', icon: '📍', path: '/church/directions', color: '#22c55e' },
    { labelKey: 'quickLinks.tv', icon: '📺', path: '/tv/sunday', color: '#ef4444' },
    { labelKey: 'quickLinks.offering', icon: '💝', path: '/church/offering', color: '#a855f7' },
    { labelKey: 'quickLinks.contact', icon: '💌', path: '/contact', color: '#f97316' },
  ];

  return (
    <S.Section>
      <S.Inner>
        <S.Header>
          <S.Label>{t('quickLinks.label')}</S.Label>
          <S.Title>{t('quickLinks.title')}</S.Title>
          <S.Divider />
        </S.Header>

        <S.Grid>
          {LINKS.map((link) => (
            <S.Card key={link.path} to={link.path}>
              <S.IconCircle $color={link.color}>{link.icon}</S.IconCircle>
              <S.CardLabel>{t(link.labelKey)}</S.CardLabel>
            </S.Card>
          ))}
        </S.Grid>
      </S.Inner>
    </S.Section>
  );
}
