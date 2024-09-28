import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { toast } from "react-toastify";
import "./index.css";
import {
  HomePage,
  LoginPage,
  RegisterPage,
  ForgoPasswordPage,
  NotFoundPage,
} from "./pages";

import { PrivateRoute, PublicRoute } from "./components";

function App() {
  const [user, setUser] = useState(null);

  const handlerUserRegistration = (user) => setUser(user);

  const handlerUpdatePassword = (newData) => {
    setUser((prev) => ({ ...prev, ...newData }));
  };
  console.log("user App", user);

  const handlerUserLogination = (loginingUser) => {
    if (user?.login !== loginingUser.login) {
      toast.error(`User not found. Please Sign up!`, { autoClose: 3000 });
    }
  };

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
        {
          path: "/login",
          element: <LoginPage userLogination={handlerUserLogination} />,
        },
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
