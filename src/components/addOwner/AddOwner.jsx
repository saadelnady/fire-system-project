import ImageComponent from "../shared/ImageComponent";
import userImg from "../../assets/imgs/ic-user.png";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import FormField from "../shared/FormField";
import { toast } from "react-toastify";
import {
  addOwner,
  editOwner,
  fetchOwner,
} from "../../store/actions/Owner/ownerActions";
import Loading from "../shared/Loading/Loading";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { isObjectNotEmpty } from "../../helpers/checkers";

const validationSchema = Yup.object().shape({
  address: Yup.string().trim(),
  phone: Yup.string()
    .trim()
    .matches(/^[0-9]+$/, "Please provide a valid phone number"),
  name: Yup.string()
    .trim()
    .min(2, "length must be at least 2 characters long")
    .required("name is required."),
  email: Yup.string()
    .trim()
    .email("Invalid email address.")
    .required("Email is required."),
});
const AddNewOwner = () => {
  const { isDark } = useSelector((state) => state.modeReducer);
  const { isLoading, owner } = useSelector((state) => state.ownerReducer);
  const getIconColor = () => (isDark ? "#eee" : "#000000");
  const dispatch = useDispatch();
  const { ownerId } = useParams();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      profile_img: null,
      name: "",
      email: "",
      address: "",
      phone: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if (ownerId) {
        handleEdit(values);
      } else {
        handleAdd(values);
      }
    },
  });

  const handleAdd = (values) => {
    const formData = new FormData();
    if (values?.profile_img) {
      formData.append("profile_img", values?.profile_img);
    }
    if (values?.address) {
      formData.append("address", values?.address);
    }
    if (values?.phone) {
      formData.append("phone", values?.phone);
    }
    formData.append("name", values?.name);
    formData.append("email", values?.email);

    const payload = { formData, toast, navigate: navigateToOwners };
    dispatch(addOwner(payload));
  };
  const navigateToOwners = () => {
    navigate("/owners");
  };
  const handleEdit = (values) => {
    const formData = new FormData();
    if (values?.profile_img) {
      formData.append("profile_img", values?.profile_img);
    }
    if (values?.address) {
      formData.append("address", values?.address);
    }
    if (values?.phone) {
      formData.append("phone", values?.phone);
    }
    formData.append("name", values?.name);
    formData.append("email", values?.email);
    dispatch(editOwner(formData, toast, ownerId)).then(() => {
      navigate("/owners");
    });
  };

  useEffect(() => {
    if (ownerId) {
      dispatch(fetchOwner(ownerId));
    }
  }, [dispatch, ownerId]);
  useEffect(() => {
    if (ownerId && isObjectNotEmpty(owner)) {
      formik.setValues({
        imageUrl: owner?.profile_img,
        name: owner?.name,
        email: owner?.email,
        address: owner?.address,
        phone: owner?.phone,
      });
    } else {
      formik.setValues({
        imageUrl: "",
        name: "",
        email: "",
        address: "",
        phone: "",
      });
    }
  }, [owner, ownerId]);
  const handleImageChange = (event) => {
    const file = event.target.files[0]; // Get the first file from the input
    // Check if the selected file is valid
    if (file && file instanceof Blob) {
      formik.setFieldValue("profile_img", file); // Update Formik field value for 'image'
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
      {ownerId && isLoading ? (
        <Loading />
      ) : (
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
            <FormField
              id="address"
              label="Address"
              type="text"
              formik={formik}
            />

            <button
              type="submit"
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 mx-auto block"
            >
              {isLoading ? <Loading /> : `${ownerId ? "Edit" : "Add"} owner`}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default AddNewOwner;
