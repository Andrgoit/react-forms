import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import {
  HomePage,
  LoginPage,
  RegisterPage,
  ForgoPasswordPage,
  NotFoundPage,
} from "./pages";

import { PrivateRoute, PublicRoute } from "./components";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  const handlerUserRegistration = (user) => setUser(user);

  const handlerUpdatePassword = (newData) => {
    setUser((prev) => ({ ...prev, ...newData }));
  };
  console.log("user App", user);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <PrivateRoute user={user} />,
      errorElement: <NotFoundPage />,
      children: [{ index: true, element: <HomePage user={user} /> }],
    },
    {
      element: <PublicRoute user={user} />,
      errorElement: <NotFoundPage />,
      children: [
        { path: "/login", element: <LoginPage /> },
        {
          path: "/register",
          element: <RegisterPage userRegistration={handlerUserRegistration} />,
        },
        {
          path: "/forgotPassword",
          element: <ForgoPasswordPage updatePassword={handlerUpdatePassword} />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
