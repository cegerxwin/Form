import { string, func } from "prop-types";
function FormExtraItem({ handleCheckboxChange, labelName }) {
  return (
    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
      <div className="flex items-center ps-3">
        <input
          type="checkbox"
          value=""
          onChange={handleCheckboxChange}
          defaultChecked={""}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
        />
        <span
          htmlFor="vue-checkbox-list"
          className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          {labelName}
        </span>
      </div>
    </li>
  );
}

export default FormExtraItem;

FormExtraItem.propTypes = {
  handleCheckboxChange: func,
  labelName: string,
};
