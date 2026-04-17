import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { colors } from '../../styles/theme';

const Button = styled.button<{ $active: boolean }>`
  padding: 4px 10px;
  border: 1.5px solid ${({ $active }) => ($active ? colors.brandBlue : '#ccc')};
  border-radius: 4px;
  background: ${({ $active }) => ($active ? colors.brandBlue : 'transparent')};
  color: ${({ $active }) => ($active ? '#fff' : colors.gray600)};
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s;
  &:hover {
    border-color: ${colors.brandBlue};
    color: ${({ $active }) => ($active ? '#fff' : colors.brandBlue)};
  }
`;

const Wrapper = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const current = i18n.language;

  const change = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('lang', lang);
  };

  return (
    <Wrapper>
      <Button $active={current === 'ko'} onClick={() => change('ko')}>
        KO
      </Button>
      <Button $active={current === 'en'} onClick={() => change('en')}>
        EN
      </Button>
    </Wrapper>
  );
}
