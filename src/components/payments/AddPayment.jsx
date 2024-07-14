import { useFormik } from "formik";
import FormField from "../shared/FormField";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {
  addPayment,
  fetchPayment,
} from "../../store/actions/payments/paymentActions";
import { isObjectNotEmpty } from "../../helpers/checkers";
import { useEffect } from "react";
import moment from "moment";
import { editPayment } from "../../store/actions/payments/paymentActions";
import { toast } from "react-toastify";
const AddPayment = ({
  handlePopUpOpen,
  project_id,
  client_id,
  targetPayment,
  handleTargetPayment,
}) => {
  console.log("project_id ===>", project_id);
  console.log("client_id ===>", client_id);
  const { isDark } = useSelector((state) => state.modeReducer);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      balance_amount: null,
      balance_date: "",
    },
    validationSchema: Yup.object({
      balance_amount: Yup.number().required("required"),
      balance_date: Yup.string().required("required"),
    }),
    onSubmit: (values) => {
      if (isObjectNotEmpty(targetPayment)) {
        handleEdit(values, targetPayment);
      } else {
        handleAdd(values);
      }
    },
  });

  const handleAdd = (values) => {
    console.log("values  add = =>", values);
    const formData = { ...values, project_id, client_id };
    dispatch(addPayment(formData, getPayment));
    handlePopUpOpen();
  };

  const getPayment = () => {
    dispatch(fetchPayment(client_id));
  };
  const handleEdit = (values, targetPayment) => {
    console.log("targetPayment =====>", targetPayment);
    dispatch(editPayment(values, toast, targetPayment?._id, getPayment));
    handleTargetPayment();
  };

  useEffect(() => {
    if (isObjectNotEmpty(targetPayment)) {
      formik.setValues({
        balance_amount: targetPayment?.balance_amount,
        balance_date: moment(targetPayment?.balance_date).format("YYYY-MM-DD"),
      });
    }
  }, [targetPayment]);
  return (
    <div>
      {
        <div
          className={`fixed top-0 left-0 z-100 w-full min-h-[100vh] flex justify-center items-center  `}
        >
          <div
            className={`  p-6 rounded-lg shadow-lg w-full max-w-md ${
              isDark ? "text-white bg-gray-800" : "text-black bg-gray-100"
            }`}
          >
            <h2 className="text-2xl font-semibold mb-4">
              {isObjectNotEmpty(targetPayment)
                ? "Edit Payment"
                : "Add New Payment"}
            </h2>
            <form onSubmit={formik.handleSubmit} className="space-y-4">
              <div>
                <FormField
                  id="balance_amount"
                  label="Amount"
                  type="number"
                  formik={formik}
                  width={"w-full"}
                  height={"h-fit"}
                />
              </div>
              <FormField
                id="balance_date"
                label="Date"
                type="date"
                formik={formik}
                width={"w-full"}
                height={"h-fit"}
              />
              <div></div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => {
                    handleTargetPayment();
                    handlePopUpOpen();
                  }}
                  className="bg-gray-500 text-white px-4 py-2 rounded-lg"
                >
                  Cancel
                </button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                  {isObjectNotEmpty(targetPayment)
                    ? "Edit Payment"
                    : "Add New Payment"}
                </button>
              </div>
            </form>
          </div>
        </div>
      }
    </div>
  );
};

export default AddPayment;
