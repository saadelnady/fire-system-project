import moment from "moment";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const ProjectPayments = () => {
  const { payment, isLoading } = useSelector((state) => state.paymentReducer);
  const { isDark } = useSelector((state) => state.modeReducer);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isCloseOpen, setISCloseOpen] = useState(false);
  const initialPayments = [
    { id: 1, amount: 100, date: "2023-07-01", paid: true },
    { id: 2, amount: 200, date: "2023-07-05", paid: false },
  ];
  const [payments, setPayments] = useState(initialPayments);
  const [isEditing, setIsEditing] = useState(false);
  const [editPaymentId, setEditPaymentId] = useState(null);
  const [paymentDetails, setPaymentDetails] = useState({
    amount: "",
    date: "",
  });
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);
  // const deleteHandler = () => {
  //   dispatch(deleteOwner(targetRow?._id, toast, callBackFn));
  // };
  const handlePaidChange = (id) => {
    setPayments(
      payments.map((payment) =>
        payment.id === id ? { ...payment, paid: !payment.paid } : payment
      )
    );
  };

  const handleAddNewPayment = () => {
    setPaymentDetails({ amount: "", date: "" });
    setIsEditing(false);
    setIsPopupOpen(true);
  };

  const handleEditPayment = (payment) => {
    const amountWithoutDollar = parseFloat(payment.amount);
    setPaymentDetails({ amount: amountWithoutDollar, date: payment.date });
    setEditPaymentId(payment.id);
    setIsEditing(true);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({ ...paymentDetails, [name]: value });
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      setPayments(
        payments.map((payment) =>
          payment.id === editPaymentId
            ? {
                ...payment,
                amount: `$${paymentDetails.amount}`,
                date: paymentDetails.date,
              }
            : payment
        )
      );
    } else {
      const newPaymentEntry = {
        id: payments.length + 1,
        amount: `${paymentDetails.amount}`,
        date: paymentDetails.date,
        paid: false,
      };
      setPayments([...payments, newPaymentEntry]);
    }
    setIsPopupOpen(false);
    setPaymentDetails({ amount: "", date: "" });
  };

  const handleConfirmDelete = (id) => {
    setConfirmDeleteId(id);
    setISCloseOpen(true);
  };
  const handleDeletePayment = () => {
    setPayments(payments.filter((payment) => payment.id !== confirmDeleteId));
    setConfirmDeleteId(null); // Reset confirmation ID after delete
    setISCloseOpen(false); // Close confirmation popup
  };
  return (
    <div>
      <div
        className={`p-6 rounded-lg shadow-lg mb-6  ${
          isDark ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
      >
        <h2
          className={`text-2xl font-semibold mt-10 mb-5 ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          Project Payments
        </h2>
        {payment?.projects.map((project) => (
          <div>
            <div className="flex justify-between items-center mb-4">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                onClick={handleAddNewPayment}
              >
                Add New Payment
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
              <div>
                <p className="font-semibold">Project Name:</p>
                <p>{project?.project_name}</p>
              </div>
              <div>
                <p className="font-semibold">Total payment:</p>
                <p>{project?.payment?.payment}</p>
              </div>
              <div>
                <p className="font-semibold">total recieved:</p>
                <p>{project?.payment?.received}</p>
              </div>
              <div>
                <p className="font-semibold">total balances:</p>
                <p>{project?.payment?.payment - +project?.payment?.received}</p>
              </div>
            </div>
            <div
              className={` ${
                isDark ? "bg-gray-800" : "bg-gray-100"
              } p-6 rounded-lg shadow-lg`}
            >
              <h2 className="text-2xl font-semibold mb-4">Payments</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-100">
                  <thead
                    className={`${isDark ? "bg-gray-800" : "bg-gray-100"}`}
                  >
                    <tr className={`${isDark ? "bg-gray-800" : "bg-gray-100"}`}>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        ID
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Amount
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Edit
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Delete
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Paid
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {project?.payment?.balances?.map((balance, index) => (
                      <tr
                        key={balance?._id}
                        className={`${isDark ? "bg-gray-800" : "bg-gray-100"}`}
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          {index + 1}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {balance?.balance_amount}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {moment(balance?.balance_date).format("YYYY-M-D")}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <button
                            onClick={() => handleEditPayment(payment)}
                            className="text-blue-600 hover:text-blue-900"
                          >
                            Edit
                          </button>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <button
                            onClick={() => handleConfirmDelete(payment.id)}
                            className="text-red-600 hover:text-red-900"
                          >
                            Delete
                          </button>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <input
                            type="checkbox"
                            checked={payment.paid}
                            onChange={() => handlePaidChange(payment.id)}
                            className="form-checkbox h-5 w-5 text-blue-600"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Delete Confirmation Popup */}
      {isCloseOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-4">Delete Payment</h2>
            <p className="mb-4">
              Are you sure you want to delete this payment?
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setISCloseOpen(false)}
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
      )}
      {/* Popup Window */}
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black-50 bg-opacity-70 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-4">Add New Payment</h2>
            <form onSubmit={handlePaymentSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="amount"
                  className="block text-sm font-medium text-gray-700"
                >
                  Amount
                </label>
                <input
                  type="text"
                  name="amount"
                  id="amount"
                  value={paymentDetails.amount}
                  onChange={handlePaymentChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-700"
                >
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  value={paymentDetails.date}
                  onChange={handlePaymentChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={handleClosePopup}
                  className="bg-gray-500 text-white px-4 py-2 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                >
                  Add Payment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectPayments;
