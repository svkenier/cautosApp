import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  name: Yup.string().required("Nombre requerido"),
  apellido: Yup.string().required("Apellido requerido"),
  correo: Yup.string()
    .email("Correo electrónico inválido")
    .required("Correo electrónico requerido"),
  cedula: Yup.string().required("Cédula requerida"),
  telefono: Yup.string().required("Teléfono requerido"),
  city: Yup.string().required("Ciudad requerida"),
  town: Yup.string().required("Municipio requerido"),
  userName: Yup.string().required("Usuario requerido"),
  password: Yup.string()
    .required("Contraseña requerida")
    .min(8, "La contraseña debe tener al menos 8 caracteres"),
  confimPassword: Yup.string()
    .required("Confirmar contraseña requerida")
    .oneOf([Yup.ref("contraseña"), null], "Las contraseñas deben coincidir"),
});

export const initialValues = {
  name: "",
  lastName: "",
  email: "",
  cedula: "",
  phone: "",
  city: "",
  town: "",
  userName: "",
  password: "",
  confirmPassword: "",
};
