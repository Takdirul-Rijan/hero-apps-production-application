import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import AllApps from "../pages/AllApps/AllApps";
import AppDetails from "../pages/AllApps/AppDetails";
import MyInstallation from "../pages/MyInstallation/MyInstallation";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: () => fetch("/appsData.json"),
        Component: Home,
      },
      {
        path: "allapps",
        loader: () => fetch("/appsData2.json"),
        Component: AllApps,
      },
      {
        path: "appdetails/:id",
        loader: () => fetch("/appsData2.json"),
        Component: AppDetails,
      },
      {
        path: "/myinstallation",
        loader: async () => {
          await new Promise((r) => setTimeout(r, 500));
          return;
        },
        Component: MyInstallation,
      },
    ],
  },
]);
