import { useEffect, useState } from "react";
import userImg from "../../assets/imgs/ic-user.png";
import Table from "../shared/Table";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Search from "../shared/Search";
import Pagination from "../shared/Pagination";
import {
  deleteOwner,
  fetchOwners,
} from "../../store/actions/Owner/ownerActions";
import Loading from "../shared/Loading/Loading";
import DropDownMenu from "../shared/DropDownMenu";
import Icon from "../shared/Icon";
import DropdownItem from "../shared/DropdownItem";
import { toast } from "react-toastify";
import WarningLayOut from "../shared/WarningLayOut";

const Owners = () => {
  const { isDark } = useSelector((state) => state.modeReducer);
  const { isLoading, owners } = useSelector((state) => state.ownerReducer);
  const dispatch = useDispatch();
  const [targetRow, setTargetRow] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [activeModal, setActiveModel] = useState(false);
  const activeModalHandler = () => {
    setActiveModel(!activeModal);
  };
  // =========================================================================
  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    dispatch(
      fetchOwners({
        page: currentPage,
        limit: itemsPerPage,
        search: searchTerm,
      })
    );
  }, [dispatch, currentPage, itemsPerPage]);

  useEffect(() => {
    if(searchTerm===''){
      dispatch(
        fetchOwners({
          page: currentPage,
          limit: itemsPerPage,
          search: searchTerm,
        })
      );
    }
   
  }, [searchTerm]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  // =========================================================================
  // =========================================================================
  const callBackFn = () => {
    dispatch(fetchOwners());
  };
  const searchOwnersHandler = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    
  };

  const onClickSearchIcon=() => {
    if (searchTerm) {
      dispatch(fetchOwners({ search: searchTerm }));
    }
  }
  // =========================================================================
  // =========================================================================
  const deleteHandler = () => {
    dispatch(deleteOwner(targetRow?._id, toast, callBackFn));
  };

  const columns = [
    {
      header: "id",
      render: (row, rowIndex) => <p className={` `}>{rowIndex + 1}</p>,
    },
    {
      header: "Owner Info",
      render: (row) => (
        <div className={`flex items-center `}>
          <img
            className={`w-[60px] h-[60px] me-3 border rounded-full object-cover`}
            src={row?.profile_img || userImg}
            alt={row?.name}
          />
          <div className={`  text-wrap`}>
            <h4 className="text-start "> {row?.name}</h4>
            <p className=" font-normal">{row?.email}</p>
          </div>
        </div>
      ),
    },
    {
      header: "Phone Number",
      render: (row) => (
        <p className={`flex items-center`}>{row?.phone || "__"}</p>
      ),
    },
    {
      header: "address",
      render: (row) => (
        <p className={`flex items-center`}>{row?.address || "__"}</p>
      ),
    },
    {
      header: "Owner projects",
      render: (row) => (
        <Link
          className={`rounded flex w-fit items-center text-white bg-blue-800 py-1 px-3`}
          to={`${row?._id}`}
        >
          <svg
            fill="#fff"
            className="me-2"
            width="30px"
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M16.108 10.044c-3.313 0-6 2.687-6 6s2.687 6 6 6 6-2.686 6-6-2.686-6-6-6zM16.108 20.044c-2.206 0-4.046-1.838-4.046-4.044s1.794-4 4-4c2.206 0 4 1.794 4 4s-1.748 4.044-3.954 4.044zM31.99 15.768c-0.012-0.050-0.006-0.104-0.021-0.153-0.006-0.021-0.020-0.033-0.027-0.051-0.011-0.028-0.008-0.062-0.023-0.089-2.909-6.66-9.177-10.492-15.857-10.492s-13.074 3.826-15.984 10.486c-0.012 0.028-0.010 0.057-0.021 0.089-0.007 0.020-0.021 0.030-0.028 0.049-0.015 0.050-0.009 0.103-0.019 0.154-0.018 0.090-0.035 0.178-0.035 0.269s0.017 0.177 0.035 0.268c0.010 0.050 0.003 0.105 0.019 0.152 0.006 0.023 0.021 0.032 0.028 0.052 0.010 0.027 0.008 0.061 0.021 0.089 2.91 6.658 9.242 10.428 15.922 10.428s13.011-3.762 15.92-10.422c0.015-0.029 0.012-0.058 0.023-0.090 0.007-0.017 0.020-0.030 0.026-0.050 0.015-0.049 0.011-0.102 0.021-0.154 0.018-0.090 0.034-0.177 0.034-0.27 0-0.088-0.017-0.175-0.035-0.266zM16 25.019c-5.665 0-11.242-2.986-13.982-8.99 2.714-5.983 8.365-9.047 14.044-9.047 5.678 0 11.203 3.067 13.918 9.053-2.713 5.982-8.301 8.984-13.981 8.984z"></path>{" "}
            </g>
          </svg>
          Show projects
        </Link>
      ),
    },
    {
      header: "Actions",
      render: (row) => (
        <DropDownMenu icon={<Icon />}>
          <DropdownItem>
            <Link to={`/addNewOwner/${row?._id}`} className=" px-4 py-2">
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

  return (
    <div
      className={`font-bold pb-[70px] min-h-[100vh] ${
        isDark ? "text-white" : "text-black"
      }`}
    >
      {activeModal && (
        <WarningLayOut
          activeModal={activeModal}
          activeModalHandler={activeModalHandler}
          handleDelete={deleteHandler}
        />
      )}
      <div className="flex items-center justify-between mt-4 flex-wrap">
        <Search handler={searchOwnersHandler} onClickSearchIcon={onClickSearchIcon} searchTerm={searchTerm} />
        <Link
          className={`rounded flex p-2 text-white bg-blue-800`}
          to={"/addNewOwner"}
        >
          Add New Owner
        </Link>
      </div>
      {isLoading ? <Loading /> : <Table cols={columns} rows={owners?.list} />}

      {owners.total_pages > 1 && (
        <Pagination
          totalPages={owners.total_pages}
          paginate={paginate}
          currentPage={currentPage}
        />
      )}
    </div>
  );
};

export default Owners;
