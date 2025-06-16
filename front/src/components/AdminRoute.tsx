import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { JSX } from "react";
import { ROUTES } from "../router/Routes";

export const AdminRoute = ({ children }: { children: JSX.Element }) => {
  const { token, isAdmin } = useAuthContext();

  if (!token || !isAdmin) {
    return <Navigate to={ROUTES.HOME} replace />;
  }

  return children;
};
