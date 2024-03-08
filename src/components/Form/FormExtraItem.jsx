import { string, func } from "prop-types";

function FormExtraItem({ labelName, type, name, onChange, labelClassName }) {
  return (
    <div className="relative z-0 w-full mb-5">
      <input
        type={type}
        name={name}
        className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
        placeholder=" "
        onChange={onChange}
      />
      <label htmlFor={name} className={labelClassName}>
        {labelName}
      </label>
    </div>
  );
}

export default FormExtraItem;

FormExtraItem.propTypes = {
  labelName: string,
  type: string,
  name: string,
  labelClassName: string,
  onChange: func,
};
