import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const OwnerCard = () => {
  const { isDark } = useSelector((state) => state.modeReducer);
  const { owner } = useSelector((state) => state.ownerReducer);

  return (
    <div
      className={`shadow-md mt-4 w-full md:w-[600px] rounded p-5 ${
        isDark ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div
        className={`w-[200px] h-[200px] rounded-full overflow-hidden mx-auto mb-4 shadow ${
          isDark ? "bg-gray-800" : "bg-gray-200"
        }`}
      >
        <img
          src={owner?.profile_img}
          alt="owner-Image"
          className="w-full h-full object-cover"
        />
      </div>
      <p className="mb-4">
        Name: <span>{owner?.name}</span>
      </p>
      <p className="mb-4">
        Email: <span>{owner?.email}</span>
      </p>
      <p className="mb-4">
        Address: <span>{owner?.address || "___"}</span>
      </p>
      <p className="mb-4">
        Mobile Phone: <span>{owner?.phone || "___"}</span>
      </p>
      <Link
        to={`/addprojectbyOwner/${owner?._id}`}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 mx-auto block w-fit"
      >
        Add new project
      </Link>
    </div>
  );
};

export default OwnerCard;
