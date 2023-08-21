import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import SvgLogo from "../ui/atoms/Logo";

export function FooterFitnezz() {
  return (
    <footer className="w-full bg-white p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        <Link href={"/"}>
          <SvgLogo color="red" width="65" height="65" />
        </Link>

        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="/about"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Nosotros
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="/services"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Servicios
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="/contact"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contacto
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2023 Fitnezz
      </Typography>
    </footer>
  );
}
