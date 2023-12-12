import {styles} from "../../styles";
import React from "react";

const OurMission = () => {
  const heroSectionClassess = `h-[100vh] flex justify-between items-center w-full`;

  return (
    <section className={heroSectionClassess}>
      <div className="w-2/4 text-left z-50 flex flex-col gap-2 text-slate-800 ">
        <h2 className="text-4xl font-bold leading-">Our Mission</h2>
        <span className="h-px w-52 bg-primary rounded-3xl -mt-1 shadow-glow" />
        <p className="text-slate-700">
          Welcome to the Institute of Skills Development (ISD), where innovation
          meets education. Established in 2015, ISD is dedicated to empowering
          individuals through cutting-edge training programs, fostering personal
          growth, and redefining the traditional institute experience. Join us
          on a journey of skill enhancement and professional development
        </p>
      </div>
      <div className="relative w-2/4">
        <div className="absolute circle1-left bg-slate-300 shadow-lg rounded-full h-[200px] w-[200px] " />
        <div className="absolute circle2-left bg-slate-300 shadow-lg rounded-full h-[250px] w-[250px] " />
        <div className="absolute circle3-left bg-slate-300 shadow-lg rounded-full h-[200px] w-[200px] top-[-212px]" />
      </div>
    </section>
  );
};

export default OurMission;
