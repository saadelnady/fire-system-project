import { useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import FormField from "../shared/FormField";
import TextArea from "../shared/TextArea";

const validationSchema = Yup.object().shape({
  type_name: Yup.string().trim().required("name is required."),
  type_description: Yup.string().trim(),
});

const AddNewType = ({ handler, activeForm }) => {
  const { isDark } = useSelector((state) => state.modeReducer);

  const formik = useFormik({
    initialValues: {
      type_name: "",
      type_description: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("Form values:", values);
    },
  });

  const closeHandler = () => {
    setTimeout(() => {
      handler();
    }, 300); // Duration should match the animation duration
  };

  return (
    <div
      className={`fixed top-0 left-0 z-100 w-full min-h-[100vh] flex justify-center items-center ${
        activeForm ? "fade-in" : "fade-out"
      }`}
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div
        className={`transform transition-transform duration-300 font-bold w-[90%] md:w-[50%] mx-auto p-5 rounded ${
          isDark ? "text-white bg-gray-800" : "text-black bg-gray-100"
        } ${activeForm ? "slide-in" : "slide-out"}`}
      >
        <div className="flex justify-between items-center">
          <h3 className="text-3xl font-semibold">Add New Type</h3>
          <button
            className={`text-xl w-3 h-3 p-4 rounded-full flex justify-center items-center ${
              isDark ? "text-white bg-gray-900" : "text-black bg-white"
            }`}
            onClick={closeHandler}
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
            id="type_name"
            label="Name"
            type="text"
            width="w-full"
            formik={formik}
            className={"w-full"}
          />
          <TextArea id="type_description" label="Description" formik={formik} />
          <button className="bg-blue-500 text-white active:bg-blue-700 font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNewType;
