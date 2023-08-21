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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 m-5 h-auto max-w-[1024px] mx-auto ">
      {Clases.map((clase) => (
        <Card
          className="m-4 hover:bg-app-primary-accent transition-transform duration-300 transform hover:scale-105 "
          key={clase.id}
        >
          <CardHeader className="relative h-[200px]  flex justify-center items-center bg-app-primary-accent bg-opacity-50">
            <img
              src={clase.img}
              alt={clase.name}
              className="object-fill  rounded-md"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              {clase.name}
            </Typography>
            <Typography>{clase.description}</Typography>
          </CardBody>
          <CardFooter className="flex justify-center gap-7 pt-2">
            <Button className="bg-app-primary">Read More</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
