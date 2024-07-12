import { useDispatch, useSelector } from "react-redux";
import ImageComponent from "../shared/ImageComponent";
import userImg from "../../assets/imgs/ic-user.png";
import { useFormik } from "formik";
import FormField from "../shared/FormField";
import SelectInput from "../shared/SelectInput";
import TextArea from "../shared/TextArea.jsx";
// import { owners, typesData } from "../../assets/data/staticData";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import Attachments from "../shared/Attacments.jsx";
import { useParams } from "react-router-dom";
import { fetchOwners } from "../../store/actions/Owner/ownerActions.js";
import { fetchTypes } from "../../store/actions/Types/typeActions.js";
import {
  addProject,
  editProject,
  fetchProject,
} from "../../store/actions/projects/projectActions.js";
import { toast } from "react-toastify";
import moment from "moment";
import { isObjectNotEmpty } from "../../helpers/checkers.js";
import formattedDate from "../../helpers/formattedDate.js";
import Loading from "../shared/Loading/Loading.jsx";
import Table from "../shared/Table.jsx";
// import { payments } from "../../assets/data/staticData.js";

const AddProject = () => {
  const { isDark } = useSelector((state) => state.modeReducer);
  const { owners } = useSelector((state) => state.ownerReducer);
  const { types } = useSelector((state) => state.typeReducer);
  const { project, isLoading } = useSelector((state) => state.projectReducer);
  const [payments, setPayments] = useState([
    {
      _id: "1",
      payment: "You have a new friend request.",
      date: "unread",
    },
  ]);
  const params = useParams();
  const getIconColor = () => (isDark ? "#eee" : "#000000");
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [itemsPerPage] = useState(10);

  const ownerOptions = owners?.list?.map((owner) => ({
    ...owner,
    value: owner?._id,
    label: `${owner?.name} `,
    image: owner?.profile_img,
  }));

  const typesOptions = types?.map((type) => ({
    ...type,
    value: type?._id,
    label: `${type?.name}`,
  }));

  const formik = useFormik({
    initialValues: {
      project_img: null,
      project_name: "",
      ref_number_old: "",
      client_id: "",
      type_id: "",
      payment: null,
      received: [{ amount: "", date: "" }],
      balance: null,
      // balance_date: "",
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
      attachments: null,
    },
    validationSchema: Yup.object({
      project_name: Yup.string().min(2).required("required"),
      ref_number_old: Yup.string().matches(
        /^FES-\d+-\d+$/,
        "Invalid ref number format. It should match the pattern FES-###-###."
      ),
      client_id: Yup.string().length(24).required("required"),
      type_id: Yup.string().length(24).required("required"),
      payment: Yup.number()
        .required("required")
        .min(Yup.ref("received"), "Payment must be greater than Received"),
      received: Yup.array()
        .of(
          Yup.object().shape({
            amount: Yup.number()
              .required("required")
              .min(0, "Received must be a positive number"),
            date: Yup.date().required("required"),
          })
        )
        .required("required"),
      // balance_date: Yup.date(),
      contract_expiry_date: Yup.date().required("required"),
      register_contract_date: Yup.date(),
      internal_contract_date: Yup.date().required("required"),
      istefa_certificate: Yup.string().trim().required("required"),
      first_visit: Yup.date().required("required"),
      second_visit: Yup.date().required("required"),
      third_visit: Yup.date().required("required"),
      fourth_visit: Yup.date().required("required"),
      stickers: Yup.date(),
      file_number: Yup.string().trim(),
      // attachments: Yup.array().max(10, "You can only upload up to 10 files"),
    }),
    onSubmit: (values) => {
      console.log("values========================>>", JSON.stringify(values));
      if (params?.projectId) {
        // handleEdit(values, params?.projectId);
      } else {
        handleAdd(values);
      }
    },
  });
  // const handleEdit = (values, projectId) => {
  //   const formData = new FormData();
  //   if (values.project_img) {
  //     formData.append("project_img", values.project_img);
  //   }
  //   if (values.istefa_certificate_date) {
  //     formData.append(
  //       "istefa_certificate_date",
  //       values.istefa_certificate_date
  //     );
  //   }
  //   if (values.hasantak_certificate_date) {
  //     formData.append(
  //       "hasantak_certificate_date",
  //       values.hasantak_certificate_date
  //     );
  //   }
  //   if (values.comment) {
  //     formData.append("comment", values.comment);
  //   }
  //   if (values.file_number) {
  //     formData.append("file_number", values.file_number);
  //   }

  //   if (values.attachments && values.attachments.length > 0) {
  //     formData.append("attachments", values.attachments);
  //   }
  //   if (values.balance_date) {
  //     formData.append("balance_date", values.balance_date);
  //   }

  //   if (values.ref_number_old) {
  //     formData.append("ref_number_old", values.ref_number_old);
  //   }
  //   if (values.stickers) {
  //     formData.append("stickers", values.stickers);
  //   }
  //   formData.append("project_name", values.project_name);
  //   formData.append("client_id", values.client_id);
  //   formData.append("type_id", values.type_id);
  //   formData.append("payment", values.payment);
  //   formData.append("received", values.received);
  //   formData.append("balance", values.balance);
  //   formData.append("contract_expiry_date", values.contract_expiry_date);
  //   formData.append("internal_contract_date", values.internal_contract_date);
  //   formData.append("istefa_certificate", values.istefa_certificate);
  //   formData.append("first_visit", values.first_visit);
  //   formData.append("second_visit", values.second_visit);
  //   formData.append("third_visit", values.third_visit);
  //   formData.append("fourth_visit", values.fourth_visit);
  //   formData.append("ref", values.fourth_visit);
  //   dispatch(editProject);
  // };

  const handleAdd = (values) => {
    const formData = new FormData();

    if (values.project_img) {
      formData.append("project_img", values.project_img);
    }
    if (values.istefa_certificate_date) {
      formData.append(
        "istefa_certificate_date",
        values.istefa_certificate_date
      );
    }
    if (values.hasantak_certificate_date) {
      formData.append(
        "hasantak_certificate_date",
        values.hasantak_certificate_date
      );
    }
    if (values.comment) {
      formData.append("comment", values.comment);
    }
    if (values.file_number) {
      formData.append("file_number", values.file_number);
    }

    if (values.attachments) {
      values.attachments.forEach((attachment) =>
        formData.append("attachments", attachment)
      );
      // formData.append("attachments", values.attachments);
    }
    if (values.balance_date) {
      formData.append("balance_date", values.balance_date);
    }

    if (values.ref_number_old) {
      formData.append("ref_number_old", values.ref_number_old);
    }
    if (values.stickers) {
      formData.append("stickers", values.stickers);
    }
    formData.append("project_name", values.project_name);
    formData.append("client_id", values.client_id);
    formData.append("type_id", values.type_id);
    formData.append("payment", values.payment);
    formData.append("received", values.received);
    formData.append("balance", values.balance);
    formData.append("contract_expiry_date", values.contract_expiry_date);
    formData.append("internal_contract_date", values.internal_contract_date);
    formData.append("istefa_certificate", values.istefa_certificate);
    formData.append("first_visit", values.first_visit);
    formData.append("second_visit", values.second_visit);
    formData.append("third_visit", values.third_visit);
    formData.append("fourth_visit", values.fourth_visit);

    dispatch(addProject({ formData, toast }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file && file instanceof Blob) {
      formik.setFieldValue("project_img", file);
      const imageUrl = URL.createObjectURL(file);
      formik.setFieldValue("imageUrl", imageUrl);
    }
  };
  const handleOwnerChange = (selectedOption) => {
    formik.setFieldValue("client_id", selectedOption?.value);
  };

  const handleTypeChange = (selectedOption) => {
    formik.setFieldValue("type_id", selectedOption?.value);
  };

  const handleAttachmentsChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    console.log("selectedFiles ====>", selectedFiles);
    formik.setFieldValue("attachments", selectedFiles);
  };
  // to get project data
  useEffect(() => {
    if (params?.projectId) {
      dispatch(fetchProject(params?.projectId));
    }
  }, []);

  // to bind project data
  // =================================
  useEffect(() => {
    if (isObjectNotEmpty(project) && params?.projectId) {
      if (project?.project_img) {
        formik.setFieldValue("imageUrl", project?.project_img);
      }

      if (project?.istefa_certificate_date) {
        formik.setFieldValue(
          "istefa_certificate_date",
          formattedDate(project?.istefa_certificate_date)
        );
      }
      if (project?.hasantak_certificate_date) {
        formik.setFieldValue(
          "hasantak_certificate_date",
          formattedDate(project?.hasantak_certificate_date)
        );
      }
      if (project?.comment) {
        formik.setFieldValue("comment", project?.comment);
      }
      if (project?.file_number) {
        formik.setFieldValue("file_number", project?.file_number);
      }

      if (project?.attachments && project?.attachments.length > 0) {
        formik.setFieldValue("attachments", project?.attachments);
      }
      if (project?.balance_date) {
        formik.setFieldValue(
          "balance_date",
          formattedDate(project?.balance_date)
        );
      }

      if (project?.ref_number_old) {
        formik.setFieldValue("ref_number_old", project?.ref_number_old);
      }
      if (project?.stickers) {
        formik.setFieldValue("stickers", project?.stickers);
      }

      formik.setFieldValue("project_name", project?.project_name);
      formik.setFieldValue("client_id", project?.client_id);
      formik.setFieldValue("type_id", project?.type_id);
      formik.setFieldValue("payment", project?.payment);
      formik.setFieldValue("received", project?.received);
      formik.setFieldValue("balance", project?.balance);
      formik.setFieldValue(
        "contract_expiry_date",
        formattedDate(project?.contract_expiry_date)
      );
      formik.setFieldValue(
        "internal_contract_date",
        formattedDate(project?.internal_contract_date)
      );

      console.log(
        "project?.internal_contract_date ==>",
        project?.internal_contract_date
      );
      formik.setFieldValue("istefa_certificate", project?.istefa_certificate);
      formik.setFieldValue("first_visit", project?.first_visit);
      formik.setFieldValue("second_visit", project?.second_visit);
      formik.setFieldValue("third_visit", project?.third_visit);
      formik.setFieldValue("fourth_visit", project?.fourth_visit);
    }
  }, [project]);

  // ===============================================================================

  // to get owners
  useEffect(() => {
    dispatch(
      fetchOwners({
        page: currentPage,
        limit: itemsPerPage,
        search: searchTerm,
      })
    );
  }, [dispatch, currentPage, itemsPerPage, searchTerm]);
  // to get types
  useEffect(() => {
    dispatch(
      fetchTypes({
        page: currentPage,
        limit: itemsPerPage,
        search: searchTerm,
      })
    );
  }, [dispatch, currentPage, itemsPerPage, searchTerm]);

  //  to calc expire date and internal date and four visits
  useEffect(() => {
    if (!isObjectNotEmpty(project) || params?.ownerId) {
      const currentDate = moment().format("YYYY-MM-DD");
      const newExpiryDate = moment().add(1, "year").format("YYYY-MM-DD");
      const newInternalContractDate = moment()
        .add(1, "year")
        .format("YYYY-MM-DD");

      formik.setFieldValue("register_contract_date", currentDate);
      formik.setFieldValue("contract_expiry_date", newExpiryDate);
      formik.setFieldValue("internal_contract_date", newInternalContractDate);

      const firstVisitDate = moment().add(3, "months").format("YYYY-MM-DD");
      const secondVisitDate = moment().add(6, "months").format("YYYY-MM-DD");
      const thirdVisitDate = moment().add(9, "months").format("YYYY-MM-DD");
      const fourthVisitDate = moment().add(12, "months").format("YYYY-MM-DD");

      formik.setFieldValue("first_visit", firstVisitDate);
      formik.setFieldValue("second_visit", secondVisitDate);
      formik.setFieldValue("third_visit", thirdVisitDate);
      formik.setFieldValue("fourth_visit", fourthVisitDate);
    }
  }, []);

  // to calc payments
  useEffect(() => {
    const calculateBalance = () => {
      const { payment, received } = formik.values;
      const totalReceived = received.reduce(
        (sum, item) => sum + (item.amount || 0),
        0
      );
      const balance = payment - totalReceived;
      formik.setFieldValue("balance", balance);
    };

    calculateBalance();
  }, [formik.values.payment, formik.values.received, formik.values.amount]);

  useEffect(() => {
    if (params?.ownerId) {
      formik.setFieldValue("client_id", params.ownerId);
    }
  }, [params.ownerId]);

  const customComponents = {
    Option: ({ innerRef, innerProps, data }) => (
      <div ref={innerRef} {...innerProps} className={`flex items-center`}>
        <img
          src={data?.profile_img || userImg}
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

  const addNewRow = () => {
    formik.setFieldValue("received", [
      ...formik.values.received,
      { amount: "", date: "" },
    ]);
  };
  const deleteRow = (rowIndex) => {
    const updatedReceived = formik.values.received.filter(
      (_, index) => index !== rowIndex
    );
    formik.setFieldValue("received", updatedReceived);
  };

  const columns = [
    {
      render: (row, rowIndex) =>
        rowIndex > 0 && (
          <button
            onClick={() => deleteRow(rowIndex)}
            className=" font-bold border text-xl rounded-full   p-5 w-3 h-3 flex items-center justify-center"
          >
            -
          </button>
        ),
      headerButton: () => (
        <button
          onClick={addNewRow}
          className="ml-2 font-bold border text-xl rounded-full me-4 p-5 w-3 h-3 flex items-center justify-center"
        >
          +
        </button>
      ),
    },
    {
      header: "Received",
      render: (row, rowIndex) => (
        <FormField
          id={`received[${rowIndex}].amount`}
          type="number"
          formik={formik}
          placeholder={`received-${rowIndex + 1}`}
          height={"h-fit"}
        />
      ),
    },
    {
      header: "Received Date",
      render: (row, rowIndex) => (
        <div className="flex items-center">
          <FormField
            id={`received[${rowIndex}].date`}
            type="date"
            formik={formik}
            height={"h-fit"}
          />
        </div>
      ),
    },
  ];

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
            isDisabled={"disapled"}
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
            id="balance"
            label="Balance"
            type="number"
            formik={formik}
            isDisabled={true}
          />
        </div>
        {/* <FormField
          id="received"
          label="Received"
          type="number"
          formik={formik}
        />
        <FormField
          id="balance_date"
          label="Balance date"
          type="date"
          formik={formik}
        />  */}
        <Table cols={columns} rows={formik.values.received} />
        <TextArea id="comment" label="Comment" formik={formik} />
        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 mx-auto block mt-5"
        >
          {isLoading ? <Loading /> : "Add project "}
        </button>
      </form>
    </div>
  );
};

export default AddProject;
