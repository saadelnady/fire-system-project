import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { deleteType, fetchTypes } from "../../store/actions/Types/typeActions";
import DropDownMenu from "../shared/DropDownMenu";
import Icon from "../shared/Icon";
import DropdownItem from "../shared/DropdownItem";
import Search from "../shared/Search";
import AddNewType from "./AddNewType";
import Table from "../shared/Table";
import Pagination from "../shared/Pagination";
import Loading from "../shared/Loading/Loading";
import WarningLayOut from "../shared/WarningLayOut";

const Types = () => {
  const { isDark } = useSelector((state) => state.modeReducer);
  const { isLoading, types, total_pages } = useSelector(
    (state) => state.typeReducer
  );
  const [targetType, setTargetType] = useState({});
  console.log(targetType._id);
  const [targetRow, setTargetRow] = useState({});
  const [activeForm, setAtiveForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const targetTypeHandler = () => {
    setTargetType({});
  };
  const deleteHandler = () => {
    dispatch(deleteType(targetRow?._id, toast, dispatchTypes));
  };
  const dispatchTypes = () => {
    dispatch(fetchTypes({ limit: "10" }));
  };
  const activeFormHandler = () => {
    setAtiveForm(!activeForm);
  };
  useEffect(() => {
    dispatch(fetchTypes({ limit: "10", page: currentPage }));
  }, [dispatch]);

  // =========================================================================
  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    dispatch(
      fetchTypes({ page: currentPage, limit: itemsPerPage, search: searchTerm })
    );
  }, [dispatch, currentPage, itemsPerPage]);

  useEffect(() => {
    if(searchTerm==''){
      dispatch(
        fetchTypes({ page: currentPage, limit: itemsPerPage, search: searchTerm })
      );
    }
  
  }, [searchTerm]);


  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  // =========================================================================
  // =========================================================================

  const searchTypesHandler = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
  };

  const onClickSearchIcon = () => {
    if (searchTerm) {
      dispatch(fetchTypes({ search: searchTerm }));
    }
  };


  // =========================================================================

  // =========================================================================
  const [activeModal, setActiveModel] = useState(false);
  const activeModalHandler = () => {
    setActiveModel(!activeModal);
  };

  const columns = [
    {
      header: "id",
      render: (row, rowIndex) => (
        <p className="text-l font-normal">{rowIndex + 1}</p>
      ),
    },
    {
      header: "Name",
      render: (row) => <p className="text-l font-normal">{row.name}</p>,
    },
    {
      header: "Description",
      render: (row) => (
        <p className={`flex items-center w-full lg:w-[80%] text-wrap`}>
          {row?.description}
        </p>
      ),
    },
    {
      header: "Actions",

      render: (row) => (
        <DropDownMenu icon={<Icon />}>
          <DropdownItem>
            <button
              className=" px-4 py-2"
              onClick={() => {
                activeFormHandler();
                setTargetType(row);
              }}
            >
              Edit
            </button>
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
      className={`font-bold pb-[120px] min-h-[100vh] ${
        isDark ? "text-white" : "text-black"
      }`}
    >
      <div className="flex  items-center justify-center sm:justify-between mt-4 flex-wrap">
        <Search handler={searchTypesHandler} searchTerm={searchTerm} onClickSearchIcon={onClickSearchIcon} />
        <button
          className={`rounded flex p-2 text-white bg-blue-800 `}
          onClick={activeFormHandler}
        >
          Add New type
        </button>
      </div>
      {activeModal && (
        <WarningLayOut
          activeModal={activeModal}
          activeModalHandler={activeModalHandler}
          handleDelete={deleteHandler}
        />
      )}
      {activeForm && (
        <AddNewType
          activeFormHandler={activeFormHandler}
          activeForm={activeForm}
          targetType={targetType}
          targetTypeHandler={targetTypeHandler}
          dispatchTypes={dispatchTypes}
        />
      )}

      {isLoading ? <Loading /> : <Table cols={columns} rows={types} />}

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

export default Types;
