import { string, array } from "prop-types";

function Input({
  labelName,
  type,
  name,
  className,
  placeholder,
  labelClassName,
  ref,
}) {
  return (
    <div>
      <label className={labelClassName}>
        <strong>{labelName}</strong>
        <input
          type={type}
          name={name}
          className={className}
          placeholder={placeholder}
          ref={ref}
        />
      </label>
    </div>
  );
}

export default Input;

Input.propTypes = {
  labelName: string,
  type: string,
  name: string,
  className: string,
  placeholder: string,
  labelClassName: string,
  ref: array,
};
