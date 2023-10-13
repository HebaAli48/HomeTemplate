/* eslint-disable react/prop-types */
import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className=" container flex flex-col">
      <Header />
      <main className="min-h-[80vh] flex flex-col bg-back-color">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
