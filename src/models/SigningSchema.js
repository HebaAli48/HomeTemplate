import * as yup from "yup";
const phoneRegExp = /^(010|011|012|015)[0-9]{8}$/;
// yup signInSchema
const SigningSchema = yup.object().shape({
  firstName: yup.string().min(4).required("First Name is required"),
  lastName: yup.string().min(4).required("Last Name is required"),
  email: yup
    .string()
    .email("Invalid email")
    .required("Email is required")
    .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, "Invalid email format"),
  phoneNumber: yup
    .string()
    .required("Phone number is required")
    .matches(phoneRegExp, "Invalid format"),
  password: yup
    .string() // Specifies that the input must be a string
    .required("Password is required") // Specifies that the input is required and provides an error message if it is not provided
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, // Specifies a regular expression pattern that the password must match
      "Password must be at least : 8 chars, 1 UPPERCASE, 1 lowercase, 1 numeric digit" // Provides an error message if the input does not match the regular expression pattern
    ),
  confirmPassword: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password"), null], "Password must match"),
});

export default SigningSchema;
