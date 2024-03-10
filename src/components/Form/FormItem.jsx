import { useState } from "react";
import { string, func, bool } from "prop-types";
import "./FormItem.css";

function FormItem({
  labelName,
  type,
  name,
  onChange,
  labelClassName,
  value,
  isVisible,
  pattern,
  errorMessage,
}) {
  const [focused, setFocused] = useState(false);
  return (
    <>
      {isVisible && (
        <div className="relative z-0 w-full mb-5">
          <input
            type={type}
            name={name}
            className="input-item pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
            placeholder=" "
            value={value}
            pattern={pattern}
            onChange={onChange}
            max={name === "inputBirthDate" ? "2010" : undefined}
            min={name === "inputBirthDate" ? "1900" : undefined}
            maxLength={name === "inputBirthDate" ? "4" : undefined}
            focused={focused.toString()}
            onBlur={() => setFocused(true)}
            onFocus={() => name === "confirmPassword" && setFocused(true)}
          />
          <label htmlFor={name} className={labelClassName}>
            {labelName}
          </label>
          <span className="span-item text-red-500">{errorMessage}</span>
        </div>
      )}
    </>
  );
}

export default FormItem;

FormItem.propTypes = {
  labelName: string,
  type: string,
  name: string,
  labelClassName: string,
  onChange: func,
  value: string,
  pattern: string,
  errorMessage: string,
  isVisible: bool,
};
