import * as yup from "yup";

const ROLE = [
  {
    label: "Owner",
    value: "Owner"
  },
  {
    label: "CEO",
    value: "CEO"
  },
  {
    label: "Director",
    value: "Director"
  }
];

const VALIDATION_SCHEMA = yup.object({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup.string().email().required("Email is required"),
  role: yup
    .object({
      label: yup.string(),
      value: yup.string()
    })
    .required("Role is required")
});

const INITIAL_VALUES = {
  firstName: "",
  lastName: "",
  email: "",
  role: ""
};
export { ROLE, VALIDATION_SCHEMA, INITIAL_VALUES };
