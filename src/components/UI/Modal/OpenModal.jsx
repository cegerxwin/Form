import { bool, func, string } from "prop-types";
import { createPortal } from "react-dom";

const OpenModal = (props) => {
  if (!props.isopenModal) {
    return;
  }

  return createPortal(
    <div className="error-modal">
      <div className="flex justify-center items-center h-screen absolute">
        <div>
          <div className="fixed inset-0 px-2 z-10 overflow-hidden flex items-center justify-center">
            <div
              className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              onClick={() => props.setIsOpenModal(false)}></div>
            <div className="bg-white rounded-md shadow-xl overflow-hidden max-w-md w-full sm:w-96 md:w-1/2 lg:w-2/3 xl:w-1/3 z-50">
              <div className="bg-pink-500 text-white px-4 py-2">
                <h2 className="text-lg font-semibold text-center">
                  Customer Registration Form Confirmation
                </h2>
              </div>
              <div className="p-4 text-black">
                {props.isLoading ? (
                  <div className="border border-pink-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                    <div className="animate-pulse flex space-x-4">
                      <div className="rounded-full bg-slate-200 h-10 w-10"></div>
                      <div className="flex-1 space-y-6 py-1">
                        <div className="h-2 bg-slate-200 rounded"></div>
                        <div className="space-y-3  text-3xl font-semibold text-pink-500 text-center">
                          Thank you for your patience.
                        </div>
                        <div className="space-y-3 ">
                          <div className="grid grid-cols-3 gap-4">
                            <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                            <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                          </div>
                          <div className="h-2 bg-slate-200 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <p>
                      Username: <strong>{props.customerInput.inputName}</strong>
                    </p>
                    <p>
                      Email: <strong>{props.customerInput.inputEmail}</strong>
                    </p>
                    <p>
                      Password:{" "}
                      <strong>{props.customerInput.inputPassword}</strong>
                    </p>
                    <p>
                      Birth Date:{" "}
                      <strong>{props.customerInput.inputBirthDate}</strong>
                    </p>
                    <p>
                      Phone Number:{" "}
                      <strong>{props.customerInput.inputPhoneNumber}</strong>
                    </p>
                    <p>
                      Address:{" "}
                      <strong>{props.customerInput.inputAddress}</strong>
                    </p>
                  </>
                )}
              </div>
              <div className="border-t px-4 py-2 flex gap-3 justify-center">
                <button
                  className="px-3 py-1 bg-green-500 text-white  rounded-md w-full sm:w-auto"
                  onClick={props.handleLoading}>
                  I confirm my information
                </button>
                <button
                  className="px-3 py-1 bg-yellow-500 text-white  rounded-md w-full sm:w-auto"
                  onClick={() => props.setIsOpenModal(false)}>
                  I will edit my information
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

export default OpenModal;

OpenModal.propTypes = {
  isShowError: bool,
  setIsShowError: func,
  message: string,
};
