import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {  Grid, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import phonebookOperations from 'Redux/phonebook/phonebookOperations';

export const ContactsListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const onDeleteContact = id => {
    dispatch(phonebookOperations.deleteContacts(id));
  };

  return (
    <>
      <Grid item xs={3.5} sx={{ mt: 0.5 }}>
        {/* <Typography variant="h8" md={3}> */}
        {name}
        {/* </Typography>*/}
      </Grid>
      <Grid item xs={2} sx={{ mt: 0.5 }} >
        {/* <Typography variant="h8">{number} </Typography> */}
        {number}
      </Grid>
      <Grid item xs sx={{ mb: 0.6 }} >
        <Button
          variant="outlined"
          startIcon={<DeleteIcon />}
          onClick={() => onDeleteContact(id)}
          sx={{ pl: 3 }}
        ></Button>

        {/* <IconButton
          aria-label="delete"
          size="large"
          onClick={() => onDeleteContact(id)}
        >
          <DeleteIcon />
        </IconButton> */}
      </Grid>
    </>
    // </Box>
  );
};

ContactsListItem.prototype = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactsListItem;
