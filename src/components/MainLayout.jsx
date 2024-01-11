import {styles} from "../styles";
import React from "react";

import Footer from "./Footer";
import Header from "./Header";

const MainLayout = ({ children, className, padding = false }) => {
  const classes = `${className}`;
  return (
    <div className={classes}>
      <Header />
      <main className={`${padding? `${styles.paddingX}`: ""}`}>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
