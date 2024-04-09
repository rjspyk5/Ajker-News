import { createBrowserRouter } from "react-router-dom";
import { Root } from "../layout/Root";
import { Home } from "../pages/Home/Home";
import { About } from "../pages/About/About";
import { Career } from "../pages/Career/Career";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";
import { Login } from "../pages/Login/Login";
import { ForgetPass } from "../pages/Login/ForgetPass";
import { Orders } from "../Component/Orders";
import { PrivateRoute } from "../layout/PrivateRoute";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
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
        element: <Login />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
      {
        path: "/forget",
        element: <ForgetPass />,
      },
      {
        path: "/orders",
        element: (
          <PrivateRoute>
            <Orders />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
