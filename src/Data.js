export const fieldsObjOne = [
  {
    label: "Age",
    type: "number",
    required: true
  },
  {
    label: "Full Name",
    type: "text",
    required: true,
    min: 5,
    max: 15
  },
  {
    label: "Date",
    type: "date",
    required: true
  },
  {
    label: "Password",
    type: "password",
    required: true
  },
  {
    label: "Checked",
    type: "checkbox",
    value: true
  }
];

export const fieldsObjTwo = [
  {
    label: "Age",
    type: "number",
    required: true,
    value: "34"
  },
  {
    label: "Full Name",
    type: "text",
    required: true,
    value: "Micky Mouse"
  },
  {
    label: "Date",
    type: "date",
    required: false,
    value: "2020-11-03"
  },
  {
    label: "Password",
    type: "password",
    required: true,
    value: "test"
  }
];
