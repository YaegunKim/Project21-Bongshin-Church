import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { S } from './NotFoundPage.style';

export default function NotFoundPage() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('notFound.docTitle');
  }, [t]);

  return (
    <S.Wrapper>
      <S.Icon>⛪</S.Icon>
      <S.ErrorCode>404</S.ErrorCode>
      <S.Message>{t('notFound.message')}</S.Message>
    </S.Wrapper>
  );
}
