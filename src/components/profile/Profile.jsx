import { useFormik } from "formik";
import userImg from "../../assets/imgs/ic-user.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import PasswordInput from "./PasswordInput";
import ImageComponent from "../shared/ImageComponent";
import * as Yup from "yup";
import FormField from "../shared/FormField";
import { isObjectNotEmpty } from "../../helpers/checkers";
import { editUserProfile } from "../../store/actions/user/userActions";
import { toast } from "react-toastify";
import Loading from "../shared/Loading/Loading";

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .trim()
    .min(3, "Username must be at least 3 characters long.")
    .required("Username is required."),
  email: Yup.string()
    .trim()
    .email("Invalid email address.")
    .required("Email is required."),
  // phone: Yup.string()
  //   .trim()
  //   .matches(/^01[0125][0-9]{8}$/, "Invalid phone number"),
  // address: Yup.string().trim(),
  newPassword: Yup.string()
    .trim()
    .min(8, "new password must be at least 8 characters long."),
});

const Profile = () => {
  const { isDark } = useSelector((state) => state.modeReducer);
  const dispatch = useDispatch();
  const { isLoading, isLoggedIn, user } = useSelector(
    (state) => state.userReducer
  );
  const [isVisible, setIsVisible] = useState({
    currentPassword: true,
    newPassword: true,
  });
  const formik = useFormik({
    initialValues: {
      user_image: null,
      username: "",
      email: "",
      // phone: "",
      // address: "",
      newPassword: "",
    },
    validationSchema: validationSchema, // Add validation schema here
    onSubmit: (values) => {
      handleEdit(values);
    },
  });
  const getIconColor = () => (isDark ? "#eee" : "#000000");
  const handleImageChange = (event) => {
    const file = event.target.files[0]; // Get the first file from the input
    // Check if the selected file is valid
    if (file && file instanceof Blob) {
      formik.setFieldValue("user_image", file); // Update Formik field value for 'image'
      // Create object URL for the selected file
      const imageUrl = URL.createObjectURL(file);
      formik.setFieldValue("imageUrl", imageUrl); // Optionally store the URL for preview
    }
  };

  const handleEdit = (values) => {
    const formData = new FormData();
    if (values?.user_image) {
      formData.append("profile_img", values?.user_image);
    }
    if (values?.newPassword) {
      formData.append("password", values?.newPassword);
    }
    formData.append("username", values?.username);
    formData.append("email", values?.email);
    // formData.append("phone", values?.phone);
    // formData.append("address", values?.address);
    dispatch(editUserProfile(formData, toast));
  };

  useEffect(() => {
    if (isObjectNotEmpty(user)) {
      formik.setValues({
        imageUrl: user?.profile_img,
        username: user?.username,
        email: user?.email,
        // address: user?.address,
        // phone: user?.phone,
      });
    }
  }, [user]);
  return (
    <div
      className={`font-bold min-h-[100vh]  ${
        isDark ? "text-white" : "text-black"
      }`}
    >
      <div
        className={`shadow-md mt-4 rounded  p-11 ${
          isDark ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
      >
        <h3 className="font-semibold py-4 text-2xl px-4">Edit your profile</h3>

        <form onSubmit={formik.handleSubmit} className="p-3">
          <ImageComponent
            formik={formik}
            img={userImg}
            getIconColor={getIconColor}
            handleImageChange={handleImageChange}
          />

          <div className="flex flex-wrap items-center justify-between">
            <FormField
              id="username"
              label="Username"
              type="text"
              formik={formik}
            />
            <FormField id="email" label="Email" type="email" formik={formik} />
            {/* ========================= */}
            {/* <FormField
              id="phone"
              label="Mobile phone"
              type="text"
              formik={formik}
            /> */}
            {/* ========================= */}

            {/* <FormField
              id="address"
              label="Address"
              type="text"
              formik={formik}
            /> */}
            {/* ========================= */}

            <PasswordInput
              formik={formik}
              isVisible={isVisible}
              setIsVisible={setIsVisible}
              fieldName="newPassword"
              label="New Password"
              placeholder="Enter your new password"
              isDark={isDark}
            />
          </div>

          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 mx-auto block">
            {isLoading ? <Loading /> : "Save changes"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
