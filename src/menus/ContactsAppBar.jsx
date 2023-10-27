
import Navigation from 'components/Navigation/Navigation';
import { AppBar, Toolbar, CssBaseline } from '@mui/material';

export default function ContactsAppBar() {
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Navigation/>
      </Toolbar>
    </AppBar>
  );
}
