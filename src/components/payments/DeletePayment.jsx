import { useDispatch } from "react-redux";
import {
  deletePayment,
  fetchPayment,
} from "../../store/actions/payments/paymentActions";
import { toast } from "react-toastify";

const DeletePayment = ({ targetPayment, handleIsDeletePopupOpen }) => {
  console.log("targetPayment ===>", targetPayment);
  const dispatch = useDispatch();
  const handleDeletePayment = () => {
    dispatch(deletePayment(targetPayment?._id, toast, getPayment));
  };

  const getPayment = () => {
    dispatch(fetchPayment(targetPayment?.client_id));
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Delete Payment</h2>
        <p className="mb-4">Are you sure you want to delete this payment?</p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={handleIsDeletePopupOpen}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg"
          >
            Cancel
          </button>
          <button
            onClick={handleDeletePayment}
            className="bg-red-500 text-white px-4 py-2 rounded-lg"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeletePayment;
