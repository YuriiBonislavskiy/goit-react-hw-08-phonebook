import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  Typography,
  Grid,
  Box,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import phonebookOperations from 'Redux/phonebook/phonebookOperations';

export const ContactsListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const onDeleteContact = id => {
    dispatch(phonebookOperations.deleteContacts(id));
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <Grid item md={4}>
        <Typography variant="h7" md={3}>
          {name}
        </Typography>
      </Grid>
      <Grid item md={2}>
        <Typography variant="h7">{number} </Typography>
      </Grid>
      <Grid item md={2}>
        <IconButton
          aria-label="delete"
          size="large"
          onClick={() => onDeleteContact(id)}
        >
          <DeleteIcon />
        </IconButton>
      </Grid>
    </Box>
  );      
};

ContactsListItem.prototype = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactsListItem;
