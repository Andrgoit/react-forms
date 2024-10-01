import { Outlet, Navigate } from "react-router-dom";

export default function PublicRoute({ children, user }) {
  // console.log("user is logined", user);

  if (user) {
    return <Navigate to="/" />;
  }
  return children ? children : <Outlet />;
}
