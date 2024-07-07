import { useSelector } from "react-redux";
import ImageComponent from "../shared/ImageComponent";
import userImg from "../../assets/imgs/ic-user.png";
import { useFormik } from "formik";
import FormField from "../shared/FormField";
import SelectInput from "../shared/SelectInput";
import TextArea from "../shared/TextArea.jsx";
import { owners, typesData } from "../../assets/data/staticData";
import * as Yup from "yup";
import { useEffect } from "react";
import Attachments from "../shared/Attacments.jsx";
import { useParams } from "react-router-dom";

const AddProject = () => {
  const { isDark } = useSelector((state) => state.modeReducer);
  const params = useParams();

  const ownerOptions = owners.map((owner) => ({
    ...owner,
    value: owner?._id,
    label: `${owner?.name} `,
    image: owner?.image, // Assuming each owner has an image property
  }));

  const typesOptions = typesData.map((type) => ({
    ...type,
    value: type?._id,
    label: `${type?.type_name}`,
  }));

  const formik = useFormik({
    initialValues: {
      project_img: null,
      project_name: "",
      ref_number_old: "",
      client_id: "",
      type_id: "",
      payment: null,
      received: null,
      balance: null,
      balance_date: "",
      register_contract_date: "",
      contract_expiry_date: "",
      internal_contract_date: "",
      istefa_certificate: "",
      istefa_certificate_date: "",
      hasantak_certificate_date: "",
      first_visit: "",
      second_visit: "",
      third_visit: "",
      fourth_visit: "",
      stickers: "",
      file_number: "",
      comment: "",
      attachments: [],
    },
    validationSchema: Yup.object({
      client_id: Yup.string().required("Owner is required"),
      project_name: Yup.string().required("name is required"),
      ref_number_old: Yup.string().matches(
        /^FES-\d+-\d+$/,
        "Invalid ref number format. It should match the pattern FES-###-###."
      ),
      type_id: Yup.string().required("type is required"),
      attachments: Yup.array().max(10, "You can upload a maximum of 10 files"),
      payment: Yup.number()
        .required("Payment is required")
        .min(Yup.ref("received"), "Payment must be greater than Received"),
      received: Yup.number()
        .required("Received is required")
        .min(0, "Received must be a positive number"),
    }),
    onSubmit: (values) => {
      // console.log("Form values:", values);
    },
  });

  const getIconColor = () => (isDark ? "#eee" : "#000000");
  const handleImageChange = (event) => {
    const file = event.target.files[0]; // Get the first file from the input
    // Check if the selected file is valid
    if (file && file instanceof Blob) {
      formik.setFieldValue("image", file); // Update Formik field value for 'image'
      // Create object URL for the selected file
      const imageUrl = URL.createObjectURL(file);
      formik.setFieldValue("imageUrl", imageUrl); // Optionally store the URL for preview
    }
  };

  useEffect(() => {
    const calculateBalance = () => {
      const { payment, received } = formik.values;
      const balance = payment - received;
      formik.setFieldValue("balance", balance);
    };
    calculateBalance();
  }, [formik.values.payment, formik.values.received]);

  useEffect(() => {
    console.log(ownerOptions);
    console.log(params.ownerId);
    const selectedOwner = ownerOptions.find(
      (option) => option.value == params.ownerId
    );
    formik.setFieldValue("client_id", selectedOwner);
    console.log(selectedOwner);
  }, [params]);
  const handleAttachmentsChange = (event) => {
    const files = Array.from(event.target.files); // Convert FileList to array

    formik.setFieldValue("attachments", files);
  };

  const handleOwnerChange = (selectedOption) => {
    console.log("selectedOption ===>", selectedOption);
    formik.setFieldValue("client_id", selectedOption?.value);
  };

  const handleTypeChange = (selectedOption) => {
    formik.setFieldValue("type_id", selectedOption?.value);
  };

  const customComponents = {
    Option: ({ innerRef, innerProps, data }) => (
      <div ref={innerRef} {...innerProps} className={`flex items-center`}>
        <img
          src={data?.owner_image}
          alt={data?.label}
          style={{
            width: 50,
            height: 50,
            marginRight: 10,
            borderRadius: "50%",
          }}
        />
        {data.label}
      </div>
    ),
  };

  return (
    <div
      className={`shadow-md m-4 rounded min-h-[100vh] p-11 ${
        isDark ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <form onSubmit={formik.handleSubmit} action="">
        <ImageComponent
          formik={formik}
          img={userImg}
          getIconColor={getIconColor}
          handleImageChange={handleImageChange}
        />
        <div className="flex flex-wrap justify-between items-center ">
          <FormField
            id="project_name"
            label="Project name"
            type="text"
            formik={formik}
          />
          <FormField
            id="ref_number_old"
            label="Old Ref number"
            type="text"
            formik={formik}
          />
          <SelectInput
            options={ownerOptions}
            formik={formik}
            label={"Select owner"}
            id="client_id"
            handleChange={handleOwnerChange}
            customComponents={customComponents}
          />
          <SelectInput
            options={typesOptions}
            formik={formik}
            label={"Select type"}
            id="type_id"
            handleChange={handleTypeChange}
          />
          <FormField
            id="register_contract_date"
            label="Register contract date"
            type="date"
            formik={formik}
          />
          <FormField
            id="internal_contract_date"
            label="Internal contract date"
            type="date"
            formik={formik}
          />
          <FormField
            id="contract_expiry_date"
            label="Contract expired date"
            type="date"
            formik={formik}
          />
        </div>
        <h2 className="text-center font-bold  text-xl">Visits dates </h2>
        <div className="flex flex-wrap justify-between items-center ">
          <FormField
            id="first_visit"
            label="First visit"
            type="date"
            formik={formik}
          />
          <FormField
            id="second_visit"
            label="Second visit"
            type="date"
            formik={formik}
          />
          <FormField
            id="third_visit"
            label="Third visit"
            type="date"
            formik={formik}
          />
          <FormField
            id="fourth_visit"
            label="Fourth visit"
            type="date"
            formik={formik}
          />
        </div>
        <h2 className="text-center font-bold text-xl "> Others </h2>
        <div className="flex flex-wrap justify-between items-center ">
          <FormField
            id="istefa_certificate"
            label="Istefa certificate"
            type="text"
            formik={formik}
          />
          <FormField
            id="istefa_certificate_date"
            label="Istefa certificate date"
            type="date"
            formik={formik}
          />
          <FormField
            id="hasantak_certificate_date"
            label="Hasantak certificate date"
            type="date"
            formik={formik}
          />
          <FormField
            id="stickers"
            label="Stickers"
            type="date"
            formik={formik}
          />
          <FormField
            id="file_number"
            label="File number"
            type="text"
            formik={formik}
          />
          <Attachments
            id="attachments"
            label="Attachments"
            handleChange={handleAttachmentsChange}
            formik={formik}
          />
        </div>
        <h2 className="text-center font-bold text-xl "> Payments </h2>
        <div className="flex flex-wrap justify-between items-center ">
          <FormField
            id="payment"
            label="Payment"
            type="number"
            formik={formik}
          />
          <FormField
            id="received"
            label="Received"
            type="number"
            formik={formik}
          />
          <FormField
            id="balance"
            label="Balance"
            type="number"
            formik={formik}
            isDisabled={true}
          />
          <FormField
            id="balance_date"
            label="Balance date"
            type="date"
            formik={formik}
          />
          <TextArea id="comment" label="Comment" formik={formik} />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 mx-auto block mt-5"
        >
          Add owner
        </button>
      </form>
    </div>
  );
};

export default AddProject;
