/* eslint-disable react/prop-types */
import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router-dom";

const AppLayout = () => {
  const { pathname } = useLocation();
  return (
    <div className=" container flex flex-col">
      {pathname !== "/sign-in" && pathname !== "/sign-up" && <Header />}
      <main className="min-h-[80vh] flex flex-col bg-back-color">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
