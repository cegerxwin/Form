import { useState, useRef, useEffect } from "react";
import Button from "../UI/Button/Button";
import FormItem from "./FormItem";
import customerInputsData from "../../data/CustomerInputsData.json";
import ErrorModal from "../UI/Modal/ErrorModal";
import OpenModal from "../UI/Modal/OpenModal";
import FormExtraItem from "./FormExtraItem";

const initialState = {
  inputName: "",
  inputEmail: "",
  inputPassword: "",
  inputConfirmPassword: "",
  inputBirthDate: "",
  inputPhoneNumber: "",
  inputAddress: "",
};

function Form() {
  const [customerInput, setCustomerInput] = useState(initialState);
  const [formData, setFormData] = useState(customerInputsData);
  const [isShowError, setIsShowError] = useState(false);
  const [isopenModal, setIsOpenModal] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const formRef = useRef();

  useEffect(() => {
    formRef.current.inputName.focus();
  }, []);

  const filteredInputs = formData.customerInputsData.filter(
    (input) => input.isVisible
  );

  function handleChange({ target: { name, value } }) {
    setCustomerInput({ ...customerInput, [name]: value });

    // handleChange fonksiyonu içinde input alanının değerini kontrol ederek isFormValid'i güncelle
    const isFormValid = filteredInputs.every((input) => {
      if (input.name === name) {
        return value.trim() !== ""; // Eğer değişen input'un değeri boş değilse true döndür
      }
      return true; // Diğer inputlar için doğrulama yapma, her zaman true döndür
    });

    setIsFormValid(isFormValid);
  }

  function handleLoading() {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsOpenModal(false);
    }, 5000);

    setCustomerInput({
      inputName: "",
      inputEmail: "",
      inputPassword: "",
      inputConfirmPassword: "",
      inputBirthDate: "",
      inputPhoneNumber: "",
      inputAddress: "",
    });
    formRef.current.inputName.focus();
  }

  const handleCheckboxChange = (name) => {
    return () => {
      setFormData((prevData) => ({
        ...prevData,
        customerInputsData: prevData.customerInputsData.map((input) => {
          if (input.name === name) {
            return {
              ...input,
              isVisible: !input.isVisible,
            };
          }
          return input;
        }),
      }));
    };
  };

  function handleSubmit(e) {
    e.preventDefault();

    const isFormValid = filteredInputs.every((input) => {
      const value = customerInput[input.name] || "";
      return value.trim() !== "";
    });

    if (!isFormValid) {
      setIsShowError(true);
      return;
    }

    setIsOpenModal(true);
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
          className="flex flex-col gap-y-4 mt-10"
          onSubmit={handleSubmit}
          ref={formRef}>
          <div className="flex flex-col gap-y-1">
            {formData.customerInputsData.map((item) => (
              <FormItem
                key={item.name}
                labelName={item.labelName}
                type={item.type}
                name={item.name}
                labelClassName={item.labelClassName}
                pattern={item.pattern}
                onChange={handleChange}
                value={customerInput[item.name]}
                errorMessage={item.errorMessage}
                isVisible={item.isVisible}
                required={item.required}
                handleCheckboxChange={handleCheckboxChange(item.name)}
              />
            ))}
            <div className="relative z-0 w-full mb-5">
              <h3 className="extInformation mb-4 font-semibold text-gray-900 dark:text-white">
                Do you want to add extra information?
              </h3>
              <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                {formData.customerInputsData.map(
                  (item) =>
                    !item.isVisible && (
                      <FormExtraItem
                        key={item.name}
                        name={item.name}
                        labelName={item.labelName}
                        labelClassName={item.labelClassName}
                        handleCheckboxChange={handleCheckboxChange(item.name)}
                      />
                    )
                )}
              </ul>
            </div>
          </div>
          <p className="text-xs text-red-500 text-right">
            Required fields are marked with an asterisk{" "}
            <abbr title="Required field">*</abbr>
          </p>
          <Button className="focus:ring-4 focus:ring-pink-300 w-full px-6 py-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-pink-600 hover:bg-pink-800 hover:shadow-lg focus:outline-none">
            Add Information
          </Button>
          <ErrorModal
            setIsShowError={setIsShowError}
            isShowError={isShowError}
            message={
              "All fields must be filled and must not contain blank characters."
            }
          />
          <OpenModal
            setIsOpenModal={setIsOpenModal}
            isopenModal={isopenModal}
            isLoading={isLoading}
            customerInput={customerInput}
            message={"Bilgileri girdin"}
            handleLoading={handleLoading}
          />
        </form>
      </div>
    </div>
  );
}

export default Form;
