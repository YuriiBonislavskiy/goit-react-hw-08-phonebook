import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from '@mui/material';
import { authSelectors } from 'Redux/auth';
import UserMenu from 'menus/UserMenu';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
        {isLoggedIn && (
          <Link
            href="contacts"
            variant="h5"
            color="inherit"
            underline="hover"
          >
            Contacts
          </Link>
        )}
        <UserMenu />
    </>
  );
};

export default Navigation;
