import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStatistics } from "../../store/actions/statistics/statisticsActions";
const clientIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-12 w-12"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={5}
      d="M12 4v16m8-8H4"
    />
  </svg>
);

const contractIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-12 w-12"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={5}
      d="M8 7V3m8 0v4M4 11h16M4 19h16M4 15h16M4 7h16"
    />
  </svg>
);

const projectIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-12 w-12"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={5}
      d="M3 3h18v6H3z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={5}
      d="M3 13h18v8H3z"
    />
  </svg>
);

const balanceIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-12 w-12"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={5}
      d="M12 8v4l3 3"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={5}
      d="M16 2H8v2m2 0h4"
    />
  </svg>
);

const paymentIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-12 w-12"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={5}
      d="M11 3h2v6h-2zM7 12h10m-7 4h4"
    />
  </svg>
);

const receivedIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-12 w-12"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={5}
      d="M5 13l4 4L19 7"
    />
  </svg>
);
const Home = () => {
  const { isDark } = useSelector((state) => state.modeReducer);
  const { statistics, isLoading } = useSelector(
    (state) => state.statisticsReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStatistics());
  }, []);
  const statCards = [
    {
      title: "Total Clients",
      value: statistics[0]?.total_clients,
      icon: clientIcon,
      color: "bg-blue-500",
    },
    {
      title: "Total Contracts",
      value: statistics[0]?.total_contracts,
      icon: contractIcon,
      color: "bg-green-500",
    },
    {
      title: "Total Projects",
      value: statistics[0]?.total_projects,
      icon: projectIcon,
      color: "bg-yellow-500",
    },
    {
      title: "Total Balance",
      value: statistics[0]?.total_balance,
      icon: balanceIcon,
      color: "bg-red-500",
    },
    {
      title: "Total Payment",
      value: statistics[0]?.total_payment,
      icon: paymentIcon,
      color: "bg-purple-500",
    },
    {
      title: "Total Received",
      value: statistics[0]?.total_received,
      icon: receivedIcon,
      color: "bg-indigo-500",
    },
  ];

  return (
    <div
      className={`font-bold pb-[70px] mt-5 min-h-[90vh] ${
        isDark ? "text-gray-100 bg-gray-900" : "text-gray-800 bg-gray-50"
      }`}
    >
      <div className="container mx-auto px-1 py-8 grid grid-cols-1 gap-6">
        <div className={`mr-4 ${isDark ? "text-gray-100 " : "text-gray-800"}`}>
          <h2 className="text-center text-3xl font-semibold ">
            Welcome to the Dashboard
          </h2>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {statCards.map((card, index) => (
          <div
            key={index}
            className={`shadow-md rounded-lg p-6 flex items-center h-48 transition-colors duration-200 
              ${card.color}`}
          >
            <div className="mr-4 text-gray-600 dark:text-gray-300">
              {card?.icon}
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                {card?.title}
              </h2>
              <p className="text-2xl text-gray-800 dark:text-gray-200">
                {card?.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Home;
