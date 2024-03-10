import { bool, func, string } from "prop-types";
import { createPortal } from "react-dom";

const ErrorModal = (props) => {
  if (!props.isShowError) {
    return;
  }

  return createPortal(
    <div className="error-modal">
      <div className="flex justify-center items-center h-screen absolute">
        <div>
          <div className="fixed inset-0 px-2 z-10 overflow-hidden flex items-center justify-center">
            <div
              className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              onClick={() => props.setIsShowError(false)}></div>
            <div className="bg-white rounded-md shadow-xl overflow-hidden max-w-md w-full sm:w-96 md:w-1/2 lg:w-2/3 xl:w-1/3 z-50">
              <div className="bg-red-500 text-white px-4 py-2">
                <h2 className="text-3xl font-semibold text-center">
                  Attention!
                </h2>
              </div>
              <div className="p-4 text-black text-2xl font-semibold text-center">
                <svg
                  className="w-20 h-20 text-red-600 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <p>{props.message}</p>
              </div>
              <div className="border-t px-4 py-2 flex justify-center">
                <button
                  className="w-32 text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base text-center px-3 py-2.5 mr-2"
                  onClick={() => props.setIsShowError(false)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default ErrorModal;

ErrorModal.propTypes = {
  isShowError: bool,
  setIsShowError: func,
  message: string,
};
