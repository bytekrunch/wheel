import * as yup from "yup";

const INITIAL_NOTES = [
  {
    id: 1,
    title: "How to claim the warranty?",
    description: `"Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn't getting`
  },
  {
    id: 2,
    title: "How to claim the warranty?",
    description: `"Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn't getting`
  },
  {
    id: 3,
    title: "How to claim the warranty?",
    description: `"Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn't getting`
  }
];

const ASSIGNED_CONTACT = [
  {
    label: "Value One",
    value: "value1"
  },
  {
    label: "Value Two",
    value: "value2"
  },
  {
    label: "Value Three",
    value: "value3"
  },
  {
    label: "Value Four",
    value: "value4"
  },
  {
    label: "Value Five",
    value: "value5"
  }
];

const TAGS = [
  {
    label: "Getting Started",
    value: "Getting Started"
  },
  {
    label: "OnBoarding",
    value: "OnBoarding"
  },
  {
    label: "User Flow",
    value: "User Flow"
  },
  {
    label: "UX",
    value: "UX"
  },
  {
    label: "Bugs",
    value: "Bugs"
  },
  {
    label: "V2",
    value: "V2"
  }
];

const INITIAL_VALUES = {
  title: "",
  description: "",
  assignedContact: {},
  tags: []
};

const VALIDATION_SCHEMA = yup.object({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  assignedContact: yup
    .object({
      label: yup.string(),
      value: yup.string()
    })
    .required("Assigned contact is required"),
  tags: yup.array().min(1).required("Tag is required")
});

export {
  INITIAL_NOTES,
  ASSIGNED_CONTACT,
  TAGS,
  INITIAL_VALUES,
  VALIDATION_SCHEMA
};
