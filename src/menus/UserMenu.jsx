import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from 'Redux/auth';
import { Grid, Link, Button, Typography } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(authSelectors.getUserEmail);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Grid container justifyContent="flex-end" alignItems="center">
      <Grid item sx={{ mr: 2 }}>
        {isLoggedIn ? (
          <Typography variant="h7" color="inherit">
            {email}
          </Typography>
        ) : (
          <Link href="/register" variant="h7" color="inherit" underline="hover">
            Register
          </Link>
        )}
      </Grid>
      <Grid item>
        {isLoggedIn ? (
          <Button
            component="button"
            variant="contained"
            onClick={() => dispatch(authOperations.logOut())}
            endIcon={<LogoutIcon />}
          >
            LogOut
          </Button>
        ) : (
          <Link href="/login" variant="h7" color="inherit" underline="hover">
            LogIn
          </Link>
        )}
      </Grid>
    </Grid>
  );
}
