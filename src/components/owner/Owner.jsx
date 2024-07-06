import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import OwnerCard from "./OwnerCard.jsx";
import { owners, projectsData } from "../../assets/data/staticData.js";
import { useState } from "react";
import Table from "../shared/Table.jsx";
import DropdownMenu from "../shared/DropDownMenu.jsx";
import Pagination from "../shared/Pagination.jsx";
const Owner = () => {
  const { isDark } = useSelector((state) => state.modeReducer);
  const [projects, setProjects] = useState(projectsData);
  const { ownerId } = useParams();
  const targetOwner = owners?.find((owner) => {
    return owner._id === ownerId;
  });

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
      header: "project Info",
      render: (row) => (
        <div className={`flex items-center`}>
          <img
            className={`w-[50px] h-[50px] me-3 border rounded-full`}
            src={row?.project_image}
            alt={row?.name}
          />
          <div>
            <h4 className="text-start text-xl"> {row?.name}</h4>
            <p className="text-l font-normal">{row.type}</p>
          </div>
        </div>
      ),
    },
    {
      header: "Ref Number",
      render: (row) => <p className={`flex items-center`}>{row?.refNumber}</p>,
    },
    {
      header: "Actions",
      render: (row) => <DropdownMenu menuItems={menuItems} isDark={isDark} />,
    },
  ];
  // =========================================================================
  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // You can adjust the number as per your requirement
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = projects.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  // =========================================================================
  return (
    <div
      className={`font-bold flex justify-around items-start pb-[70px] min-h-[100vh] flex-wrap ${
        isDark ? "text-white" : "text-black"
      }`}
    >
      <OwnerCard targetOwner={targetOwner} />
      <div className="flex flex-col w-full md:w-[65%]">
        <Table cols={columns} rows={currentItems} />
        <Pagination />
      </div>
    </div>
  );
};

export default Owner;
