import ImageComponent from "../shared/ImageComponent";
import userImg from "../../assets/imgs/ic-user.png";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import ErrorMessage from "../shared/ErrorMessage";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().trim().required("name is required."),
  email: Yup.string()
    .trim()
    .email("Invalid email address.")
    .required("Email is required."),
  refNumber: Yup.string().trim().required("ref number is required."),
});
const AddNewOwner = () => {
  const { isDark } = useSelector((state) => state.modeReducer);

  const formik = useFormik({
    initialValues: {
      image: null,
      name: "",
      email: "",
      refNumber: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("Form values:", values);
      // Add your submit logic here
    },
  });
  const getIconColor = () => (isDark ? "#eee" : "#000000");

  const handleImageChange = (event) => {
    const file = event.target.files[0]; // Get the first file from the input
    // Check if the selected file is valid
    if (file && file instanceof Blob) {
      formik.setFieldValue("image", file); // Update Formik field value for 'image'
      // Use createObjectURL only if file is a valid Blob
      URL.createObjectURL(file);
    }
  };
  return (
    <div
      className={`shadow-md m-4 rounded min-h-[100vh]  ${
        isDark ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <form onSubmit={formik.handleSubmit} className="p-3">
        <ImageComponent
          formik={formik}
          img={userImg}
          getIconColor={getIconColor}
          handleImageChange={handleImageChange}
        />
        <div className="flex justify-center items-center flex-col">
          <div className="flex flex-col w-full md:w-[40%] h-[100px]">
            <label htmlFor="refNumber" className="font-bold">
              Ref number
            </label>
            <input
              name="refNumber"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.refNumber}
              id="refNumber"
              type="text"
              className={`p-2 rounded focus:outline-none focus:ring-2 border focus:ring-blue-100 focus:shadow-lg transition duration-300 ease-in-out ${
                isDark ? "bg-gray-800 text-white" : "border"
              }`}
            />
            <ErrorMessage
              touched={formik.touched}
              errors={formik.errors}
              fieldName="refNumber"
            />
          </div>
          <div className="flex flex-col w-full md:w-[40%] h-[100px]">
            <label htmlFor="name" className="font-bold">
              Name
            </label>
            <input
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              id="name"
              type="text"
              className={`p-2 rounded focus:outline-none focus:ring-2 border focus:ring-blue-100 focus:shadow-lg transition duration-300 ease-in-out ${
                isDark ? "bg-gray-800 text-white" : "border"
              }`}
            />
            <ErrorMessage
              touched={formik.touched}
              errors={formik.errors}
              fieldName="name"
            />
          </div>
          <div className="flex flex-col w-full md:w-[40%] h-[100px]">
            <label htmlFor="email" className="font-bold">
              Email
            </label>
            <input
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              id="email"
              type="email"
              className={`p-2 rounded focus:outline-none focus:ring-2 border focus:ring-blue-100 focus:shadow-lg transition duration-300 ease-in-out ${
                isDark ? "bg-gray-800 text-white" : "border"
              }`}
            />
            <ErrorMessage
              touched={formik.touched}
              errors={formik.errors}
              fieldName="email"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 mx-auto block"
          >
            Add owner
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewOwner;
