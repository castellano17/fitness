import React from "react";
import { CardDefault } from "../components/ui/CardClass";
import { ProfileCard } from "../components/ui/CardEntrenador";

const Services = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-3xl text-app-primary m-5">Servicios</h1>
        <div>
          <div>
            <h2 className=" text-xl p-4 text-app-primary-bg font-semibold">
              Clases Personalizadas
            </h2>
            <div className="flex justify-center items-center">
              <CardDefault />
            </div>
          </div>
          <div>
            <h2 className=" text-xl p-4 text-app-primary-bg font-semibold">
              Nuestros Entrenadores
            </h2>
            <div className="flex justify-center items-center">
              <ProfileCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
