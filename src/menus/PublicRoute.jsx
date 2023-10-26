import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { authSelectors } from 'Redux/auth';


export default function PublicRoute({
  restricted = false,
  redirectTo = '/contacts',
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted
  return shouldRedirect ? <Navigate to={redirectTo} /> : <Outlet />;
}
