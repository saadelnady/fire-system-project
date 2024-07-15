import moment from "moment";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeletePayment from "./DeletePayment";
import AddPayment from "./AddPayment";
import Loading from "../shared/Loading/Loading";
import Table from "../shared/Table";
import { toast } from "react-toastify";
import {
  chechPaymentPaid,
  fetchPayment,
} from "../../store/actions/payments/paymentActions";

const ProjectPayments = () => {
  const { payment, isLoading } = useSelector((state) => state.paymentReducer);
  const { isDark } = useSelector((state) => state.modeReducer);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [targetPayment, setTargetPayment] = useState({});
  const dispatch = useDispatch();
  const handlePopUpOpen = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  const handleIsDeletePopupOpen = (myTargetPayment) => {
    setTargetPayment(myTargetPayment);
    setIsDeletePopupOpen(!isDeletePopupOpen);
  };
  const handleTargetPayment = () => {
    setTargetPayment({});
  };

  const handleAddNewPayment = () => {
    handlePopUpOpen();
  };
  const handleEditPayment = (myTargetPayment) => {
    setTargetPayment(myTargetPayment);
    handlePopUpOpen();
  };
  const checkPaymentPaid = (checkedPaymentId) => {
    dispatch(chechPaymentPaid(checkedPaymentId, toast, getPayment));
  };

  const getPayment = () => {
    dispatch(fetchPayment(payment?.client_id));
  };
  const columns = [
    {
      header: "id",
      render: (row, rowIndex) => (
        <p
          className={`${
            row?.balance_status ? "text-green-500 line-through" : "text-black "
          } `}
        >
          {rowIndex + 1}
        </p>
      ),
    },
    {
      header: "Amount",
      render: (row) => (
        <div
          className={`flex items-center ${
            row?.balance_status ? "text-green-500 line-through" : "text-black "
          }`}
        >
          {row?.balance_amount || "__"}
        </div>
      ),
    },
    {
      header: "Date",
      render: (row) => (
        <p
          className={`flex items-center ${
            row?.balance_status ? "text-green-500 line-through" : "text-black "
          }`}
        >
          {moment(row?.balance_date).format("YYYY-M-D")}
        </p>
      ),
    },
    {
      header: "Edit",
      render: (row) => (
        <button
          onClick={() => handleEditPayment(row)}
          className="text-blue-600 hover:text-blue-900"
        >
          Edit
        </button>
      ),
    },
    {
      header: "Delete",
      render: (row) => (
        <button
          onClick={() => handleIsDeletePopupOpen(row)}
          className="text-blue-600 hover:text-blue-900"
        >
          Delete
        </button>
      ),
    },
    {
      header: "Paid",
      render: (row) => (
        <input
          type="checkbox"
          checked={row?.balance_status}
          onClick={() => {
            checkPaymentPaid(row?._id);
          }}
          className="form-checkbox h-5 w-5 text-blue-600"
        />
      ),
    },
  ];

  return (
    <div
      className={`p-6 rounded-lg shadow-lg mb-6 min-h-[100vh]  ${
        isDark ? "bg-gray-900 text-white" : "bg-white text-black "
      }`}
    >
      <h2
        className={`text-2xl font-semibold mt-10 mb-5 ${
          isDark ? "text-white" : "text-black"
        }`}
      >
        Project Payments
      </h2>
      {payment?.projects?.map((project) => (
        <div className="mb-10">
          <div className="flex justify-between items-center mb-4">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              onClick={handleAddNewPayment}
            >
              Add New Payment
            </button>
          </div>
          {isPopupOpen && (
            <AddPayment
              project_id={project?.payment?.project_id}
              client_id={project?.payment?.client_id}
              handlePopUpOpen={handlePopUpOpen}
              targetPayment={targetPayment}
              handleTargetPayment={handleTargetPayment}
            />
          )}

          {isDeletePopupOpen && (
            <DeletePayment
              targetPayment={targetPayment}
              handleIsDeletePopupOpen={handleIsDeletePopupOpen}
            />
          )}
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
            {isLoading ? (
              <Loading />
            ) : (
              <Table cols={columns} rows={project?.payment?.balances} />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectPayments;
