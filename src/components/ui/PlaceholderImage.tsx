import { S } from './PlaceholderImage.style';

interface Props {
  label?: string;
  className?: string;
}

export default function PlaceholderImage({ label = '이미지', className }: Props) {
  return <S.Wrapper className={className}>{label}</S.Wrapper>;
}
