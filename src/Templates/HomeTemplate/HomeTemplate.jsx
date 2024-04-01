import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Menu from "../../Components/Menu/Menu";

const HomeTemplate = () => {
  return (
    <div>
      <Header />
      <Menu />
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default HomeTemplate;
