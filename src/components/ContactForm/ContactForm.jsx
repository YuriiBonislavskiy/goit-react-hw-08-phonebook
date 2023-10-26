import { useDispatch, useSelector } from 'react-redux';
import { CssBaseline, Grid, Box, TextField, Button } from '@mui/material';
import { Formik } from 'formik';
import * as yup from 'yup';
// import { MuiTelInput } from 'mui-tel-input';
import { phonebookOperations } from 'Redux/phonebook';
import { validationsContactForm } from 'validations/validationSchema';
import { phonebookSelectors } from 'Redux/phonebook';

export const ContactForm = props => {
  const initialValues = {
    fname: '',
    lname: '',
    number: '',
  };
  const schema = yup.object().shape(validationsContactForm);

  const dispatch = useDispatch();
  const contacts = useSelector(phonebookSelectors.getItems);

  const handleSubmit = (values, { resetForm }) => {
    const { fname, lname, number } = values;
    const name = `${fname} ${lname}`;

    console.log(name, number);
    if (contacts.findIndex(contact => contact.name === name) >= 0) {
      alert(`${name} is already in contacts`);
      return;
    }
    const newContact = {
      name: name,
      number: number,
    };

    dispatch(phonebookOperations.addContacts(newContact));

    resetForm();
  };

  return (
    <Grid container component="main">
      <CssBaseline />
      <Grid item xs={12} sm={8} md={6} elevation={6} square="true">
        <Box
          sx={{
            pl: 2,
            pr: 2,
            ml: '10',
            left: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          border={1}
        >
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
                  <Grid container spacing={1} sx={{ mt: 1, mb: 3 }}>
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
                        id="number"
                        label="Phone number"
                        value={values.number}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={touched.number ? errors.number : ''}
                        error={touched.number && Boolean(errors.number)}
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
                        Add contact
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              );
            }}
          </Formik>
        </Box>
      </Grid>
    </Grid>
    // </ThemeProvider>
  );
};

export default ContactForm;
