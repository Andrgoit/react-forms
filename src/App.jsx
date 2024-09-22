import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import {
  HomePage,
  LoginPage,
  RegisterPage,
  ForgoPasswordPage,
  NotFoundPage,
} from "./pages";

import { PrivateRoute } from "./components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute />,
    errorElement: <NotFoundPage />,
    children: [{ index: true, element: <HomePage /> }],
  },
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
  { path: "/forgotPassword", element: <ForgoPasswordPage /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

// <div className="flex h-screen w-full flex-col items-center justify-center gap-5 bg-gradient-to-br from-[#1CB5E0] to-[#000851]">
//   <h1
//     className="text-4xl font-bold text-white"
//     style={{ textShadow: "2px 2px 4px black" }}
//   >
//     Vite + React + Tailwind
//   </h1>
//   <a href="https://github.com/Andrgoit/react-template" target="_blank">
//     <img src={github} alt="github icon" />
//   </a>
// </div>
