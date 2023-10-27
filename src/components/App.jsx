import { useDispatch } from 'react-redux';
import { useEffect, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import ContactsAppBar from 'menus/ContactsAppBar';
import Container from 'components/Container';
import PrivateRoute from 'menus/PrivateRoute';
import PublicRoute from 'menus/PublicRoute';
import { authOperations } from 'Redux/auth';

// import { skeletons } from 'skeletons';

const Register = lazy(() => import('pages/register'));
const Login = lazy(() => import('pages/login'));
const Contacts = lazy(() => import('pages/phoneBook'));

const App = () => {
  const dispatch = useDispatch();
  // const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <ContactsAppBar />
      {/* {!isFetchingCurrentUser && ( */}
      <Suspense>
        <Routes>
          <Route path="/">
            <Route element={<PublicRoute redirectTo="/contacts" restricted />}>
              <Route path="/register" element={<Register />} />
            </Route>
            <Route element={<PublicRoute redirectTo="/contacts" restricted />}>
              <Route path="/login" element={<Login />} />
            </Route>
            <Route element={<PrivateRoute redirectTo="/login" />}>
              <Route path="/contacts" element={<Contacts />} />
            </Route>
          </Route>
        </Routes>
        </Suspense>
      {/* )} */}
    </Container>
  );
};
export default App;
