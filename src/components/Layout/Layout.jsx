import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { NavList, StyledLink, Header } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header>
        <nav>
          <NavList>
            <li>
              <StyledLink to="/">Home</StyledLink>
            </li>
            <li>
              <StyledLink to="/movies">Movies</StyledLink>
            </li>
          </NavList>
        </nav>
      </Header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
