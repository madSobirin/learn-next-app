import React from "react";
import Header from "../header";
import Footer from "../footer";
const Layout = (p) => {
  const { children } = p;
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
