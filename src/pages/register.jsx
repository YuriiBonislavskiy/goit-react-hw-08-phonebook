import { useDispatch } from 'react-redux';
// import { lazy } from 'react';

import { authOperations } from 'Redux/auth';
// import { Link } from 'react-router-dom';
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
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Formik } from 'formik';
import * as yup from 'yup';
import { validationsRegisterForm } from 'validations/validationSchema';

// const Login = lazy(() => import('pages/login'));

// const defaultTheme = createTheme();

export const Register = props => {
  const initialValues = {
    fname: '',
    lname: '',
    email: '',
    password: '',
  };
  const schema = yup.object().shape(validationsRegisterForm);

  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
      const { fname, lname, email, password } = values;
      const name = (`${fname} ${lname}`).trim;
    console.log({ name, email, password });
    dispatch(authOperations.register({ name, email, password }));
    resetForm();
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Sign up
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
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="fname"
                      label="First Name"
                      value={values.fname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={touched.fname ? errors.fname : ''}
                      error={touched.fname && Boolean(errors.fname)}
                      margin="dense"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="lname"
                      label="Last Name"
                      value={values.lname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={touched.lname ? errors.lname : ''}
                      error={touched.lname && Boolean(errors.lname)}
                      margin="dense"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>
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
            <Link href="/login" underline="hover">
              Already have an account? Sign in
            </Link>
            {/* </Typography> */}
          </Grid>
        </Grid>
      </Box>
    </Container>
    // </ThemeProvider>
  );
};

export default Register;
