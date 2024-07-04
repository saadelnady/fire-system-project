import { useSelector } from "react-redux";
import ImageComponent from "../shared/ImageComponent";
import userImg from "../../assets/imgs/ic-user.png";
import { useFormik } from "formik";
import FormField from "../shared/FormField";
import SelectInput from "../shared/SelectInput";
import { owners } from "../../assets/data/staticData";
const AddProject = () => {
  const { isDark } = useSelector((state) => state.modeReducer);
  const formik = useFormik({
    initialValues: {
      image: null,
      name: "",
    },
    // validationSchema: validationSchema,
    // onSubmit: (values) => {
    //   console.log("Form values:", values);
    //   // Add your submit logic here
    // },
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
      className={`font-bold min-h-[100vh] ${
        isDark ? "text-white" : "text-black"
      }`}
    >
      <ImageComponent
        formik={formik}
        img={userImg}
        getIconColor={getIconColor}
        handleImageChange={handleImageChange}
      />
      <div className="flex flex-wrap items-center justify-evenly">
        <FormField
          id="projectName"
          label="Project name"
          type="text"
          formik={formik}
        />
        <FormField id="email" label="Email" type="email" formik={formik} />
        <FormField
          id="mobilePhone"
          label="Mobile phone"
          type="text"
          formik={formik}
        />
        <FormField id="address" label="Address" type="select" formik={formik} />
      </div>
      <SelectInput options={owners} />
    </div>
  );
};

export default AddProject;
