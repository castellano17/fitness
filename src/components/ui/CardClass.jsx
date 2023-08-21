import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import { Clases } from "../../utils/CardClases";

export function CardDefault() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 m-5 h-auto">
      {Clases.map((clase) => (
        <Card
          className="m-4 hover:bg-app-primary-accent transition-transform duration-300 transform hover:scale-105 "
          key={clase.id}
        >
          <CardHeader
            color="blue-gray"
            className="relative h-auto flex justify-center items-center"
          >
            <img
              src={clase.img}
              alt={clase.name}
              className="w-auto object-cover "
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              {clase.name}
            </Typography>
            <Typography>{clase.description}</Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button className="bg-app-primary">Read More</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
