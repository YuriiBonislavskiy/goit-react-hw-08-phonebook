import ContactForm from 'components/ContactForm';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import {phonebookOperations} from 'Redux/phonebook';
import { phonebookSelectors } from 'Redux/phonebook';

const styles = {
  container: {
    paddingLeft: '20px',
  },
  h1: {
    marginBottom: '4px',
  },
};

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(phonebookSelectors.getIsLoading);

  useEffect(() => {
    dispatch(phonebookOperations.getContacts());
  }, [dispatch]);

  return (
    <div style={styles.container}>
      <h1 style={styles.h1}>Phonebook</h1>
      <div>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        {isLoading && <div>...Loading</div>}
        <ContactList />
      </div>
    </div>
  );
};

export default Contacts;
