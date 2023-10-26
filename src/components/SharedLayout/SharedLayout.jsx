import { Outlet } from 'react-router-dom';
import { PageHeader, NavList, NavItem, StyledLink } from './SharedLayout.styled';
// import { Suspense } from 'react';
// import Loader from 'components/Loader';

export const SharedLayout = () => {
  return (
    <>
      <PageHeader>
        <NavList>
          <NavItem>
            <StyledLink to="/contacts">Phonebook</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="/register">register</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="/login">Login</StyledLink>
          </NavItem>
        </NavList>
      </PageHeader>
      <main>
        {/* <Suspense fallback={<Loader/>}> */}
        <Outlet />
        {/* </Suspense> */}
      </main>
    </>
  );
};

export default SharedLayout;