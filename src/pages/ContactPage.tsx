import { useEffect, useState } from 'react';
import SubPageLayout from '../components/ui/SubPageLayout';
import { CHURCH_INFO } from '../data/churchInfo';
import { S } from './ContactPage.style';

export default function ContactPage() {
  useEffect(() => {
    document.title = '문의 | 봉신교회';
  }, []);

  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `이름: ${form.name}\n이메일: ${form.email}\n\n${form.message}`;
    window.location.href = `mailto:${CHURCH_INFO.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <SubPageLayout>
      <S.PageTitle>문의하기</S.PageTitle>

      <S.Grid>
        <div>
          <S.InfoTitle>교회 연락처</S.InfoTitle>
          <S.InfoList>
            <S.InfoItem>
              <S.InfoIcon>📍</S.InfoIcon>
              <div>
                <S.InfoLabel>주소</S.InfoLabel>
                <S.InfoValue>{CHURCH_INFO.address}</S.InfoValue>
              </div>
            </S.InfoItem>
            <S.InfoItem>
              <S.InfoIcon>📞</S.InfoIcon>
              <div>
                <S.InfoLabel>전화</S.InfoLabel>
                <S.InfoValue>{CHURCH_INFO.phone}</S.InfoValue>
              </div>
            </S.InfoItem>
            <S.InfoItem>
              <S.InfoIcon>✉️</S.InfoIcon>
              <div>
                <S.InfoLabel>이메일</S.InfoLabel>
                <S.InfoValue>{CHURCH_INFO.email}</S.InfoValue>
              </div>
            </S.InfoItem>
          </S.InfoList>
        </div>

        <S.Form onSubmit={handleSubmit}>
          <div>
            <S.FieldLabel>이름</S.FieldLabel>
            <S.Input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="이름을 입력하세요"
            />
          </div>
          <div>
            <S.FieldLabel>이메일</S.FieldLabel>
            <S.Input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="이메일 주소를 입력하세요"
            />
          </div>
          <div>
            <S.FieldLabel>제목</S.FieldLabel>
            <S.Input
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
              placeholder="제목을 입력하세요"
            />
          </div>
          <div>
            <S.FieldLabel>내용</S.FieldLabel>
            <S.Textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="문의 내용을 입력하세요"
            />
          </div>
          <S.SubmitButton type="submit">문의 보내기</S.SubmitButton>
        </S.Form>
      </S.Grid>
    </SubPageLayout>
  );
}
