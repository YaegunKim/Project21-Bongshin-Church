import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import SubPageLayout from '../components/ui/SubPageLayout';
import { CHURCH_INFO } from '../data/churchInfo';
import { S } from './ContactPage.style';

export default function ContactPage() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('contact.docTitle');
  }, [t]);

  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `${t('contact.emailBodyName')}: ${form.name}\n${t('contact.emailBodyEmail')}: ${form.email}\n\n${form.message}`;
    window.location.href = `mailto:${CHURCH_INFO.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <SubPageLayout>
      <S.PageTitle>{t('contact.pageTitle')}</S.PageTitle>

      <S.Grid>
        <div>
          <S.InfoTitle>{t('contact.churchContact')}</S.InfoTitle>
          <S.InfoList>
            <S.InfoItem>
              <S.InfoIcon>📍</S.InfoIcon>
              <div>
                <S.InfoLabel>{t('contact.addressLabel')}</S.InfoLabel>
                <S.InfoValue>{CHURCH_INFO.address}</S.InfoValue>
              </div>
            </S.InfoItem>
            <S.InfoItem>
              <S.InfoIcon>📞</S.InfoIcon>
              <div>
                <S.InfoLabel>{t('contact.phoneLabel')}</S.InfoLabel>
                <S.InfoValue>{CHURCH_INFO.phone}</S.InfoValue>
              </div>
            </S.InfoItem>
            <S.InfoItem>
              <S.InfoIcon>✉️</S.InfoIcon>
              <div>
                <S.InfoLabel>{t('contact.emailLabel')}</S.InfoLabel>
                <S.InfoValue>{CHURCH_INFO.email}</S.InfoValue>
              </div>
            </S.InfoItem>
          </S.InfoList>
        </div>

        <S.Form onSubmit={handleSubmit}>
          <div>
            <S.FieldLabel>{t('contact.nameLabel')}</S.FieldLabel>
            <S.Input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder={t('contact.namePlaceholder')}
            />
          </div>
          <div>
            <S.FieldLabel>{t('contact.emailFieldLabel')}</S.FieldLabel>
            <S.Input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder={t('contact.emailPlaceholder')}
            />
          </div>
          <div>
            <S.FieldLabel>{t('contact.subjectLabel')}</S.FieldLabel>
            <S.Input
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
              placeholder={t('contact.subjectPlaceholder')}
            />
          </div>
          <div>
            <S.FieldLabel>{t('contact.messageLabel')}</S.FieldLabel>
            <S.Textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder={t('contact.messagePlaceholder')}
            />
          </div>
          <S.SubmitButton type="submit">{t('contact.submitButton')}</S.SubmitButton>
        </S.Form>
      </S.Grid>
    </SubPageLayout>
  );
}
