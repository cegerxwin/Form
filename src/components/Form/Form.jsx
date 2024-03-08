import { useState, useRef, useEffect } from "react";
import Button from "../UI/Button/Button";
import FormItem from "./FormItem";
import customerInputsData from "../../data/CustomerInputsData.json";

const initialState = {
  inputName: "",
  inputEmail: "",
  inputPassword: "",
  inputBirthDate: "",
  inputinputPhoneNumber: "",
  inputAddress: "",
};

function Form() {
  const [customerInput, setCustomerInput] = useState(initialState);
  const [customerData, setCustomerData] = useState([]);
  const [birthVisible, setBirthVisible] = useState(false);
  const [phoneVisible, setPhoneVisible] = useState(false);
  const [addressVisible, setAddressVisible] = useState(false);
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
            <div className="relative z-0 w-full mb-5">
              <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
                Do you want to add extra information?
              </h3>
              <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                  <div className="flex items-center ps-3">
                    <input
                      id="vue-checkbox-list"
                      type="checkbox"
                      value=""
                      onClick={(e) => setBirthVisible(e.target.checked)}
                      checked={birthVisible}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <span
                      htmlFor="vue-checkbox-list"
                      className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Birth Date
                    </span>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                  <div className="flex items-center ps-3">
                    <input
                      id="react-checkbox-list"
                      type="checkbox"
                      value=""
                      onClick={(e) => setPhoneVisible(e.target.checked)}
                      checked={phoneVisible}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <span
                      htmlFor="react-checkbox-list"
                      className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Phone Number
                    </span>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                  <div className="flex items-center ps-3">
                    <input
                      id="angular-checkbox-list"
                      type="checkbox"
                      value=""
                      onClick={(e) => setAddressVisible(e.target.checked)}
                      checked={addressVisible}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <span
                      htmlFor="angular-checkbox-list"
                      className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Address
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            {birthVisible && (
              <div className="relative z-0 w-full mb-5">
                <input
                  type="number"
                  name="inputBirthDate"
                  className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                  placeholder=" "
                  onChange={handleChange}
                />
                <label
                  htmlFor="birthDate"
                  className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">
                  Birth Date
                </label>
              </div>
            )}
            {phoneVisible && (
              <div className="relative z-0 w-full mb-5">
                <input
                  type="number"
                  name="inputPhoneNumber"
                  className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                  placeholder=" "
                  onChange={handleChange}
                />
                <label
                  htmlFor="phoneNumber"
                  className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">
                  Phone Number
                </label>
              </div>
            )}
            {addressVisible && (
              <div className="relative z-0 w-full mb-5">
                <textarea
                  type="text"
                  name="inputAddress"
                  className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                  placeholder=" "
                  onChange={handleChange}
                />
                <label
                  htmlFor="address"
                  className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">
                  Address
                </label>
              </div>
            )}

            {/*             <fieldset className="relative z-0 w-full p-px">
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
            </fieldset> */}
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
