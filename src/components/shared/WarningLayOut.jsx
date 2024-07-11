import { useSelector } from "react-redux";

const WarningLayOut = ({ activeModal, activeModalHandler, handleDelete }) => {
  const { isDark } = useSelector((state) => state.modeReducer);

  const handleClickOutside = (e) => {
    if (e.target.id === "modal-overlay") {
      activeModalHandler();
    }
  };

  return (
    <div
      id="modal-overlay"
      className={`fixed top-0 left-0 z-100 w-full min-h-[100vh] flex justify-center items-center ${
        activeModal ? "fade-in" : "fade-out"
      }`}
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      onClick={handleClickOutside}
    >
      <div
        className={` rounded-lg overflow-hidden shadow-xl transform transition-all max-w-lg w-full p-6  ${
          isDark ? "text-white bg-gray-800" : "text-black bg-gray-100"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-lg leading-6 font-medium  ">
          Are you sure you want to delete this item?
        </h3>
        <div className="mt-4">
          <button
            onClick={() => {
              handleDelete();
              activeModalHandler();
            }}
            className="bg-red-600 text-white px-4 py-2 rounded-md mr-2 hover:bg-red-700 focus:outline-none"
          >
            Delete
          </button>
          <button
            onClick={() => activeModalHandler()}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 focus:outline-none"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default WarningLayOut;
