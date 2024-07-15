import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Search from "../shared/Search";
import Table from "../shared/Table";
import Pagination from "../shared/Pagination";
import DropDownMenu from "../shared/DropDownMenu";
import DropdownItem from "../shared/DropdownItem";
import Icon from "../shared/Icon";
import { toast } from "react-toastify";
import ueseImg from "../../assets/imgs/ic-user.png";
import {
  deleteProject,
  fetchProjects,
} from "../../store/actions/projects/projectActions";
import formattedDate from "../../helpers/formattedDate";
import WarningLayOut from "../shared/WarningLayOut";
import { getData, serverUrl } from "../../API/API";
import axios from "axios";
import Loading from "../shared/Loading/Loading";

const Projects = () => {
  const getIconColor = () => (isDark ? "#eee" : "#000000");
  const { isDark } = useSelector((state) => state.modeReducer);
  const { isLoading, projects, total_pages } = useSelector(
    (state) => state.projectReducer
  );
  // =========================================================================
  // pagination
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  // =========================================================================
  const [targetRow, setTargetRow] = useState({});
  const callBackFn = () => {
    dispatch(fetchProjects());
  };
  const deleteHandler = () => {
    dispatch(deleteProject(targetRow?._id, toast, callBackFn));
  };

  // =========================================================================

  const [activeModal, setActiveModel] = useState(false);
  const activeModalHandler = () => {
    setActiveModel(!activeModal);
  };
  // =========================================================================
  // =========================================================================
  const downloadAttachments = async (id) => {
    try {
      const response = await axios({
        method: "get",
        url: `${serverUrl}/v1/projects/attachments/download/${id}`,
        responseType: "blob",
        headers: {
          token: localStorage.getItem("TOKEN"),
        },
      });

      const blob = new Blob([response.data], {
        type: response.headers["content-type"],
      });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = url;
      a.download = "attachments.rar";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      // Handle errors appropriately
      console.error("Error downloading file:", error);
    }
  };
  useEffect(() => {
    dispatch(
      fetchProjects({
        page: currentPage,
        limit: itemsPerPage,
        search: searchTerm,
      })
    );
  }, [dispatch, currentPage, itemsPerPage]);

  useEffect(() => {
    if (searchTerm === "") {
      dispatch(
        fetchProjects({
          page: currentPage,
          limit: itemsPerPage,
          search: searchTerm,
        })
      );
    }
  }, [searchTerm]);

  const columns = [
    {
      header: "id",
      render: (row, rowIndex) => <p className={` `}>{rowIndex + 1}</p>,
    },
    {
      header: "project Info",
      render: (row) => (
        <Link to={`/singleProject/${row?._id}`}>
          <div className={`flex items-center `}>
            <img
              className={`w-[50px] h-[50px] me-3 border rounded-full`}
              src={row?.project_img || ueseImg}
              alt={row?.name}
            />
            <div>
              <h4 className="text-start text-l  text-wrap">
                {row?.project_name}
              </h4>
              <p className="text-l font-normal">{row?.type_id?.name}</p>
            </div>
          </div>
        </Link>
      ),
    },
    {
      header: "old Ref Number",
      render: (row) => (
        <p className={` text-center`}>{row?.ref_number_old || "__"}</p>
      ),
    },
    {
      header: "Ref Number",
      render: (row) => (
        <p className={` text-center`}>{row?.ref_number || "__"}</p>
      ),
    },
    {
      header: "payment",
      render: (row) => (
        <p className={` text-center`}>{row?.payment?.payment}</p>
      ),
    },
    {
      header: "received",
      render: (row) => (
        <p className={` text-center`}>{row?.payment?.received}</p>
      ),
    },
    // {
    //   header: "balance",
    //   render: (row) => <p className={` text-center`}>{row?.balance}</p>,
    // },
    {
      header: "CD exp date",
      render: (row) => (
        <p className={` text-center`}>
          {formattedDate(row?.contract_expiry_date)}
        </p>
      ),
    },
    {
      header: "istefa_certificate",
      render: (row) => (
        <p className={` text-center`}>{row?.istefa_certificate}</p>
      ),
    },
    {
      header: "first visit",
      render: (row) => (
        <p className={` text-center`}>{formattedDate(row?.first_visit)}</p>
      ),
    },
    {
      header: "second visit",
      render: (row) => (
        <p className={` text-center`}>{formattedDate(row?.second_visit)}</p>
      ),
    },
    {
      header: "third visit",
      render: (row) => (
        <p className={` text-center`}>{formattedDate(row?.third_visit)}</p>
      ),
    },
    {
      header: "fourth visit",
      render: (row) => (
        <p className={` text-center`}>{formattedDate(row?.fourth_visit)}</p>
      ),
    },

    {
      header: "stickers",
      render: (row) => (
        <p className={` text-center`}>{formattedDate(row?.stickers)}</p>
      ),
    },
    {
      header: "hasantak exp date",
      render: (row) => (
        <p className={` text-center`}>
          {formattedDate(row?.hasantak_certificate_date || "__")}
        </p>
      ),
    },
    {
      header: "istefa exp date",
      render: (row) => (
        <p className={` text-center`}>
          {formattedDate(row?.istefa_certificate_date || "__")}
        </p>
      ),
    },
    {
      header: "internal contract exp date",
      render: (row) => (
        <p className={` text-center`}>
          {formattedDate(row?.internal_contract_date || "__")}
        </p>
      ),
    },
    {
      header: "file number",
      render: (row) => <p className={` text-center`}>{row?.file_number}</p>,
    },
    {
      header: "Attachments",
      render: (row) => (
        <Link className="text-center">
          <svg
            onClick={() => downloadAttachments(row?._id)}
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill={getIconColor()}
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M5.625 15C5.625 14.5858 5.28921 14.25 4.875 14.25C4.46079 14.25 4.125 14.5858 4.125 15H5.625ZM4.875 16H4.125H4.875ZM19.275 15C19.275 14.5858 18.9392 14.25 18.525 14.25C18.1108 14.25 17.775 14.5858 17.775 15H19.275ZM11.1086 15.5387C10.8539 15.8653 10.9121 16.3366 11.2387 16.5914C11.5653 16.8461 12.0366 16.7879 12.2914 16.4613L11.1086 15.5387ZM16.1914 11.4613C16.4461 11.1347 16.3879 10.6634 16.0613 10.4086C15.7347 10.1539 15.2634 10.2121 15.0086 10.5387L16.1914 11.4613ZM11.1086 16.4613C11.3634 16.7879 11.8347 16.8461 12.1613 16.5914C12.4879 16.3366 12.5461 15.8653 12.2914 15.5387L11.1086 16.4613ZM8.39138 10.5387C8.13662 10.2121 7.66533 10.1539 7.33873 10.4086C7.01212 10.6634 6.95387 11.1347 7.20862 11.4613L8.39138 10.5387ZM10.95 16C10.95 16.4142 11.2858 16.75 11.7 16.75C12.1142 16.75 12.45 16.4142 12.45 16H10.95ZM12.45 5C12.45 4.58579 12.1142 4.25 11.7 4.25C11.2858 4.25 10.95 4.58579 10.95 5H12.45ZM4.125 15V16H5.625V15H4.125ZM4.125 16C4.125 18.0531 5.75257 19.75 7.8 19.75V18.25C6.61657 18.25 5.625 17.2607 5.625 16H4.125ZM7.8 19.75H15.6V18.25H7.8V19.75ZM15.6 19.75C17.6474 19.75 19.275 18.0531 19.275 16H17.775C17.775 17.2607 16.7834 18.25 15.6 18.25V19.75ZM19.275 16V15H17.775V16H19.275ZM12.2914 16.4613L16.1914 11.4613L15.0086 10.5387L11.1086 15.5387L12.2914 16.4613ZM12.2914 15.5387L8.39138 10.5387L7.20862 11.4613L11.1086 16.4613L12.2914 15.5387ZM12.45 16V5H10.95V16H12.45Z"
                fill={getIconColor()}
              ></path>{" "}
            </g>
          </svg>
        </Link>
      ),
    },
    {
      header: "Actions",
      render: (row) => (
        <DropDownMenu icon={<Icon />}>
          <DropdownItem>
            <Link to={`/addproject/${row?._id}`} className=" px-4 py-2">
              Edit
            </Link>
          </DropdownItem>
          <DropdownItem>
            <button
              className="px-4 py-2"
              onClick={() => {
                activeModalHandler();
                setTargetRow(row);
              }}
            >
              Delete
            </button>
          </DropdownItem>
        </DropDownMenu>
      ),
    },
  ];

  // =========================================================================

  const searchProjectsHandler = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
  };

  const onClickSearchIcon = () => {
    if (searchTerm) {
      dispatch(fetchProjects({ search: searchTerm }));
    }
  };

  return (
    <div
      className={`font-bold overflow-x-auto min-h-[100vh]  
        ${isDark ? "text-white" : "text-black"}`}
    >
      {activeModal && (
        <WarningLayOut
          activeModal={activeModal}
          activeModalHandler={activeModalHandler}
          handleDelete={deleteHandler}
        />
      )}
      {/* <div className="flex items-center md:w-[700px] lg:w-[1000px]  mx-auto justify-between mt-4 flex-wrap"> */}
      <div className="flex items-center  mx-auto justify-between mt-4 flex-wrap">
        <Search
          handler={searchProjectsHandler}
          searchTerm={searchTerm}
          onClickSearchIcon={onClickSearchIcon}
        />
        <Link
          className={`rounded flex p-2 text-white bg-blue-800 `}
          to={"/addproject"}
        >
          Add new project
        </Link>
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <Table
          cols={columns}
          rows={projects}
          // width={"md:w-[600px] lg:w-[1000px] "}
        />
      )}

      {total_pages > 1 && (
        <Pagination
          totalPages={total_pages}
          paginate={paginate}
          currentPage={currentPage}
        />
      )}
    </div>
  );
};

export default Projects;
