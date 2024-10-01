import { Outlet, Navigate } from "react-router-dom";

export default function PrivateRoute({ children, user }) {
  // console.log("user- privatRoute", user);

  if (!user) {
    return <Navigate to="/login" />;
  }
  return children ? children : <Outlet />;
}
