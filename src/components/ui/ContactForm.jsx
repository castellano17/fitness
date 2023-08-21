import { useState } from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";

export function ContactForms() {
  const [formData, setFormData] = useState({
    asunto: "",
    email: "",
    mensaje: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const errors = {};
    if (!formData.asunto) {
      errors.asunto = "Este campo es requerido";
    }
    if (!formData.email) {
      errors.email = "Este campo es requerido";
    }
    if (!formData.mensaje) {
      errors.mensaje = "Este campo es requerido";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      // Lógica para enviar email por API
      setSubmitted(true);
      setFormErrors({});
      setFormData({
        asunto: "",
        email: "",
        mensaje: "",
      });
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Escríbenos
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Ingresa la información de contacto
      </Typography>
      <form
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        onSubmit={handleSubmit}
      >
        <div className="mb-4 flex flex-col gap-6">
          <Input
            size="lg"
            label="Asunto"
            required
            value={formData.asunto}
            onChange={(e) =>
              setFormData({ ...formData, asunto: e.target.value })
            }
            className={formErrors.asunto ? "ring-1 ring-red-500" : ""}
          />
          {formErrors.asunto && (
            <p className="text-red-500 text-sm">{formErrors.asunto}</p>
          )}
          <Input
            size="lg"
            label="Email"
            type="email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className={formErrors.email ? "ring-1 ring-red-500" : ""}
          />
          {formErrors.email && (
            <p className="text-red-500 text-sm">{formErrors.email}</p>
          )}
          <div className="flex flex-col gap-2">
            <label htmlFor="mensaje" className="text-sm text-blue-gray-500">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              required
              className={`border rounded-lg p-2 bg-white resize-none ${
                formErrors.mensaje ? "ring-1 ring-red-500" : ""
              }`}
              rows="4"
              value={formData.mensaje}
              onChange={(e) =>
                setFormData({ ...formData, mensaje: e.target.value })
              }
            />
            {formErrors.mensaje && (
              <p className="text-red-500 text-sm">{formErrors.mensaje}</p>
            )}
          </div>
        </div>
        <Button type="submit" className="mt-6 bg-app-primary" fullWidth>
          Enviar
        </Button>
        {submitted && (
          <p className="text-green-500 mt-4">Formulario enviado con éxito</p>
        )}
      </form>
    </Card>
  );
}
