import { string, func, bool } from "prop-types";

function FormItem({
  labelName,
  type,
  name,
  onChange,
  labelClassName,
  value,
  isVisible,
}) {
  return (
    <>
      {isVisible && (
        <div className="relative z-0 w-full mb-5">
          <input
            type={type}
            name={name}
            className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
            placeholder=" "
            value={value}
            onChange={onChange}
          />
          <label htmlFor={name} className={labelClassName}>
            {labelName}
          </label>
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
  isVisible: bool,
};
