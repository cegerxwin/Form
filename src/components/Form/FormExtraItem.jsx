import { string, func } from "prop-types";
function FormExtraItem({ handleCheckboxChange, labelName }) {
  return (
    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
      <div className="flex items-center ps-3">
        <button
          onClick={handleCheckboxChange}
          className="mr-2 text-white end-2.5 bottom-2.5 bg-green-600 hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
          +
        </button>
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
