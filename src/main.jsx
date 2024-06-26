import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/Routes.jsx";
import { Authprovider } from "./Providers/Authprovider.jsx";
import "animate.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Authprovider>
      <RouterProvider router={routes} />
    </Authprovider>
  </React.StrictMode>
);
