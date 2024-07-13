<<<<<<< HEAD
import React from "react";
import { useSelector } from "react-redux";
import userimg from "../../assets/imgs/ic-user.png";

const SingleProject = () => {
  const { isDark } = useSelector((state) => state.modeReducer);
  const files = [
    { name: "Image 1", imageUrl: userimg, downloadUrl: "path-to-file1" },
    { name: "Image 2", imageUrl: userimg, downloadUrl: "path-to-file2" },
    { name: "Image 3", imageUrl: userimg, downloadUrl: "path-to-file3" },
  ];
  const payments = [
    {
      id: 1,
      amount: 200,
      date: "17/3/6",
      paid: true,
    },
    {
      id: 2,
      amount: 800,
      date: "17/3/2015",
      paid: false,
    },
  ];
  return (
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
                // src={userimg}
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
                <h2 className="text-lg font-semibold">Name : </h2>
                <p>Project Name</p>
              </div>
              <div className={`${isDark ? "text-white" : "text-black"}`}>
                <h2 className="text-lg font-semibold">Type : </h2>
                <p>PRoject Type</p>
              </div>
              <div className={`${isDark ? "text-white" : "text-black"}`}>
                <h2 className="text-lg font-semibold">Ref number : </h2>
                <p>Info about Title 3</p>
              </div>
              <div className={`${isDark ? "text-white" : "text-black"}`}>
                <h2 className="text-lg font-semibold">Old Ref number :</h2>
                <p>Info about Title 4</p>
              </div>
              <div className={`${isDark ? "text-white" : "text-black"}`}>
                <h2 className="text-lg font-semibold">File number : </h2>
                <p>A4564</p>
=======
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProject } from "../../store/actions/projects/projectActions";
import Loading from "../shared/Loading/Loading";

const SingleProject = () => {
  const { isDark } = useSelector((state) => state.modeReducer);
  const { projectId } = useParams();
  const { isLoading, project, error } = useSelector((state) => state.projectReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      fetchProject(projectId)
    );
  }, [dispatch]);
  // console.log(project);
  // console.log(error);
  ;

  const formatDate = (date) => {
    const dateObj = new Date(date);
    const year = dateObj.getUTCFullYear();
    const month = (dateObj.getUTCMonth() + 1).toString().padStart(2, '0');
    const day = dateObj.getUTCDate().toString().padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  }

  return (

    <section>
      {isLoading ? <Loading /> : <section>

        <div className="flex flex-wrap md:flex-nowrap space-x-0 md:space-x-4 mt-8 mb-8">
          <div
            className={`w-full md:w-1/2 ${isDark ? "bg-" : "bg-gray-100"} ${isDark ? "text-white" : "text-black"
              } border-4 rounded p-4 `}
          >
            <div className="flex flex-col lg:flex-row  md:items-start p-4 h-full">
              <div className=" h-full w-80 lg:w-1/2 flex  lg:justify-start">
                <img
                  src={project.project_img}
                  alt=""
                  className="  h-full  w-3/4 sm:w-full   rounded-lg shadow-lg border-2 border-gray-200"
                />
              </div>
              <div
                className={`w-full lg:w-1/2 mt-4 md:mt-0 md:ml-4 p-4 ${isDark ? "bg-gray-100" : "bg-gray-800"
                  }shadow-md rounded-lg space-y-4`}
              >
                <div className={`${isDark ? "text-white" : "text-black"}`}>
                  <h2 className="text-lg font-semibold">Project Name : </h2>
                  <p>{project.project_name}</p>
                </div>
                <div className={`${isDark ? "text-white" : "text-black"}`}>
                  <h2 className="text-lg font-semibold">Type : </h2>
                  <p>{project.type_id.name}</p>
                </div>
                <div className={`${isDark ? "text-white" : "text-black"}`}>
                  <h2 className="text-lg font-semibold">Ref number : </h2>
                  <p>{project.ref_number}</p>
                </div>
                <div className={`${isDark ? "text-white" : "text-black"}`}>
                  <h2 className="text-lg font-semibold">Old Ref number :</h2>
                  <p>{project.ref_number_old}</p>
                </div>
                <div className={`${isDark ? "text-white" : "text-black"}`}>
                  <h2 className="text-lg font-semibold">File number : </h2>
                  <p>{project.file_number}</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`w-full md:w-1/2 ${isDark ? "bg-" : "bg-gray-100"} ${isDark ? "text-white" : "text-black"
              } border-4 rounded p-4 mt-4 md:mt-0`}
          >
            <div
              className={`w-full lg:w-1/2 mt-4 md:mt-0 md:ml-4 p-4 ${isDark ? "bg-gray-100" : "bg-gray-800"
                }shadow-md rounded-lg space-y-4`}
            >
              <div className={`${isDark ? "text-white" : "text-black"}`}>
                <h2 className="text-lg font-semibold">CD exp date : </h2>
                <p>{formatDate(project.contract_expiry_date)}</p>
              </div>
              <div className={`${isDark ? "text-white" : "text-black"}`}>
                <h2 className="text-lg font-semibold">internal exp date : </h2>

                <p>{formatDate(project.internal_contract_date)}</p>
              </div>
              <div className={`${isDark ? "text-white" : "text-black"}`}>
                <h2 className="text-lg font-semibold">Stickers exp date : </h2>

                <p>{formatDate(project.stickers)}</p>
              </div>
              <div className={`${isDark ? "text-white" : "text-black"}`}>
                <h2 className="text-lg font-semibold">Hasantak exp date :</h2>

                <p>{formatDate(project.hasantak_certificate_date)}</p>
>>>>>>> 5668ca8 (Initial commit)
              </div>
            </div>
          </div>
        </div>
<<<<<<< HEAD
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
              <p>2024/4/41</p>
            </div>
            <div className={`${isDark ? "text-white" : "text-black"}`}>
              <h2 className="text-lg font-semibold">internal exp date : </h2>
              <p>2024/4/41</p>
            </div>
            <div className={`${isDark ? "text-white" : "text-black"}`}>
              <h2 className="text-lg font-semibold">Stickers exp date : </h2>
              <p>2024/4/41</p>
            </div>
            <div className={`${isDark ? "text-white" : "text-black"}`}>
              <h2 className="text-lg font-semibold">Hasantak exp date :</h2>
              <p>2024/4/41</p>
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
              <p>2024/4/41</p>
            </div>
            <div className={`${isDark ? "text-white" : "text-black"}`}>
              <h2 className="text-lg font-semibold">Second visit date : </h2>
              <p>2024/4/41</p>
            </div>
            <div className={`${isDark ? "text-white" : "text-black"}`}>
              <h2 className="text-lg font-semibold">Third visit date : </h2>
              <p>2024/4/41</p>
            </div>
            <div className={`${isDark ? "text-white" : "text-black"}`}>
              <h2 className="text-lg font-semibold">Fourth visit date :</h2>
              <p>2024/4/41</p>
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
              <h2 className="text-lg font-semibold">ISTEFA Certificate : </h2>
              <p>text text text</p>
            </div>
            <div className={`${isDark ? "text-white" : "text-black"}`}>
              <h2 className="text-lg font-semibold">ISTEFA exp date : </h2>
              <p>2024/4/41</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap md:flex-nowrap space-x-0 md:space-x-4 mt-8 mb-8">
        <div
          className={`w-full  ${isDark ? "bg-" : "bg-gray-100"} ${
            isDark ? "text-white" : "text-black"
          } border-4 rounded p-4 mt-4 md:mt-0`}
        >
          <div
            className={`w-full  mt-4 md:mt-0 md:ml-4 p-4 ${
              isDark ? "bg-gray-100" : "bg-gray-800"
            }shadow-md rounded-lg space-y-4`}
          >
            <div className={`${isDark ? "text-white" : "text-black"}`}>
              <div
                className={`${isDark ? "bg-gray-800" : "bg-gray-100"} ${
                  isDark ? "text-white" : "text-black"
                } `}
              >
                <div className="w-full max-w-md  rounded-lg p-6">
                  <h2 className="text-2xl font-semibold mb-4">
                    Download Files
                  </h2>
                  <ul className="space-y-4">
                    {files.map((file, index) => (
                      <li
                        key={index}
                        className={`flex items-center justify-between   rounded-lg `}
                      >
                        <a href={file.downloadUrl} download>
                          <img
                            src={file.imageUrl}
                            alt={file.name}
                            className="w-14 h-14  mr-2 cursor-pointer rounded"
                          />
                        </a>
                        <a
                          href={file.url}
                          download
                          className="text-blue-500 hover:text-blue-700 font-semibold"
                        >
                          Download
                        </a>
                      </li>
                    ))}
                  </ul>
=======
        <div className="flex flex-wrap md:flex-nowrap space-x-0 md:space-x-4 mt-8 mb-8">
          <div
            className={`w-full md:w-1/2 ${isDark ? "bg-" : "bg-gray-100"} ${isDark ? "text-white" : "text-black"
              } border-4 rounded p-4 mt-4 md:mt-0`}
          >
            <div
              className={`w-full lg:w-1/2 mt-4 md:mt-0 md:ml-4 p-4 ${isDark ? "bg-gray-100" : "bg-gray-800"
                }shadow-md rounded-lg space-y-4`}
            >
              <div className={`${isDark ? "text-white" : "text-black"}`}>
                <h2 className="text-lg font-semibold">First visit date : </h2>
                <p>{formatDate(project.first_visit)}</p>
              </div>
              <div className={`${isDark ? "text-white" : "text-black"}`}>
                <h2 className="text-lg font-semibold">Second visit date : </h2>
                <p>{formatDate(project.second_visit)}</p>
              </div>
              <div className={`${isDark ? "text-white" : "text-black"}`}>
                <h2 className="text-lg font-semibold">Third visit date : </h2>
                <p>{formatDate(project.third_visit)}</p>
              </div>
              <div className={`${isDark ? "text-white" : "text-black"}`}>
                <h2 className="text-lg font-semibold">Fourth visit date :</h2>
                <p>{formatDate(project.fourth_visit)}</p>
              </div>
            </div>
          </div>
          <div
            className={`w-full md:w-1/2 ${isDark ? "bg-" : "bg-gray-100"} ${isDark ? "text-white" : "text-black"
              } border-4 rounded p-4 mt-4 md:mt-0`}
          >
            <div
              className={`w-full lg:w-1/2 mt-4 md:mt-0 md:ml-4 p-4 ${isDark ? "bg-gray-100" : "bg-gray-800"
                }shadow-md rounded-lg space-y-4`}
            >
              <div className={`${isDark ? "text-white" : "text-black"}`}>
                <h2 className="text-lg font-semibold">ISTEFA Certificate : </h2>
                <p>{project.istefa_certificate}</p>
              </div>
              <div className={`${isDark ? "text-white" : "text-black"}`}>
                <h2 className="text-lg font-semibold">ISTEFA exp date : </h2>
                <p>{formatDate(project.istefa_certificate_date)}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap md:flex-nowrap space-x-0 md:space-x-4 mt-8 mb-8">
          <div
            className={`w-full  ${isDark ? "bg-" : "bg-gray-100"} ${isDark ? "text-white" : "text-black"
              } border-4 rounded p-4 mt-4 md:mt-0`}
          >
            <div
              className={`w-full  mt-4 md:mt-0 md:ml-4 p-4 ${isDark ? "bg-gray-100" : "bg-gray-800"
                }shadow-md rounded-lg space-y-4`}
            >
              <div className={`${isDark ? "text-white" : "text-black"}`}>
                <div
                  className={`${isDark ? "bg-gray-800" : "bg-gray-100"} ${isDark ? "text-white" : "text-black"
                    } `}
                >
                  <div className="w-full max-w-md  rounded-lg p-6">
                    <h2 className="text-2xl font-semibold mb-4">
                      Download Files
                    </h2>
                    <ul className="space-y-4">
                      {project.attachments && project.attachments.map((file, index) => (
                        <li
                          key={index}
                          className={`flex items-center justify-between   rounded-lg `}
                        >
                          <a href={file.downloadUrl} download>
                            <img
                              src={''}
                              alt={''}
                              className="w-14 h-14  mr-2 cursor-pointer rounded"
                            />
                          </a>
                          <a
                            href={file}
                            download
                            className="text-blue-500 hover:text-blue-700 font-semibold"
                          >
                            Download
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
>>>>>>> 5668ca8 (Initial commit)
                </div>
              </div>
            </div>
          </div>
        </div>
<<<<<<< HEAD
      </div>

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
              <p>1000</p>
            </div>
            <div className={`${isDark ? "text-white" : "text-black"}`}>
              <h2 className="text-lg font-semibold">Received : </h2>
              <p>200</p>
            </div>
            <div className={`${isDark ? "text-white" : "text-black"}`}>
              <h2 className="text-lg font-semibold">Balance : </h2>
              <p>800</p>
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
              <thead className={`${isDark ? "bg-gray-800" : "bg-gray-100"}`}>
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
                {payments.map((payment) => (
                  <tr
                    key={payment.id}
                    className={`${isDark ? "bg-gray-800" : "bg-gray-100"}`}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      {payment.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {payment.amount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {payment.date}
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      {payment.paid === true ? "paid" : "not paid"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
=======

        <div className="flex flex-wrap md:flex-nowrap space-x-0 md:space-x-4 mt-8 mb-8">
          <div
            className={`w-full md:w-1/3 ${isDark ? "bg-" : "bg-gray-100"} ${isDark ? "text-white" : "text-black"
              } border-4 rounded p-4 mt-4 md:mt-0`}
          >
            <div
              className={`w-full lg:w-1/2 mt-4 md:mt-0 md:ml-4 p-4 ${isDark ? "bg-gray-100" : "bg-gray-800"
                }shadow-md rounded-lg space-y-4`}
            >
              <div className={`${isDark ? "text-white" : "text-black"}`}>
                <h2 className="text-lg font-semibold">Total : </h2>
                <p>{project.payment && project.payment.payment}</p>

              </div>
              <div className={`${isDark ? "text-white" : "text-black"}`}>
                <h2 className="text-lg font-semibold">Received : </h2>
                <p>{project.payment && project.payment.received}</p>
              </div>
              <div className={`${isDark ? "text-white" : "text-black"}`}>
                <h2 className="text-lg font-semibold">Balance : </h2>
                <p>{project.payment && (project.payment.payment - project.payment.received)}</p>
              </div>
            </div>
          </div>
          <div
            className={`w-full md:w-2/3 ${isDark ? "bg-" : "bg-gray-100"} ${isDark ? "text-white" : "text-black"
              } border-4 rounded p-4 mt-4 md:mt-0`}
          >
            <div
              className={`w-full lg:w-1/2 mt-4 md:mt-0 md:ml-4 p-4 ${isDark ? "bg-gray-100" : "bg-gray-800"
                }shadow-md rounded-lg space-y-4`}
            >
              <table className="min-w-full divide-y divide-gray-100">
                <thead className={`${isDark ? "bg-gray-800" : "bg-gray-100"}`}>
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
                  {project.payment && project.payment && project.payment && project.payment.balances.map((payment, index) => (
                    <tr
                      key={payment._id}
                      className={`${isDark ? "bg-gray-800" : "bg-gray-100"}`}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {payment.balance_amount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {formatDate(payment.balance_date)}

                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        {payment.balance_status === true ? "paid" : "not paid"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>}
>>>>>>> 5668ca8 (Initial commit)
    </section>
  );
};

export default SingleProject;
