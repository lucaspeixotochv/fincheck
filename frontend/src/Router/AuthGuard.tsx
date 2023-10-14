import { Navigate, Outlet } from "react-router-dom";

interface IAuthGuard {
  isPrivate: boolean;
}

export const AuthGuard = ({ isPrivate }: IAuthGuard) => {
  const signedIn = false;

  if (!signedIn && isPrivate) {
    return <Navigate to="/login" replace />;
  }

  if (signedIn && !isPrivate) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};
