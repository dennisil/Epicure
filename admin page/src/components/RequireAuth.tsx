import { useLocation, Navigate, Outlet } from "react-router-dom";

export const RequireAuth = (props: { user: any }) => {
  const location = useLocation();

  return props.user.userName ? (
    <Outlet></Outlet>
  ) : (
    <Navigate to="/" replace state={{ from: location }}></Navigate>
  );
};
