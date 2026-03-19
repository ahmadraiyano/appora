import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Apps from "../pages/Apps/Apps";
import AppDetails from "../pages/AppDetails/AppDetails";
import Installation from "../pages/Installation/Installation";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("/appData.json"),
        HydrateFallback: () => (
          <div className="flex justify-center h-screen items-center">
            <span className="loading bg-base-300 w-72 loading-spinner loading-xl"></span>
          </div>
        ),
        Component: Home,
      },
      {
        path: "/apps",
        loader: () => fetch("/appData.json"),
        HydrateFallback: () => (
          <div className="flex justify-center h-screen items-center">
            <span className="loading bg-base-300 w-72 loading-spinner loading-xl"></span>
          </div>
        ),
        Component: Apps,
      },
      {
        path: '/apps/details/:appsId',
        loader: () => fetch("/appData.json"),
        HydrateFallback: () => (
          <div className="flex justify-center h-screen items-center">
            <span className="loading bg-base-300 w-72 loading-spinner loading-xl"></span>
          </div>
        ),
        Component: AppDetails
      },
      {
        path: '/installation',
        loader: () => fetch("/appData.json"),
        HydrateFallback: () => (
          <div className="flex justify-center h-screen items-center">
            <span className="loading bg-base-300 w-72 loading-spinner loading-xl"></span>
          </div>
        ),
        Component: Installation
      },
      {
        path: "*",
        Component: ErrorPage,
      },
    ],
  },
]);

export default router;
