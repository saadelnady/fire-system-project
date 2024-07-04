import { useFormik } from "formik";
import userImg from "../../assets/imgs/ic-user.png";
import { useSelector } from "react-redux";
import { useState } from "react";
import PasswordInput from "./PasswordInput";
import ImageComponent from "../shared/ImageComponent";
import * as Yup from "yup";
import FormField from "../shared/FormField";

const validationSchema = Yup.object().shape({
  userName: Yup.string()
    .trim()
    .min(8, "Username must be at least 8 characters long.")
    .required("Username is required."),
  email: Yup.string()
    .trim()
    .email("Invalid email address.")
    .required("Email is required."),
  mobilePhone: Yup.string().trim().required("Mobile phone is required."),
  address: Yup.string().trim(),
});

const Profile = () => {
  const { isDark } = useSelector((state) => state.modeReducer);
  const [isVisible, setIsVisible] = useState({
    currentPassword: true,
    newPassword: true,
    newPasswordConfirmed: true,
  });
  const formik = useFormik({
    initialValues: {
      image: null,
      userName: "",
      email: "",
      mobilePhone: "",
      address: "",
      currentPassword: "",
      newPassword: "",
      newPasswordConfirmed: "",
    },
    validationSchema: validationSchema, // Add validation schema here
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
    <div>
      <h2
        className={`font-bold text-end  text-2xl ${
          isDark ? "text-white" : "text-black"
        }`}
      >
        Welcome admin
      </h2>
      <div
        className={`shadow-md mt-4 rounded ${
          isDark ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
      >
        <h3 className="font-semibold mb-4 text-2xl p-4">Edit your profile</h3>
        <form onSubmit={formik.handleSubmit} className="p-3">
          <ImageComponent
            formik={formik}
            img={userImg}
            getIconColor={getIconColor}
            handleImageChange={handleImageChange}
          />

          <div className="flex flex-wrap items-center justify-evenly">
            <FormField
              id="userName"
              label="Username"
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
            <FormField
              id="address"
              label="Address"
              type="text"
              formik={formik}
            />
          </div>

          <div className="flex flex-wrap items-center justify-evenly">
            <PasswordInput
              formik={formik}
              isVisible={isVisible}
              setIsVisible={setIsVisible}
              fieldName="currentPassword"
              label="Current Password"
              placeholder="Enter your current password"
              isDark={isDark}
            />

            <PasswordInput
              formik={formik}
              isVisible={isVisible}
              setIsVisible={setIsVisible}
              fieldName="newPassword"
              label="New Password"
              placeholder="Enter your new password"
              isDark={isDark}
            />
            <PasswordInput
              formik={formik}
              isVisible={isVisible}
              setIsVisible={setIsVisible}
              fieldName="newPasswordConfirmed"
              label="Confirm New Password"
              placeholder="Confirm your new password"
              isDark={isDark}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 mx-auto block"
          >
            Save changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
