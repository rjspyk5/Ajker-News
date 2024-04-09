import { createBrowserRouter } from "react-router-dom";
import { Root } from "../layout/Root";
import { Home } from "../pages/Home/Home";
import { About } from "../pages/About/About";
import { Career } from "../pages/Career/Career";

import { SignIn } from "../pages/Login/SignIn";
import { SignUp } from "../pages/Login/SignUp";
import { Error } from "../pages/Error/Error";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("categories.json"),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/career",
        element: <Career />,
      },

      {
        path: "/login",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);
