import { useDispatch, useSelector } from 'react-redux';
import { authOperations } from 'Redux/auth';
import {
  CssBaseline,
  Container,
  Typography,
  Grid,
  Box,
  TextField,
  Button,
  Link,
} from '@mui/material';

import { Formik } from 'formik';
import * as yup from 'yup';
import { validationsLoginForm } from 'validations/validationSchema';
import { authSelectors } from 'Redux/auth';
// import { skeletons } from 'skeletons';

// const Register = lazy(() => import('pages/register'));

// const defaultTheme = createTheme();

export const Login = props => {
  const initialValues = {
    email: '',
    password: '',
  };
  const schema = yup.object().shape(validationsLoginForm);

  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const { email, password } = values;
    dispatch(authOperations.logIn({ email, password }));
    resetForm();
  };

  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  return (
    // <ThemeProvider theme={defaultTheme}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      {!isFetchingCurrentUser && (
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={handleSubmit}
          >
            {props => {
              const {
                values,
                touched,
                errors,
                handleChange,
                handleBlur,
                handleSubmit,
              } = props;
              return (
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={1} sx={{ mt: 2, mb: 2 }}>
                    <Grid item xs={12}>
                      <TextField
                        id="email"
                        label="Email"
                        type="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={touched.email ? errors.email : ''}
                        error={touched.email && Boolean(errors.email)}
                        margin="dense"
                        variant="outlined"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        id="password"
                        label="Password"
                        type="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={touched.password ? errors.password : ''}
                        error={touched.password && Boolean(errors.password)}
                        margin="dense"
                        variant="outlined"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 2 }}
                        xs={12}
                        sm={12}
                      >
                        Sign Up
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              );
            }}
          </Formik>

          <Grid container justifyContent="flex-end">
            <Grid item>
              {/* <Typography component="h5" variant="inherit" color="inherit"> */}
              <Link href="/register" underline="hover">
                Don't have an account? Sign Up
              </Link>
              {/* </Typography> */}
            </Grid>
          </Grid>
        </Box>
      )}
    </Container>
    // </ThemeProvider>
  );
};

export default Login;

// Don't have an account? Sign Up
