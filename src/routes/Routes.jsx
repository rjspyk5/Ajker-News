import { createBrowserRouter } from "react-router-dom";
import { Root } from "../layout/Root";
import { Home } from "../pages/Home/Home";
import { About } from "../pages/About/About";
import { Career } from "../pages/Career/Career";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";

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
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
