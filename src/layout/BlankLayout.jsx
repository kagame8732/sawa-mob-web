import React from "react";
import { renderRoutes } from "react-router-config";
import Footer from "./Footer";
import Navbar from "./Navbar";

function BlankLayout({ route }) {
  return (
    <div className="relative">
      <Navbar></Navbar>
      {renderRoutes(route.routes)}
      <Footer />
    </div>
  );
}

export default BlankLayout;
