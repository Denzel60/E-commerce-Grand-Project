import { Outlet, Navigate } from "react-router-dom";
import useAuthStore from "../store/AuthStore";

const ProtectedRoutes = () => {
  const setAuth = useAuthStore((state) => state.Auth)
  let auth = { token: setAuth };
  return auth.token ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
