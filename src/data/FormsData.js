export const customerInputsData = [
  {
    labelName: "Username",
    labelClassName:
      "after:content-['*'] after:ml-0.5 after:text-red-500 absolute duration-300 top-3 -z-1 origin-0 text-gray-500",
    type: "text",
    name: "inputName",
    errorMessage: "Username should be 3-16 characters and shouldn't character!",
    pattern: "^[a-zA-Z0-9]{3,10}$",
    isVisible: true,
    required: true,
  },
  {
    labelName: "E-Mail",
    labelClassName:
      "after:content-['*'] after:ml-0.5 after:text-red-500 absolute duration-300 top-3 -z-1 origin-0 text-gray-500",
    type: "email",
    name: "inputEmail",
    errorMessage: "It should be a valid email address!",
    isVisible: true,
    required: true,
  },
  {
    labelName: "Password",
    labelClassName:
      "after:content-['*'] after:ml-0.5 after:text-red-500 absolute duration-300 top-3 -z-1 origin-0 text-gray-500",
    type: "text",
    name: "inputPassword",
    errorMessage:
      "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
    pattern:
      "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
    isVisible: true,
    required: true,
  },
  {
    labelName: "Confirm Password",
    labelClassName:
      "after:content-['*'] after:ml-0.5 after:text-red-500 absolute duration-300 top-3 -z-1 origin-0 text-gray-500",
    type: "text",
    name: "inputConfirmPassword",
    errorMessage: "Passwords don't match!",
    pattern: values.password,
    isVisible: true,
    required: true,
  },
  {
    labelName: "Birth Date",
    labelClassName: "absolute duration-300 top-3 -z-1 origin-0 text-gray-500",
    type: "number",
    name: "inputBirthDate",
    errorMessage: "Please only include years between 1900 and 2010.",
    isVisible: false,
    required: false,
  },
  {
    labelName: "Phone Number",
    labelClassName: "absolute duration-300 top-3 -z-1 origin-0 text-gray-500",
    type: "tel",
    name: "inputPhoneNumber",
    errorMessage: "Please add your valid phone number",
    pattern: "^(05)[0-9][0-9][s]([0-9]){3}[s]([0-9]){2}[s]([0-9]){2}",
    isVisible: false,
    required: false,
  },
  {
    labelName: "Address",
    labelClassName: "absolute duration-300 top-3 -z-1 origin-0 text-gray-500",
    type: "textarea",
    name: "inputAddress",
    errorMessage: "Please add your valid address",
    pattern: "^[a-zA-Z0-9s,'-]*$",
    isVisible: false,
    required: false,
  },
];
