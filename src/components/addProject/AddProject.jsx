import { useDispatch, useSelector } from "react-redux";
import ImageComponent from "../shared/ImageComponent";
import userImg from "../../assets/imgs/ic-user.png";
import { useFormik } from "formik";
import FormField from "../shared/FormField";
import SelectInput from "../shared/SelectInput";
import TextArea from "../shared/TextArea.jsx";

import { useEffect, useState } from "react";
import Attachments from "../shared/Attacments.jsx";
import { useNavigate, useParams } from "react-router-dom";
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
import Loading from "../shared/Loading/Loading.jsx";
import Table from "../shared/Table.jsx";
import validationSchema from "./schemaValidation.js";

const AddProject = () => {
  const { isDark } = useSelector((state) => state.modeReducer);
  const { owners } = useSelector((state) => state.ownerReducer);
  const { types } = useSelector((state) => state.typeReducer);
  const { project, isLoading } = useSelector((state) => state.projectReducer);
  const navigate = useNavigate();
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
      payment: 0,
      received: 0,
      balances: [{ balance_amount: 0, balance_date: "" }],
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
      ref_number: "",
    },
    validationSchema: validationSchema(params),
    onSubmit: (values) => {
      if (params?.projectId) {
        handleEdit(values, params?.projectId);
      } else {
        handleAdd(values);
      }
    },
  });
  const handleEdit = (values) => {
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
    formData.append("contract_expiry_date", values.contract_expiry_date);
    formData.append("internal_contract_date", values.internal_contract_date);
    formData.append("istefa_certificate", values.istefa_certificate);
    formData.append("first_visit", values.first_visit);
    formData.append("second_visit", values.second_visit);
    formData.append("third_visit", values.third_visit);
    formData.append("fourth_visit", values.fourth_visit);
    formData.append("ref_number", values.ref_number);

    dispatch(editProject(formData, toast, params?.projectId, navigate));
  };

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
    }

    if (values.ref_number_old) {
      formData.append("ref_number_old", values.ref_number_old);
    }
    if (values.stickers) {
      formData.append("stickers", values.stickers);
    }
    formData.append("payment", values.payment);
    formData.append("received", values.received);
    if (values.balances.length > 0) {
      if (
        values.balances.length === 1 &&
        values.balances[0].balance_amount > 0
      ) {
        values.balances.forEach((balance)=>{
          formData.append("balances", balance);

        } )
      } else if (values.balances.length > 1) {
        values.balances.forEach((balance)=>{
          formData.append("balances",balance);

        } )
      }
    }

    formData.append("project_name", values.project_name);
    formData.append("client_id", values.client_id);
    formData.append("type_id", values.type_id);
    formData.append("contract_expiry_date", values.contract_expiry_date);
    formData.append("internal_contract_date", values.internal_contract_date);
    formData.append("istefa_certificate", values.istefa_certificate);
    formData.append("first_visit", values.first_visit);
    formData.append("second_visit", values.second_visit);
    formData.append("third_visit", values.third_visit);
    formData.append("fourth_visit", values.fourth_visit);
    //
    dispatch(
      addProject({ formData, toast, navigate, ownerId: values.client_id })
    );
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
    formik.setFieldValue("attachments", selectedFiles);
  };
  // to get project data
  useEffect(() => {
    dispatch(fetchProject(params?.projectId));
  }, [dispatch]);

  useEffect(() => {
    if (params?.projectId && isObjectNotEmpty(project)) {
      console.log("project ===>", project);
      console.log("projectId ===>", params?.projectId);
      if (project?.project_img) {
        formik.setFieldValue("imageUrl", project?.project_img);
      }

      if (project?.istefa_certificate_date) {
        formik.setFieldValue(
          "istefa_certificate_date",
          moment(project?.istefa_certificate_date).format("YYYY-MM-DD")
        );
      }
      if (project?.hasantak_certificate_date) {
        formik.setFieldValue(
          "hasantak_certificate_date",
          moment(project?.hasantak_certificate_date).format("YYYY-MM-DD")
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

      if (project?.ref_number_old) {
        formik.setFieldValue("ref_number_old", project?.ref_number_old);
      }
      if (project?.ref_number) {
        formik.setFieldValue("ref_number", project?.ref_number);
      }
      if (project?.stickers) {
        formik.setFieldValue("stickers", project?.stickers);
      }

      formik.setFieldValue("project_name", project?.project_name);
      formik.setFieldValue("client_id", project?.client_id);
      formik.setFieldValue("type_id", project?.type_id?._id);

      formik.setFieldValue(
        "contract_expiry_date",
        moment(project?.contract_expiry_date).format("YYYY-MM-DD")
      );
      formik.setFieldValue(
        "internal_contract_date",
        moment(project?.internal_contract_date).format("YYYY-MM-DD")
      );

      if (project?.istefa_certificate_date) {
        formik.setFieldValue(
          "istefa_certificate_date",
          moment(project?.istefa_certificate_date).format("YYYY-MM-DD")
        );
      }
      if (project?.hasantak_certificate_date) {
        formik.setFieldValue(
          "hasantak_certificate_date",
          moment(project?.hasantak_certificate_date).format("YYYY-MM-DD")
        );
      }
      if (project?.stickers) {
        formik.setFieldValue(
          "stickers",
          moment(project?.stickers).format("YYYY-MM-DD")
        );
      }

      formik.setFieldValue("istefa_certificate", project?.istefa_certificate);
      formik.setFieldValue(
        "first_visit",
        moment(project?.first_visit).format("YYYY-MM-DD")
      );
      formik.setFieldValue(
        "second_visit",
        moment(project?.second_visit).format("YYYY-MM-DD")
      );
      formik.setFieldValue(
        "third_visit",
        moment(project?.third_visit).format("YYYY-MM-DD")
      );
      formik.setFieldValue(
        "fourth_visit",
        moment(project?.fourth_visit).format("YYYY-MM-DD")
      );
    } else {
      formik.setFieldValue("imageUrl", "");
      formik.setFieldValue("project_img", null);
      formik.setFieldValue("project_name", "");
      formik.setFieldValue("ref_number_old", "");
      formik.setFieldValue("client_id", "");
      formik.setFieldValue("type_id", "");
      formik.setFieldValue("payment", 0);
      formik.setFieldValue("received", 0);
      formik.setFieldValue("balances", [
        { balance_amount: 0, balance_date: "" },
      ]);

      formik.setFieldValue("istefa_certificate", "");
      formik.setFieldValue("istefa_certificate_date", "");
      formik.setFieldValue("hasantak_certificate_date", "");
      formik.setFieldValue("stickers", "");
      formik.setFieldValue("file_number", "");
      formik.setFieldValue("attachments", null);
      formik.setFieldValue("comment", "");
      // dispatch(clearproject());
    }
  }, [params?.projectId, project]);

  // to get owners
  useEffect(() => {
    dispatch(
      fetchOwners({
        page: currentPage,
        limit: itemsPerPage,
        search: searchTerm,
      })
    );
    dispatch(
      fetchTypes({
        page: currentPage,
        limit: itemsPerPage,
        search: searchTerm,
      })
    );
  }, []);
  // to get types

  useEffect(() => {
    let total_balances = 0;

    if (formik.values.balances && Array.isArray(formik.values.balances)) {
      total_balances = formik.values.balances.reduce((total, balance) => {
        return total + parseFloat(balance.balance_amount || 0);
      }, 0);
    }

    const received = parseFloat(formik.values.payment || 0) - total_balances;

    formik.setFieldValue("received", received);
  }, [formik.values.balances, formik.values.payment]);

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
    }
  }, []);

  const updateVisitDates = (firstVisitDate) => {
    const secondVisitDate = moment(firstVisitDate).add(3, "months");
    const thirdVisitDate = moment(firstVisitDate).add(6, "months");
    const fourthVisitDate = moment(firstVisitDate).add(9, "months");

    formik.setFieldValue("second_visit", secondVisitDate.format("YYYY-MM-DD"));
    formik.setFieldValue("third_visit", thirdVisitDate.format("YYYY-MM-DD"));
    formik.setFieldValue("fourth_visit", fourthVisitDate.format("YYYY-MM-DD"));
  };

  useEffect(() => {
    const firstVisitDate = moment().add(3, "months");
    formik.setFieldValue("first_visit", firstVisitDate.format("YYYY-MM-DD"));
    updateVisitDates(firstVisitDate);
  }, []);

  useEffect(() => {
    const firstVisitDate = formik.values.first_visit;
    if (firstVisitDate) {
      updateVisitDates(moment(firstVisitDate));
    }
  }, [formik.values.first_visit]);

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

  const addNewRow = (e) => {
    e.preventDefault();
    formik.setFieldValue("balances", [
      ...formik.values.balances,
      { balance_amount: 0, balance_date: "" },
    ]);
  };
  const deleteRow = (rowIndex) => {
    const oldData = formik.values.balances.filter(
      (_, index) => index !== rowIndex
    );

    const updatedReceived = [...oldData];

    formik.setFieldValue("balances", updatedReceived);
  };

  const handlePaymentChange = (event) => {
    formik.setFieldValue("payment", event.target.value);

    let total_balances = 0;
    if (formik.values.balances && Array.isArray(formik.values.balances)) {
      total_balances = formik.values.balances.reduce((total, balance) => {
        return total + parseFloat(balance.balance_amount || 0);
      }, 0);
    }

    const received = parseFloat(event.target.value || 0) - total_balances;
    formik.setFieldValue("received", received);
  };

  const columns = [
    {
      render: (row, rowIndex, rows) =>
        rowIndex === rows.length - 1 &&
        rowIndex !== 0 && (
          <button
            onClick={() => deleteRow(rowIndex)}
            className="font-bold border text-xl rounded-full p-5 w-3 h-3 flex items-center justify-center"
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
      header: "Balance Amount",
      render: (row, rowIndex, rows) => (
        <div className="flex items-center flex-col h-[50px]">
          <input
            name={`balances[${rowIndex}].balance_amount`}
            type="number"
            placeholder={`balance-${rowIndex + 1}`}
            className={`p-2 rounded md:w-full  focus:outline-none focus:ring-2 border focus:ring-blue-100 focus:shadow-lg transition duration-300 ease-in-out ${
              isDark ? "bg-gray-900 text-white" : "border"
            } `}
            min={0}
            value={formik.values.balances[rowIndex].balance_amount}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.balances &&
            formik.touched.balances[rowIndex] &&
            formik.errors.balances &&
            formik.errors.balances[rowIndex] &&
            formik.errors.balances[rowIndex].balance_amount && (
              <div className="text-red-500 text-sm text-start mt4">
                {formik.errors.balances[rowIndex].balance_amount}
              </div>
            )}
        </div>
      ),
    },
    {
      header: "Balance Date",
      render: (row, rowIndex, rows) => (
        <div className="flex items-center flex-col h-[50px]">
          <input
            name={`balances[${rowIndex}].balance_date`}
            type="date"
            className={`p-2 rounded md:w-full focus:outline-none focus:ring-2 border focus:ring-blue-100 focus:shadow-lg transition duration-300 ease-in-out ${
              isDark ? "bg-gray-900 text-white" : "border"
            } `}
            value={formik.values.balances[rowIndex].balance_date}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.balances &&
            formik.touched.balances[rowIndex] &&
            formik.errors.balances &&
            formik.errors.balances[rowIndex] &&
            formik.errors.balances[rowIndex].balance_date && (
              <div className="text-red-500 text-xs">
                {formik.errors.balances[rowIndex].balance_date}
              </div>
            )}
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
      {isLoading ? (
        <Loading />
      ) : (
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
          <>
            {!params.projectId ? (
              <>
                <h2 className="text-center font-bold text-xl"> Payments </h2>
                <div className="flex flex-wrap justify-between items-center">
                  <FormField
                    id="payment"
                    label="Payment"
                    type="number"
                    formik={formik}
                    handleChange={handlePaymentChange}
                  />
                  <FormField
                    id="received"
                    label="received"
                    type="number"
                    isDisabled={true}
                    formik={formik}
                  />
                </div>

                <Table cols={columns} rows={formik.values.balances} />
              </>
            ) : (
              <div
                className="mb-6 bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative text-center"
                role="alert"
              >
                To edit payments for this project, please go to the payment tab.
              </div>
            )}
          </>

          <TextArea id="comment" label="Comment" formik={formik} />
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 mx-auto block mt-5"
          >
            {isLoading ? (
              <Loading />
            ) : !params.projectId ? (
              "Add project "
            ) : (
              "Edit project"
            )}
          </button>
        </form>
      )}
    </div>
  );
};

export default AddProject;
