import { useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import ContactsListItem from '../ContactsListItem';
import { phonebookSelectors } from 'Redux/phonebook';

const ContactsList = () => {
  const contacts = useSelector(phonebookSelectors.getItems);
  const filter = useSelector(phonebookSelectors.getFilter);
  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <Grid container component="main" flexDirection="column">
      {visibleContacts.map(({ id, name, number }) => (
        <Grid item xs={12} sm={12} md={11} key={id}>
          <ContactsListItem id={id} name={name} number={number} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ContactsList;
