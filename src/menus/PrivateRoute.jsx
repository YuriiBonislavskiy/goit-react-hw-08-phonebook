import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { authSelectors } from 'Redux/auth';

export default function PrivateRoute({
  redirectTo = '/login',
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
      isLoggedIn ? <Outlet/> : <Navigate to={redirectTo} />
  );
}
