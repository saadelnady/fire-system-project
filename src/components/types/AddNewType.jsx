import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import FormField from "../shared/FormField";
import TextArea from "../shared/TextArea";
import { addType, editType } from "../../store/actions/Types/typeActions";
import { toast } from "react-toastify";
import { isObjectNotEmpty } from "../../helpers/checkers";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .required("required.")
    .max(24, "length must be less than or equal to 24 characters long"),
  description: Yup.string().required("required.").trim(),
});

const AddNewType = ({
  activeFormHandler,
  activeForm,
  targetType,
  targetTypeHandler,
  dispatchTypes,
}) => {
  const { isDark } = useSelector((state) => state.modeReducer);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if (isObjectNotEmpty(targetType)) {
        editHandler(values);
      } else {
        addHandler(values);
      }
    },
  });

  const addHandler = (values) => {
    dispatch(addType({ formData: values, toast, dispatchTypes }));
    activeFormHandler();
  };
  const editHandler = (values) => {
    dispatch(editType(values, toast, targetType?._id));
    activeFormHandler();
    targetTypeHandler();
  };
  useEffect(() => {
    if (isObjectNotEmpty(targetType)) {
      formik.setFieldValue("name", targetType?.name);
      formik.setFieldValue("description", targetType?.description);
    }
  }, [targetType]);
  // const handleClickOutside = (e) => {
  //   if (e.target.id === "modal-overlay") {
  //     activeFormHandler();
  //     targetTypeHandler();
  //   }
  // };

  return (
    <div
      id="modal-overlay"
      className={`fixed top-0 left-0 z-100 w-full min-h-[100vh] flex justify-center items-center ${
        activeForm ? "fade-in" : "fade-out"
      }`}
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      // onClick={handleClickOutside}
    >
      <div
        className={`transform transition-transform duration-300 font-bold w-[90%] md:w-[50%] lg:w-[30%] mx-auto p-5 rounded ${
          isDark ? "text-white bg-gray-800" : "text-black bg-gray-100"
        } ${activeForm ? "slide-in" : "slide-out"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center">
          <h3 className="text-3xl font-semibold">
            {`${targetType?._id ? "Edit " : "Add "} Type`}
          </h3>
          <button
            className={`text-xl w-3 h-3 p-4 rounded-full flex justify-center items-center ${
              isDark ? "text-white bg-gray-900" : "text-black bg-white"
            }`}
            onClick={() => {
              activeFormHandler();
              targetTypeHandler();
            }}
          >
            ×
          </button>
        </div>
        <form
          onSubmit={formik.handleSubmit}
          className={`mt-3 rounded w-full ${
            isDark ? "text-white bg-gray-800" : "text-black bg-gray-100"
          }`}
        >
          <FormField
            id="name"
            label="Name"
            type="text"
            width="w-full"
            formik={formik}
            className={"w-full"}
          />
          <TextArea id="description" label="Description" formik={formik} />
          <button
            type="submit"
            className="bg-blue-500 text-white active:bg-blue-700 font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
          >
            {`${targetType?._id ? "Edit " : "Add "} Type`}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNewType;
