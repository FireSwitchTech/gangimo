import React from "react";
import NavBar from "../Components/NavBar";

const Layout = (props) => {
  return (
    <>
      <NavBar />
      {props.children}
    </>
  );
};

export default Layout;
