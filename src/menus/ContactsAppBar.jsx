import { useSelector } from 'react-redux';
// import Navigation from './Navigation';
// import UserMenu from './UserMenu';
// import { Link } from 'react-router-dom';
import { AppBar, Toolbar, CssBaseline, Link } from '@mui/material';
import UserMenu from 'menus/UserMenu';
// import AuthNav from './AuthNav';
import { authSelectors } from 'Redux/auth';

// const styles = {
//   header: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     borderBottom: '1px solid #2A363B',
//   },
// };

export default function ContactsAppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
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
      </Toolbar>
    </AppBar>
  );
}
