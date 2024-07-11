import React from "react";
import DarkModeToggle from "../shared/DarkModeToggle.jsx";
import { useDispatch, useSelector } from "react-redux";
import FormField from "../shared/FormField.jsx";
import * as Yup from "yup";
import { useFormik } from "formik";
import { userLogin } from "../../store/actions/user/userActions.js";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Loading from "../shared/Loading/Loading.jsx";

const Login = () => {
  const { isLoading } = useSelector((state) => state.userReducer);
  const { isDark } = useSelector((state) => state.modeReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    username: Yup.string().trim().required("username is required."),
    password: Yup.string().trim().required("password is required."),
  });
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const payload = { values, toast, navigate };
      dispatch(userLogin(payload));
    },
  });
  return (
    <>
      <DarkModeToggle />
      <div
        className={`h-screen flex justify-center items-center ${
          isDark ? "bg-gray-800" : "bg-gray-100"
        } `}
      >
        <form
          onSubmit={formik.handleSubmit}
          className={`flex flex-col w-screen md:w-4/5 lg:w-2/5 xl:w-1/5 rounded shadow p-6  ${
            isDark ? "bg-gray-700" : "bg-white"
          } `}
        >
          <FormField
            id="username"
            label="User name"
            type="text"
            formik={formik}
            width="w-full"
          />
          <FormField
            id="password"
            label="password"
            type="password"
            formik={formik}
            width="w-full"
          />
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 mx-auto block">
            {isLoading ? <Loading /> : "Login"}
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
