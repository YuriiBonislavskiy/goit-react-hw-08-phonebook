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
    <Grid container spacing={0}>
      {visibleContacts.map(({ id, name, number }) => (
        <Grid
          container
          direction="row"
          spacing={0}
          // rowSpacing={0}
          // columnSpacing={0}
          key={id}
          // xs={12}
          // sm={7}
        >
          <ContactsListItem id={id} name={name} number={number} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ContactsList;
