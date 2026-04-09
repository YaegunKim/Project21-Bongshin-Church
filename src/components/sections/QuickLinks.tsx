import { colors } from '../../styles/theme';
import { S } from './QuickLinks.style';

const LINKS = [
  { label: '예배 안내', icon: '⛪', path: '/church/worship-info', color: colors.brandGold },
  { label: '새가족 안내', icon: '👋', path: '/church/new-member', color: colors.brandBlue },
  { label: '오시는길', icon: '📍', path: '/church/directions', color: '#22c55e' },
  { label: '봉신TV', icon: '📺', path: '/tv/sunday', color: '#ef4444' },
  { label: '온라인헌금', icon: '💝', path: '/church/offering', color: '#a855f7' },
  { label: '문의하기', icon: '💌', path: '/contact', color: '#f97316' },
];

export default function QuickLinks() {
  return (
    <S.Section>
      <S.Inner>
        <S.Header>
          <S.Label>QUICK LINKS</S.Label>
          <S.Title>바로가기</S.Title>
          <S.Divider />
        </S.Header>

        <S.Grid>
          {LINKS.map((link) => (
            <S.Card key={link.path} to={link.path}>
              <S.IconCircle $color={link.color}>{link.icon}</S.IconCircle>
              <S.CardLabel>{link.label}</S.CardLabel>
            </S.Card>
          ))}
        </S.Grid>
      </S.Inner>
    </S.Section>
  );
}
