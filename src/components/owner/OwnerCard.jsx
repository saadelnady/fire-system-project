import { useSelector } from "react-redux";

const OwnerCard = ({ targetOwner }) => {
  const { isDark } = useSelector((state) => state?.modeReducer);

  return (
    <div
      className={`shadow-md mt-4 w-full md:w-[30%] rounded p-5 ${
        isDark ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div className="w-[200px] h-[200px] rounded-full overflow-hidden mx-auto mb-4 shadow">
        <img
          src={targetOwner?.owner_image}
          alt="owner-Image"
          className="w-full h-full object-cover"
        />
      </div>
      <p>
        Name : <span className="">{targetOwner?.name}</span>
      </p>
      <p>
        Email : <span className="">{targetOwner?.email}</span>
      </p>
      <p>
        Address : <span className="">{targetOwner?.address}</span>
      </p>
      <p>
        Mobile Phone : <span className="">{targetOwner?.phone}</span>
      </p>
    </div>
  );
};

export default OwnerCard;
