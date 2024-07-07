import { useState } from "react";
import Table from "../shared/Table";
import { owners } from "../../assets/data/staticData";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DropdownMenu from "../shared/DropDownMenu";
import Search from "../shared/Search";
import Pagination from "../shared/Pagination";

const Owners = () => {
  const { isDark } = useSelector((state) => state.modeReducer);
  const [ownersOfProjects, setOwnersOfProjects] = useState(owners);
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  // =========================================================================
  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // You can adjust the number as per your requirement
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = ownersOfProjects.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  // =========================================================================

  const searchOwnersHandler = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    if (searchTerm) {
      const filteredOwners = owners.filter((owner) =>
        owner.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setOwnersOfProjects(filteredOwners);
    } else {
      // Reset to original owners list if search term is empty
      setOwnersOfProjects(owners);
    }
  };

  const menuItems = [
    {
      label: "Edit",
      link: "/addNewOwner",
      iconPath:
        "M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z",
    },
    {
      label: "Delete",
      link: "#",
      iconPath:
        "M10 12V17M14 12V17M4 7H20M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z",
    },
  ];
  const columns = [
    {
      header: "Owner Info",
      render: (row) => (
        <div className={`flex items-center`}>
          <img
            className={`w-[50px] h-[50px] me-3 border rounded-full`}
            src={row?.owner_image}
            alt={row?.name}
          />
          <div>
            <h4 className="text-start text-xl"> {row?.name}</h4>
            <p className="text-l font-normal">{row.email}</p>
          </div>
        </div>
      ),
    },
    {
      header: "Ref Number",
      render: (row) => <p className={`flex items-center`}>{row?.refNumber}</p>,
    },
    {
      header: "Owner projects",
      render: (row) => (
        <Link
          className={`rounded flex w-fit text-white bg-blue-800 py-1 px-3`}
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

      render: (row) => <DropdownMenu menuItems={menuItems} row={row} />,
    },
  ];

  return (
    <div
      className={`font-bold pb-[70px] min-h-[100vh] ${
        isDark ? "text-white" : "text-black"
      }`}
    >
      <div className="flex items-center justify-between mt-4 flex-wrap">
        <Search handler={searchOwnersHandler} searchTerm={searchTerm} />
        <Link
          className={`rounded flex mt-4 sm:mt-0  p-2 text-white bg-blue-800 `}
          to={"/addNewOwner"}
        >
          Add New Owner
        </Link>
      </div>

      <Table cols={columns} rows={currentItems} />
      {currentItems && currentItems.length > 0 && (
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={ownersOfProjects.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      )}
    </div>
  );
};

export default Owners;
