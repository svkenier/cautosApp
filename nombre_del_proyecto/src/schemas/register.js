import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  name: Yup.string().required("Nombre requerido"),
  lastName: Yup.string().required("Apellido requerido"),
  email: Yup.string()
    .email("Correo electrónico inválido")
    .required("Correo electrónico requerido"),
  cedula: Yup.string().required("Cédula requerida"),
  phone: Yup.string().required("Teléfono requerido"),
  city: Yup.string().required("Ciudad requerida"),
  town: Yup.string().required("Municipio requerido"),
  userName: Yup.string().required("Usuario requerido"),
  password: Yup.string()
    .required("Contraseña requerida")
    .min(8, "La contraseña debe tener al menos 8 caracteres"),
  confirmPassword: Yup.string()
    .required("Confirmar contraseña requerida")
    .oneOf([Yup.ref("password"), null], "Las contraseñas deben coincidir"),
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
