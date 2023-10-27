import ContactForm from 'components/ContactForm';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import { phonebookOperations } from 'Redux/phonebook';
import { phonebookSelectors } from 'Redux/phonebook';
import { authSelectors } from 'Redux/auth';
import { skeletons } from 'skeletons';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(phonebookSelectors.getIsLoading);
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(phonebookOperations.getContacts());
  }, [dispatch]);

  return (
    <Container>
      {isFetchingCurrentUser ? (
        <skeletons.contactsSkeleton />
      ) : (
        <>
          <Typography variant="h4" sx={{ mt: 2, mb: 2 }}>
            Phonebook
          </Typography>
          <>
            <ContactForm />
            <Typography variant="h5" sx={{ mt: 2, mb: 0 }}>
              Contacts
            </Typography>
            <Filter />
            {isLoading && <div>...Loading</div>}
            <ContactList />
          </>
        </>
      )}
    </Container>
  );
};

export default Contacts;
