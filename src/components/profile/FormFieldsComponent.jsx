import ErrorMessage from "../shared/ErrorMessage";

const FormFieldsComponent = ({ isDark, formik }) => (
  <div className="flex flex-wrap items-center justify-evenly">
    <div className="flex flex-col w-full md:w-[40%]  h-[100px]">
      <label htmlFor="userName" className="font-bold">
        Username
      </label>
      <input
        id="userName"
        name="userName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.userName}
        className={`p-2 rounded focus:outline-none focus:ring-2 border focus:ring-blue-100 focus:shadow-lg transition duration-300 ease-in-out ${
          isDark ? "bg-gray-800 text-white" : "border"
        }`}
      />
      <ErrorMessage
        touched={formik.touched}
        errors={formik.errors}
        fieldName="userName"
      />
    </div>
    <div className="flex flex-col w-full md:w-[40%]   h-[100px]">
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

    <div className="flex flex-col w-full md:w-[40%] h-[100px]">
      <label htmlFor="mobilePhone" className="font-bold">
        Mobile phone
      </label>
      <input
        name="mobilePhone"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.mobilePhone}
        id="mobilePhone"
        type="text"
        className={`p-2 rounded focus:outline-none focus:ring-2 border focus:ring-blue-100 focus:shadow-lg transition duration-300 ease-in-out ${
          isDark ? "bg-gray-800 text-white" : "border"
        }`}
      />
      <ErrorMessage
        touched={formik.touched}
        errors={formik.errors}
        fieldName="mobilePhone"
      />
    </div>
    <div className="flex flex-col w-full md:w-[40%] h-[100px]">
      <label htmlFor="address" className="font-bold">
        Address
      </label>
      <input
        id="address"
        name="address"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.address}
        type="text"
        className={`p-2 rounded focus:outline-none focus:ring-2 border focus:ring-blue-100 focus:shadow-lg transition duration-300 ease-in-out ${
          isDark ? "bg-gray-800 text-white" : "border"
        }`}
      />
      <ErrorMessage
        touched={formik.touched}
        errors={formik.errors}
        fieldName="address"
      />
    </div>
  </div>
);

export default FormFieldsComponent;
