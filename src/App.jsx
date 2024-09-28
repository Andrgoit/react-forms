import { useEffect, useState } from "react";
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
  const [localUsers, setLocalUsers] = useState();
  console.log("user App", user);

  const savedUsers = localStorage.getItem("registeredUsers");
  const loginedUser = localStorage.getItem("loginedUser");

  useEffect(() => {
    if (savedUsers) {
      try {
        const parsedUsers = JSON.parse(savedUsers);
        console.log("parsedUsers", parsedUsers);
        setLocalUsers(parsedUsers);
      } catch (error) {
        console.log("parse error", error);
      }
    }
  }, [savedUsers]);

  useEffect(() => {
    if (loginedUser) {
      try {
        const parsedUser = JSON.parse(loginedUser);
        console.log("parsedUser", parsedUser);
        setUser(parsedUser);
      } catch (error) {
        console.log("parse error", error);
      }
    }
  }, [loginedUser]);

  useEffect(() => {
    if (user) {
      localStorage.setItem("loginedUser", JSON.stringify(user));
    }
  }, [user]);

  const handlerUserRegistration = (user) => {
    console.log("user", user);
    setUser(user);

    if (savedUsers) {
      try {
        const parsedUsers = JSON.parse(savedUsers);
        const addUser = JSON.stringify([...parsedUsers, user]);
        localStorage.setItem("registeredUsers", addUser);
        return;
      } catch (error) {
        console.log("error", error);
      }
    }
    const newUser = JSON.stringify([user]);
    localStorage.setItem("registeredUsers", newUser);
    return;
  };

  const handlerUpdatePassword = (newData) => {
    setUser((prev) => ({ ...prev, ...newData }));
  };

  const handlerUserLogination = (loginingUser) => {
    const { login, password } = loginingUser;

    if (localUsers) {
      const existUser = localUsers.find((user) => user.login === login);

      if (!existUser) {
        return toast.error(`Login or password incorrect!`, { autoClose: 3000 });
      } else if (existUser.password === password) {
        return setUser(existUser);
      }
      return toast.error(`Login or password incorrect!`, { autoClose: 3000 });
    }
    return toast.error(`Login or password incorrect!`, { autoClose: 3000 });
  };

  const handlerLogoutUser = () => {
    setUser(null);
    localStorage.removeItem("loginedUser");
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <PrivateRoute user={user} />,
      errorElement: <NotFoundPage />,
      children: [
        {
          index: true,
          element: (
            <HomePage user={user} handlerLogoutUser={handlerLogoutUser} />
          ),
        },
      ],
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
          element: (
            <RegisterPage
              localUsers={localUsers}
              userRegistration={handlerUserRegistration}
            />
          ),
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
