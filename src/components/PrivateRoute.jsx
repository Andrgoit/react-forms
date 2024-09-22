import { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";

export default function PrivateRoute() {
  // eslint-disable-next-line no-unused-vars
  const [isLogin, setIsLogin] = useState(true);

  if (!isLogin) {
    return <Navigate to="/login" />;
  }
  return (
    <>
      <Outlet />
    </>
  );
}
