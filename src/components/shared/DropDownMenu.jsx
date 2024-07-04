import { Link } from "react-router-dom";

const DropdownMenu = ({ menuItems, isDark }) => {
  const getIconColor = () => (isDark ? "#eee" : "#000000");

  return (
    <div className="relative group">
      <svg
        fill={getIconColor()}
        viewBox="-13.5 0 32 32"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#2a2222"
        strokeWidth="0.00032"
        width="50px"
        className="cursor-pointer"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <title>dots-v</title>
          <path d="M2.48 11.84c-1.36 0-2.48-1.12-2.48-2.48s1.12-2.48 2.48-2.48 2.48 1.12 2.48 2.48-1.12 2.48-2.48 2.48zM2.48 8.56c-0.44 0-0.8 0.36-0.8 0.8s0.36 0.8 0.8 0.8 0.8-0.36 0.8-0.8c0-0.44-0.36-0.8-0.8-0.8zM2.48 18.48c-1.36 0-2.48-1.12-2.48-2.48s1.12-2.48 2.48-2.48 2.48 1.12 2.48 2.48-1.12 2.48-2.48 2.48zM2.48 15.2c-0.44 0-0.8 0.36-0.8 0.8s0.36 0.8 0.8 0.8 0.8-0.36 0.8-0.8-0.36-0.8-0.8-0.8zM2.48 25.12c-1.36 0-2.48-1.12-2.48-2.48s1.12-2.48 2.48-2.48 2.48 1.12 2.48 2.48c0 1.36-1.12 2.48-2.48 2.48zM2.48 21.84c-0.44 0-0.8 0.36-0.8 0.8s0.36 0.8 0.8 0.8 0.8-0.36 0.8-0.8-0.36-0.8-0.8-0.8z"></path>
        </g>
      </svg>
      <ul
        className={`hidden rounded absolute group-hover:block left-[-36px] border-gray-200 shadow-lg z-100 ${
          isDark ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
        }`}
      >
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
          >
            <Link to={item.link} className="flex items-center">
              <svg
                width="20px"
                viewBox="0 0 24 24"
                fill={getIconColor()}
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d={item.iconPath}
                    stroke="#000000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </g>
              </svg>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownMenu;
