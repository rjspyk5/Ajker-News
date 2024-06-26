import { createBrowserRouter } from "react-router-dom";
import { Root } from "../layout/Root";
import { Home } from "../pages/Home/Home";
import { About } from "../pages/About/About";
import { Career } from "../pages/Career/Career";

import { SignIn } from "../pages/Login/SignIn";
import { SignUp } from "../pages/Login/SignUp";
import { Error } from "../pages/Error/Error";
import { NewsDetail } from "../pages/Home/NewsDetail";
import { PrivateRoute } from "../layout/PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/news.json"),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/career",
        element: (
          <PrivateRoute>
            <Career />
          </PrivateRoute>
        ),
      },

      {
        path: "/login",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/news/:id",
        element: (
          <PrivateRoute>
            <NewsDetail />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
