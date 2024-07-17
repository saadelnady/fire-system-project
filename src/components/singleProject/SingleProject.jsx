import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProject } from "../../store/actions/projects/projectActions";
import Loading from "../shared/Loading/Loading";
import { saveAs } from "file-saver";
import pdfImg from "../../assets/imgs/PDF_file_icon.svg.png";
import axios from "axios";
import { serverUrl } from "../../API/API";
import { toast } from "react-toastify";
import WarningLayOut from "../shared/WarningLayOut";
import userImg from "../../assets/imgs/ic-user.png";
import formattedDate from "../../helpers/formattedDate";

const SingleProject = () => {
  const { isDark } = useSelector((state) => state.modeReducer);
  const { projectId } = useParams();
  const { isLoading, project, error } = useSelector(
    (state) => state.projectReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProject(projectId));
  }, [dispatch]);
  console.log(project);

  const [activeModal, setActiveModel] = useState(false);
  const activeModalHandler = () => {
    setActiveModel(!activeModal);
  };
  const handleDeleteAttachment = async (file, project) => {
    try {
      const response = await axios({
        method: "patch",
        url: `${serverUrl}/v1/projects/attachments/delete/${project?._id}`,
        headers: {
          token: localStorage.getItem("TOKEN"),
        },
        data: {
          file, // Assuming the file object needs to be sent to identify which file to delete
        },
      });

      if (response.status === 200) {
        toast.success("Attachment deleted successfully");
        dispatch(fetchProject(project?._id));
      } else {
        console.error("Failed to delete attachment:", response.statusText);
      }
    } catch (error) {
      // Handle errors appropriately
      console.error("Error deleting attachment:", error);
    }
  };
  return (
    <section className="relative">
      {isLoading ? (
        <Loading />
      ) : (
        <section>
          <div className="flex flex-wrap md:flex-nowrap space-x-0 md:space-x-4 mt-8 mb-8">
            <div
              className={`w-full md:w-1/2 ${isDark ? "bg-" : "bg-gray-100"} ${
                isDark ? "text-white" : "text-black"
              } border-4 rounded p-4 `}
            >
              <div className="flex flex-col lg:flex-row  md:items-start p-4 h-full">
                <div className=" h-full w-80 lg:w-1/2 flex  lg:justify-start">
                  <img
                    src={project?.project_img || userImg}
                    alt=""
                    className="  h-full  w-3/4 sm:w-full   rounded-lg shadow-lg border-2 border-gray-200"
                  />
                </div>
                <div
                  className={`w-full lg:w-1/2 mt-4 md:mt-0 md:ml-4 p-4 ${
                    isDark ? "bg-gray-100" : "bg-gray-800"
                  }shadow-md rounded-lg space-y-4`}
                >
                  <div className={`${isDark ? "text-white" : "text-black"}`}>
                    <h2 className="text-lg font-semibold">Project Name : </h2>
                    <p>{project?.project_name}</p>
                  </div>
                  <div className={`${isDark ? "text-white" : "text-black"}`}>
                    <h2 className="text-lg font-semibold">Type : </h2>
                    <p>{project?.type_id && project?.type_id.name}</p>
                  </div>
                  <div className={`${isDark ? "text-white" : "text-black"}`}>
                    <h2 className="text-lg font-semibold">Ref number : </h2>
                    <p>{project?.ref_number}</p>
                  </div>
                  <div className={`${isDark ? "text-white" : "text-black"}`}>
                    <h2 className="text-lg font-semibold">Old Ref number :</h2>
                    <p>{project?.ref_number_old}</p>
                  </div>
                  <div className={`${isDark ? "text-white" : "text-black"}`}>
                    <h2 className="text-lg font-semibold">File number : </h2>
                    <p>{project?.file_number}</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`w-full md:w-1/2 ${isDark ? "bg-" : "bg-gray-100"} ${
                isDark ? "text-white" : "text-black"
              } border-4 rounded p-4 mt-4 md:mt-0`}
            >
              <div
                className={`w-full lg:w-1/2 mt-4 md:mt-0 md:ml-4 p-4 ${
                  isDark ? "bg-gray-100" : "bg-gray-800"
                }shadow-md rounded-lg space-y-4`}
              >
                <div className={`${isDark ? "text-white" : "text-black"}`}>
                  <h2 className="text-lg font-semibold">CD exp date : </h2>
                  <p>{formattedDate(project?.contract_expiry_date) || "__"}</p>
                </div>
                <div className={`${isDark ? "text-white" : "text-black"}`}>
                  <h2 className="text-lg font-semibold">internal exp date :</h2>

                  <p>
                    {formattedDate(project?.internal_contract_date) || "__"}
                  </p>
                </div>
                <div className={`${isDark ? "text-white" : "text-black"}`}>
                  <h2 className="text-lg font-semibold">
                    Stickers exp date :{" "}
                  </h2>

                  <p>{formattedDate(project?.stickers)}</p>
                </div>
                <div className={`${isDark ? "text-white" : "text-black"}`}>
                  <h2 className="text-lg font-semibold">Hasantak exp date :</h2>

                  <p>
                    {formattedDate(project?.hasantak_certificate_date) || "__"}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap md:flex-nowrap space-x-0 md:space-x-4 mt-8 mb-8">
            <div
              className={`w-full md:w-1/2 ${isDark ? "bg-" : "bg-gray-100"} ${
                isDark ? "text-white" : "text-black"
              } border-4 rounded p-4 mt-4 md:mt-0`}
            >
              <div
                className={`w-full lg:w-1/2 mt-4 md:mt-0 md:ml-4 p-4 ${
                  isDark ? "bg-gray-100" : "bg-gray-800"
                }shadow-md rounded-lg space-y-4`}
              >
                <div className={`${isDark ? "text-white" : "text-black"}`}>
                  <h2 className="text-lg font-semibold">First visit date : </h2>
                  <p>{formattedDate(project?.first_visit) || "__"}</p>
                </div>
                <div className={`${isDark ? "text-white" : "text-black"}`}>
                  <h2 className="text-lg font-semibold">
                    Second visit date :{" "}
                  </h2>
                  <p>{formattedDate(project?.second_visit) || "__"}</p>
                </div>
                <div className={`${isDark ? "text-white" : "text-black"}`}>
                  <h2 className="text-lg font-semibold">Third visit date : </h2>
                  <p>{formattedDate(project?.third_visit)}</p>
                </div>
                <div className={`${isDark ? "text-white" : "text-black"}`}>
                  <h2 className="text-lg font-semibold">Fourth visit date :</h2>
                  <p>{formattedDate(project?.fourth_visit) || "__"}</p>
                </div>
              </div>
            </div>
            <div
              className={`w-full md:w-1/2 ${isDark ? "bg-" : "bg-gray-100"} ${
                isDark ? "text-white" : "text-black"
              } border-4 rounded p-4 mt-4 md:mt-0`}
            >
              <div
                className={`w-full lg:w-1/2 mt-4 md:mt-0 md:ml-4 p-4 ${
                  isDark ? "bg-gray-100" : "bg-gray-800"
                }shadow-md rounded-lg space-y-4`}
              >
                <div className={`${isDark ? "text-white" : "text-black"}`}>
                  <h2 className="text-lg font-semibold">
                    ISTEFA Certificate :{" "}
                  </h2>
                  <p>{project?.istefa_certificate || "__"}</p>
                </div>
                <div className={`${isDark ? "text-white" : "text-black"}`}>
                  <h2 className="text-lg font-semibold">ISTEFA exp date : </h2>
                  <p>
                    {formattedDate(project?.istefa_certificate_date) || "__"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {project?.attachments && project?.attachments.length > 0 && (
            <div className="flex flex-wrap md:flex-nowrap space-x-0 md:space-x-4 mt-8 mb-8">
              <div
                className={`w-full ${isDark ? "bg-gray-800" : "bg-gray-100"} ${
                  isDark ? "text-white" : "text-black"
                } border-4 rounded p-4 mt-4 md:mt-0`}
              >
                <div
                  className={`${isDark ? "bg-gray-800" : "bg-gray-100"} ${
                    isDark ? "text-white" : "text-black"
                  }`}
                >
                  <div className="w-full   rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-4">
                      Download Project Attachments
                    </h2>
                    <ul className="flex justify-start flex-wrap ">
                      {project?.attachments.map((file, index) => (
                        <li
                          key={index}
                          className="flex flex-col items-center rounded-lg space-y-2 m-3"
                        >
                          {file.endsWith(".pdf") ? (
                            <a
                              href={file}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                src={pdfImg}
                                alt="PDF"
                                className="w-28 h-28 cursor-pointer rounded"
                              />
                            </a>
                          ) : (
                            <a
                              href={file}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                src={file}
                                alt=""
                                className="w-28 h-28 cursor-pointer rounded"
                              />
                            </a>
                          )}
                          <button
                            onClick={() => saveAs(file, `attachment-${index}`)}
                            className="text-blue-500 hover:text-blue-700 font-semibold flex items-center"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-6 h-6 mr-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2m-4-4l-4 4m0 0l-4-4m4 4V4"
                              />
                            </svg>
                            Download
                          </button>
                          <button
                            className="text-blue-500 hover:text-blue-700 font-semibold flex items-center justify-between"
                            onClick={() => {
                              activeModalHandler();
                            }}
                          >
                            <svg
                              viewBox="0 0 16 16"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              width="15px"
                              height="15px"
                              fill="#3f83f8"
                              className="cursor-pointer w-6 h-6 mr-1 text-blue-500 hover:text-blue-700 "
                            >
                              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                              <g
                                id="SVGRepo_tracerCarrier"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></g>
                              <g id="SVGRepo_iconCarrier">
                                <rect
                                  width="16"
                                  height="16"
                                  id="icon-bound"
                                  fill="none"
                                ></rect>
                                <polygon points="14.707,2.707 13.293,1.293 8,6.586 2.707,1.293 1.293,2.707 6.586,8 1.293,13.293 2.707,14.707 8,9.414 13.293,14.707 14.707,13.293 9.414,8 "></polygon>{" "}
                              </g>
                            </svg>
                            Delete
                          </button>
                          {activeModal && (
                            <WarningLayOut
                              activeModal={activeModal}
                              activeModalHandler={activeModalHandler}
                              handleDelete={() => {
                                handleDeleteAttachment(file, project);
                              }}
                            />
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="flex flex-wrap md:flex-nowrap space-x-0 md:space-x-4 mt-8 mb-8">
            <div
              className={`w-full md:w-1/3 ${isDark ? "bg-" : "bg-gray-100"} ${
                isDark ? "text-white" : "text-black"
              } border-4 rounded p-4 mt-4 md:mt-0`}
            >
              <div
                className={`w-full lg:w-1/2 mt-4 md:mt-0 md:ml-4 p-4 ${
                  isDark ? "bg-gray-100" : "bg-gray-800"
                }shadow-md rounded-lg space-y-4`}
              >
                <div className={`${isDark ? "text-white" : "text-black"}`}>
                  <h2 className="text-lg font-semibold">Total : </h2>
                  <p>{project?.payment && project?.payment.payment}</p>
                </div>
                <div className={`${isDark ? "text-white" : "text-black"}`}>
                  <h2 className="text-lg font-semibold">Received : </h2>
                  <p>{project?.payment && project?.payment.received}</p>
                </div>
                <div className={`${isDark ? "text-white" : "text-black"}`}>
                  <h2 className="text-lg font-semibold">Balance : </h2>
                  <p>
                    {project?.payment &&
                      project?.payment.payment - project?.payment.received}
                  </p>
                </div>
              </div>
            </div>
            <div
              className={`w-full md:w-2/3 ${isDark ? "bg-" : "bg-gray-100"} ${
                isDark ? "text-white" : "text-black"
              } border-4 rounded p-4 mt-4 md:mt-0`}
            >
              <div
                className={`w-full lg:w-1/2 mt-4 md:mt-0 md:ml-4 p-4 ${
                  isDark ? "bg-gray-100" : "bg-gray-800"
                }shadow-md rounded-lg space-y-4`}
              >
                <table className="min-w-full divide-y divide-gray-100">
                  <thead
                    className={`${isDark ? "bg-gray-800" : "bg-gray-100"}`}
                  >
                    <tr className={`${isDark ? "bg-gray-800" : "bg-gray-100"}`}>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        ID
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Amount
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>

                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Paid
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {project?.payment &&
                      project?.payment &&
                      project?.payment &&
                      project?.payment.balances.map((payment, index) => (
                        <tr
                          key={payment._id}
                          className={`${
                            isDark ? "bg-gray-800" : "bg-gray-100"
                          }`}
                        >
                          <td className="px-6 py-4 whitespace-nowrap">
                            {index + 1}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {payment.balance_amount}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {formattedDate(payment.balance_date)}
                          </td>

                          <td className="px-6 py-4 whitespace-nowrap">
                            {payment.balance_status === true
                              ? "paid"
                              : "not paid"}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      )}
    </section>
  );
};

export default SingleProject;
