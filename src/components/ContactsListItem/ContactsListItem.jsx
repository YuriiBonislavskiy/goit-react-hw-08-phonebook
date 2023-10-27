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
    // <Box
    //   sx={{
    //     display: 'flex',
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     p: 0,
    //     m: 0,
    //   }}
    // >
    <>
      <Grid item xs={4}>
        {/* <Typography variant="h8" md={3}> */}
        {name}
        {/* </Typography>*/}
      </Grid>
      <Grid item xs={2}>
        {/* <Typography variant="h8">{number} </Typography> */}
        {number}
      </Grid>
      <Grid item xs>
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
