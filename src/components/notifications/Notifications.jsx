import { useSelector } from "react-redux";
import { notifications } from "../../assets/data/staticData";
import Table from "../shared/Table";

const Notifications = () => {
  const { isDark } = useSelector((state) => state.modeReducer);
  const columns = [
    {
      header: "Read All",
      render: (row) => (
        <div className={`flex items-center`}>
          <input type="checkbox" id="read-all" />
        </div>
      ),
    },
    {
      header: "Messages",
      render: (row) => <p className={`flex items-center`}>{row?.message}</p>,
    },
  ];
  return (
    <div
      className={`font-bold pb-[70px] min-h-[100vh] ${
        isDark ? "text-white" : "text-black"
      }`}
    >
      <Table cols={columns} rows={notifications} />
    </div>
  );
};
export default Notifications;
