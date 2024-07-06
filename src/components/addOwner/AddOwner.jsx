import ImageComponent from "../shared/ImageComponent";
import userImg from "../../assets/imgs/ic-user.png";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import * as Yup from "yup";
import FormField from "../shared/FormField";

const validationSchema = Yup.object().shape({
  address: Yup.string().trim(),
  phone: Yup.string()
    .trim()
    .matches(/^01[0125][0-9]{8}$/, "Invalid phone number"),
  name: Yup.string().trim().required("name is required."),
  email: Yup.string()
    .trim()
    .email("Invalid email address.")
    .required("Email is required."),
});
const AddNewOwner = () => {
  const { isDark } = useSelector((state) => state.modeReducer);

  const formik = useFormik({
    initialValues: {
      owner_image: null,
      name: "",
      email: "",
      address: "",
      phone: "",
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
      formik.setFieldValue("owner_image", file); // Update Formik field value for 'image'
      // Create object URL for the selected file
      const imageUrl = URL.createObjectURL(file);
      formik.setFieldValue("imageUrl", imageUrl); // Optionally store the URL for preview
    }
  };
  return (
    <div
      className={`shadow-md m-4  rounded min-h-[100vh]  ${
        isDark ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <form onSubmit={formik.handleSubmit} className="p-6">
        <ImageComponent
          formik={formik}
          img={userImg}
          getIconColor={getIconColor}
          handleImageChange={handleImageChange}
        />

        <div className="flex justify-center items-center flex-col">
          <FormField id="name" label="Name" type="text" formik={formik} />
          <FormField id="email" label="Email" type="email" formik={formik} />
          <FormField
            id="phone"
            label="Phone Number"
            type="text"
            formik={formik}
          />
          <FormField id="address" label="Address" type="text" formik={formik} />

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
