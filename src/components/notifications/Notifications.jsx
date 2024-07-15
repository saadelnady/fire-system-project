import { useDispatch, useSelector } from "react-redux";
// import { notifications } from "../../assets/data/staticData";
import Table from "../shared/Table";
import Search from "../shared/Search";
import { useEffect, useState } from "react";
import Pagination from "../shared/Pagination";
import {
  editNotification,
  fetchDropdownNotifications,
  fetchNotifications,
} from "../../store/actions/notificatios/notificationActions";
import formattedDate from "../../helpers/formattedDate";
import { toast } from "react-toastify";

const Notifications = () => {
  const { isDark } = useSelector((state) => state.modeReducer);
  const { notifications } = useSelector((state) => state.notificationReducer);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  // =========================================================================
  // pagination
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  // =========================================================================
  const searchNotificationsHandler = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
  };

  const onClickSearchIcon = () => {
    if (searchTerm) {
      dispatch(
        fetchNotifications({
          search: searchTerm,
        })
      );
    }
  };

  useEffect(() => {
    dispatch(
      fetchNotifications({
        page: currentPage,
        limit: itemsPerPage,
        search: searchTerm,
      })
    );
  }, [dispatch, currentPage, itemsPerPage]);

  useEffect(() => {
    if (searchTerm === "")
      dispatch(
        fetchNotifications({
          page: currentPage,
          limit: itemsPerPage,
          search: searchTerm,
        })
      );
  }, [searchTerm]);

  const checkNotificationHandler = (notificationId) => {
    dispatch(
      editNotification(
        notificationId,
        toast,
        callBackFn,
        getNotificationsInDropDown
      )
    );
  };
  const callBackFn = () => {
    dispatch(
      fetchNotifications({
        page: currentPage,
        limit: itemsPerPage,
        search: searchTerm,
      })
    );
  };
  const getNotificationsInDropDown = () => {
    dispatch(
      fetchDropdownNotifications({
        page: currentPage,
        limit: itemsPerPage,
        search: searchTerm,
      })
    );
  };
  const columns = [
    {
      header: "Done",
      render: (row) => (
        <div className={`flex items-center`}>
          <input
            type="checkbox"
            id="read"
            checked={row?.action_status}
            onClick={() => {
              checkNotificationHandler(row?._id);
            }}
          />
        </div>
      ),
    },
    {
      header: "Messages",
      render: (row) => (
        <p
          className={`flex items-center  ${
            row?.action_status ? "text-green-500 line-through" : "text-black "
          }`}
        >
          {row?.message || "__"}
        </p>
      ),
    },
    {
      header: "owner Name",
      render: (row) => (
        <p
          className={`flex items-center ${
            row?.action_status ? "text-green-500 line-through" : "text-black "
          }`}
        >
          {row?.client_id?.name || "__"}
        </p>
      ),
    },
    {
      header: "project Name",
      render: (row) => (
        <p
          className={`flex items-center ${
            row?.action_status ? "text-green-500 line-through" : "text-black "
          }`}
        >
          {row?.project_id?.project_name || "__"}
        </p>
      ),
    },
    {
      header: "Task date ",
      render: (row) => (
        <p
          className={`flex items-center ${
            row?.action_status ? "text-green-500 line-through" : "text-black "
          }`}
        >
          {formattedDate(row?.execution_date)}
        </p>
      ),
    },
  ];
  return (
    <div
      className={`font-bold pb-[70px] min-h-[100vh] ${
        isDark ? "text-white" : "text-black"
      }`}
    >
      <Search
        handler={searchNotificationsHandler}
        onClickSearchIcon={onClickSearchIcon}
        searchTerm={searchTerm}
      />
      <Table cols={columns} rows={notifications?.list} />
      {}
      {notifications?.total_pages > 1 && (
        <Pagination
          totalPages={notifications?.total_pages}
          paginate={paginate}
          currentPage={currentPage}
        />
      )}
    </div>
  );
};
export default Notifications;
