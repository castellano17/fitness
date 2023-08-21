import React from "react";
import { ActivitiesTimeline } from "../components/ui/TimeLineAbout";

const About = () => {
  return (
    <div>
      <div className="text-center my-4 ">
        <h1 className="text-3xl p-4">
          Fitne<span className="text-app-primary font-bold">zz</span>
        </h1>
        <p className=" text-xl p-4">
          Somos una empresa que ofrece programas de salud integral{" "}
        </p>
        <h2 className="font-Poppins text-app-primary">Nuestros servicios</h2>
      </div>
      <div className="flex justify-center items-center">
        <ActivitiesTimeline />
      </div>
    </div>
  );
};

export default About;
