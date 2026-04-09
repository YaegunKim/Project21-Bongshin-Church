import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { S } from './Layout.style';

export default function Layout() {
  return (
    <>
      <Header />
      <S.Main>
        <Outlet />
      </S.Main>
      <Footer />
    </>
  );
}
