import * as yup from "yup";

export const schemaValidationAddUser = yup.object({
  firstname: yup
    .string()
    .required("The field is required")
    .min(2, "Minimum 2 characters!")
    .max(30, "Maximum 2 characters"),
  lastname: yup
    .string()
    .required("The field is required")
    .min(2, "Minimum 2 characters!")
    .max(30, "Maximum 30 characters"),
  phoneNumber: yup
    .string()
    .required("The field is required")
    .min(2, "Minimum 2 characters!")
    .max(30, "Maximum 30 characters"),
  role: yup.string().required("The field is required"),
  gender: yup.string().required("The field is required"),
  email: yup
    .string()
    .email("Incorrect email")
    .required("The field is required"),
  password: yup
    .string()
    .required("The field is required")
    .min(6, "Minimum 6 characters"),
  confirmPassword: yup
    .string()
    .min(6, "Minimum 6 characters")
    .required("The field is required")
    .oneOf([yup.ref("password")], () => "Passwords must be the same"),
});
