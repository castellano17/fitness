import { Typography } from "@material-tailwind/react";
import React from "react";
import SvgCheck from "../components/ui/atoms/Check";
import { CarouselCustomNavigation } from "../components/Carrusel";

const Home = () => {
  return (
    <div className="flex items-center justify-center bg-app-primary-accent p-10 ">
      <div className="max-w-[960px] p-3 text-center  ">
        <h1 className="text-6xl font-Poppins text-app-primary mb-7 uppercase">
          Salud y Bienestar
        </h1>
        <Typography className="text-xl mb-9">
          Una de las riquezas más preciadas en la experiencia humana es el
          bienestar integral. Con una salud óptima, se abre un abanico de
          posibilidades para alcanzar cualquier meta. Mantener un estado de
          salud vigoroso es fundamental para operar con excelencia en todos los
          ámbitos de la vida.
        </Typography>
        <div className="flex-none justify-center items-center md:flex ">
          <div>
            <h2 className=" text-3xl my-3">
              Cuida tu <span className="text-app-primary">Cuerpo</span>
            </h2>
            <h3 className="mb-2">
              TODO LO QUE NECESITAS PARA PONERTE EN FORMA
            </h3>
            <ul className="pl-0 mb-5 grid grid-cols-[1,1fr] gap-4">
              <li className="flex items-center space-x-2">
                <SvgCheck />
                <span>Clases en directo todos los días</span>
                <span className="bg-red-600 p-1 text-white rounded">LIVE</span>
              </li>
              <li className="flex items-center space-x-2">
                <SvgCheck />
                <span>
                  <span className="font-medium">Más de 1000</span>{" "}
                  entrenamientos diferentes
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <SvgCheck />
                <span>
                  Entrena donde y cuando quieras{" "}
                  <span className="font-medium">24/7</span>
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <SvgCheck />
                <span>
                  Entrenadores de{" "}
                  <span className="font-medium">primer nivel</span>
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <SvgCheck />
                <span>
                  Para todos los{" "}
                  <span className="font-medium">objetivos y niveles</span>
                </span>
              </li>
            </ul>
          </div>
          <div className="mt-6  md:ml-8  mb-4">
            <h2 className="text-3xl my-3">
              Nuestras salas de{" "}
              <span className="text-app-primary">Ejercicios</span>
            </h2>

            <div className="w-full h-[200px] flex justify-center">
              <CarouselCustomNavigation />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
