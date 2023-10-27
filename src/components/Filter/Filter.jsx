import { useDispatch, useSelector } from 'react-redux';
import { Grid, TextField } from '@mui/material';
import { setFilter } from '../../Redux/phonebook/phonebookSlice';
import { phonebookSelectors } from 'Redux/phonebook';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(phonebookSelectors.getFilter);

  const onChangeFilter = event => {
    const { value } = event.target;
    dispatch(setFilter(value));
  };

  return (
    <Grid container spacing={1} sx={{ mt: 1, mb: 1 }}>
      <Grid item xs={12} sm={8} md={6} elevation={6} square="true">
        <TextField
          // className={css.filter}
          label="Find contacts by name"
          type="text"
          name="contactsFilter"
          onChange={onChangeFilter}
          value={filter}
          variant="standard"
          fullWidth
        />
      </Grid>
    </Grid>
  );
};

export default Filter;
