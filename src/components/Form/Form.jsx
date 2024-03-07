import { useState, useRef, useEffect } from "react";
import Button from "../UI/Button/Button";
import FormItem from "./FormItem";
import customerInputsData from "../../data/CustomerInputsData.json";

const initialState = {
  inputName: "",
  inputEmail: "",
  inputPassword: "",
};

function Form() {
  const [customerInput, setCustomerInput] = useState(initialState);

  const [customerData, setCustomerData] = useState([]);

  const formRef = useRef();

  useEffect(() => {
    // İlk input'a otomatik olarak focus yapmak için.
    if (formRef.current.inputName) {
      formRef.current.inputName.focus();
    }
  }, []);

  function handleChange({ target: { name, value } }) {
    setCustomerInput({ ...customerInput, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const isFormValid = Object.values(customerInput).every(
      (value) => value.trim() !== ""
    );

    if (!isFormValid) {
      console.log("Tüm alanları doldurun.");
      return;
    }

    setCustomerData((prevState) => [customerInput, ...prevState]);
  }

  return (
    <div className="min-h-screen bg-gray-100 p-0 sm:p-12">
      <div className="mx-auto max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
        <h1 className="text-2xl font-bold mb-8 text-center">
          Customer Registration
          <span className="ml-2 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
            <span className="relative text-white"> Form</span>
          </span>
        </h1>
        <form
          className="flex flex-col gap-y-5 mt-10"
          onSubmit={handleSubmit}
          ref={formRef}>
          <div className="flex flex-col gap-y-2">
            {customerInputsData.customerInputsData.map((item) => (
              <FormItem
                key={item.name}
                labelName={item.labelName}
                type={item.type}
                name={item.name}
                labelClassName={item.labelClassName}
                onChange={handleChange}
              />
            ))}
            <fieldset className="relative z-0 w-full p-px">
              <legend className="absolute text-gray-500 transform scale-75 -top-3 origin-0">
                Gender Identity
              </legend>
              <div className="block pt-3 pb-2 space-x-4">
                <label>
                  <input
                    type="radio"
                    name="radio"
                    value="1"
                    className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                  />
                  Female
                </label>
                <label>
                  <input
                    type="radio"
                    name="radio"
                    value="2"
                    className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                  />
                  Male
                </label>
                <label>
                  <input
                    type="radio"
                    name="radio"
                    value="2"
                    className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                  />
                  Intersex
                </label>
                <label>
                  <input
                    type="radio"
                    name="radio"
                    value="2"
                    className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                  />
                  Prefer not to say
                </label>
              </div>
            </fieldset>
          </div>
          <p className="text-xs text-red-500 text-right my-3">
            Required fields are marked with an asterisk{" "}
            <abbr title="Required field">*</abbr>
          </p>
          <Button className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-pink-500 hover:bg-pink-600 hover:shadow-lg focus:outline-none">
            Add Information
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Form;
