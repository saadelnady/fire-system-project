import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const OwnerCard = ({ targetOwner }) => {
  const { isDark } = useSelector((state) => state?.modeReducer);
  return (
    <div
      className={`shadow-md mt-4 w-full md:w-[35%] rounded p-5 ${
        isDark ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div
        className={`w-[200px] h-[200px] rounded-full overflow-hidden mx-auto mb-4 shadow ${
          isDark ? "bg-gray-800" : "bg-gray-200"
        }`}
      >
        <img
          src={targetOwner?.owner_image}
          alt="owner-Image"
          className="w-full h-full object-cover"
        />
      </div>
      <p className="mb-4">
        Name : <span className="">{targetOwner?.name}</span>
      </p>
      <p className="mb-4">
        Email : <span className="">{targetOwner?.email}</span>
      </p>
      <p className="mb-4">
        Address :
        <span className="">{targetOwner?.address || "not selected"}</span>
      </p>
      <p className="mb-4">
        Mobile Phone :
        <span className="">{targetOwner?.phone || "not selected"}</span>
      </p>
      <Link
        to={`/addproject/${targetOwner?._id}`}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 mx-auto block w-fit"
      >
        Add new project
      </Link>
    </div>
  );
};

export default OwnerCard;
