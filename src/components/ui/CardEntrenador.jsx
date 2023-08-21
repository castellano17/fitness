import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import { Entrenadores } from "../../utils/CardEntrenadores";

export function ProfileCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 m-5 h-auto">
      {Entrenadores.map((entrenador) => (
        <Card
          className="m-4 hover:bg-app-primary-accent transition-transform duration-300 transform hover:scale-105 "
          key={entrenador.id}
        >
          <CardHeader floated={false} className="h-80">
            <img src={entrenador.img} alt={entrenador.name} />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              {entrenador.name}
            </Typography>
            <Typography color="blue-gray" className="font-medium" textGradient>
              {entrenador.description}
            </Typography>
          </CardBody>
          <CardFooter className="flex justify-center gap-7 pt-2">
            <Tooltip content="Like">
              <Typography
                as="a"
                href="#facebook"
                variant="lead"
                color="blue"
                textGradient
              >
                <i className="bx bxl-facebook-circle"></i>
              </Typography>
            </Tooltip>
            <Tooltip content="Follow">
              <Typography
                as="a"
                href="#twitter"
                variant="lead"
                color="light-blue"
                textGradient
              >
                <i className="bx bxl-twitter"></i>
              </Typography>
            </Tooltip>
            <Tooltip content="Follow">
              <Typography
                as="a"
                href="#instagram"
                variant="lead"
                color="purple"
                textGradient
              >
                <i className="bx bxl-instagram"></i>
              </Typography>
            </Tooltip>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
