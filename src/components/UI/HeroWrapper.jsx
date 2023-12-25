import React from "react";

const HeroWrapper = ({ className, children }) => {
  const classes = `${className} h-[100vh] flex w-full`;
  return (
    <section className={classes}>
        {children}
    </section>
    );
};

export default HeroWrapper;
