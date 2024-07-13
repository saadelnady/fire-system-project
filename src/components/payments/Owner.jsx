import { useSelector } from "react-redux";
import user_img from "../../assets/imgs/ic-user.png";
const Owner = () => {
  const { isDark } = useSelector((state) => state.modeReducer);
  const { payment, isLoading } = useSelector((state) => state.paymentReducer);

  return (
    <div
      className={`p-6 rounded-lg shadow-lg mb-6 ${
        isDark ? "bg-gray-900" : "bg-white"
      } `}
    >
      <div className="flex flex-wrap md:flex-nowrap items-center">
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <img
            src={payment?.client_img || user_img}
            alt="Userimg"
            className="rounded-full w-52 h-52 mx-auto md:mx-0"
          />
        </div>
        <div
          className={`w-full md:w-3/4 md:pl-6 ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-semibold">Name:</p>
              <p>{payment?.client_name}</p>
            </div>
            <div>
              <p className="font-semibold">Email:</p>
              <p>{payment?.client_email}</p>
            </div>
            <div>
              <p className="font-semibold">Phone:</p>
              <p>{payment?.client_phone || "__"}</p>
            </div>
            <div>
              <p className="font-semibold">Address:</p>
              <p>{payment?.client_address || "__"}</p>
            </div>
            <div>
              <p className="font-semibold">Total:</p>
              <p>{payment?.total_payment || "__"}</p>
            </div>
            <div>
              <p className="font-semibold">Received:</p>
              <p className="text-green-500">
                {payment?.total_received || "__"}
              </p>
            </div>
            <div>
              <p className="font-semibold ">Balance:</p>
              <p className="text-red-500">{payment?.total_balance || "__"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Owner;
