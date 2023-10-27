import { useDispatch, useSelector } from 'react-redux';
import { useEffect, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import ContactsAppBar from 'menus/ContactsAppBar';
import Container from 'components/Container';
import PrivateRoute from 'menus/PrivateRoute';
import PublicRoute from 'menus/PublicRoute';
import { authOperations, authSelectors } from 'Redux/auth';

const Register = lazy(() => import('pages/register'));
const Login = lazy(() => import('pages/login'));
const Contacts = lazy(() => import('pages/phoneBook'));

const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      {isFetchingCurrentUser ? (
        <h1>Показываем React Skeleton</h1>
      ) : (
        <>
          <ContactsAppBar />
          <Suspense fallback={<p>Загружаем...</p>}>
            <Routes>
              <Route path="/">
                <Route
                  element={<PublicRoute redirectTo="/contacts" restricted />}
                >
                  <Route path="/register" element={<Register />} />
                </Route>
                <Route
                  element={<PublicRoute redirectTo="/contacts" restricted />}
                >
                  <Route path="/login" element={<Login />} />
                </Route>
                <Route
                  element={<PrivateRoute redirectTo="/login" />}
                >
                  <Route path="/contacts" element={<Contacts />} />
                </Route>
              </Route>
            </Routes>
          </Suspense>
        </>
      )}
    </Container>
  );
};
export default App;
