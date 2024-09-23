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
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState(false);

  const handlerRegisteredUser = () => setUser(true);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <PrivateRoute user={user} />,
      errorElement: <NotFoundPage />,
      children: [{ index: true, element: <HomePage /> }],
    },
    {
      element: <PublicRoute user={user} />,
      errorElement: <NotFoundPage />,
      children: [
        { path: "/login", element: <LoginPage /> },
        {
          path: "/register",
          element: <RegisterPage onRegister={handlerRegisteredUser} />,
        },
        { path: "/forgotPassword", element: <ForgoPasswordPage /> },
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
