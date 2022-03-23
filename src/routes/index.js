import React from "react";
import { Redirect } from "react-router-dom";
import BlankLayout from "../layout/BlankLayout";
import Home from "../pages/Home/index";
import About from "../pages/About";
import Membership from "../pages/Membership";
import PageNotFound from "../pages/PageNotFound";
import BusRide from "../pages/RequestRide/BusRide";
import BikeRide from "../pages/RequestRide/BikeRide";
const routes = [
  {
    component: BlankLayout,

    routes: [
      // {
      //     name: "Index",
      //     path: "/",
      //     exact: true,
      //     render: () => <Redirect to="/signin" />,
      // },

      {
        name: "Home",
        path: "/",
        exact: true,
        component: Home,
      },
      {
        name: "About us page",
        path: "/about",
        exact: true,
        component: About,
      },
      {
        name: "Become a member page",
        path: "/membership",
        exact: true,
        component: Membership,
      },
      {
        name: "Request ride page",
        path: "/bikeride",
        exact: true,
        component: BikeRide,
      },
      {
        name: "Request ride page",
        path: "/busride",
        exact: true,
        component: BusRide,
      },
      {
        name: "Page not found page",
        path: "*",
        exact: true,
        component: PageNotFound,
      },
    ],
  },
];
export default routes;
