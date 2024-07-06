import { useSelector } from "react-redux";

const ImageComponent = ({ formik, img, getIconColor, handleImageChange }) => {
  const { isDark } = useSelector((state) => state.modeReducer);

  return (
    <div className="relative w-[200px] h-[200px] rounded-full overflow-hidden mx-auto mb-4 shadow">
      <label
        htmlFor="userImage-input"
        className={`cursor-pointer w-full h-full block ${
          isDark ? "bg-gray-800" : "bg-gray-200"
        }`}
      >
        <img
          src={
            formik.values.imageUrl ||
            (formik.values.image && formik.values.image instanceof Blob
              ? URL.createObjectURL(formik.values.image)
              : img)
          }
          alt="profile-img"
          className="w-full h-full object-cover"
        />
        <svg
          fill={getIconColor()}
          height="50px"
          width="50px"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 487 487"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-1 text-5xl"
          stroke="#000000"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <g>
              <g>
                <path d="M308.1,277.95c0,35.7-28.9,64.6-64.6,64.6s-64.6-28.9-64.6-64.6s28.9-64.6,64.6-64.6S308.1,242.25,308.1,277.95z M440.3,116.05c25.8,0,46.7,20.9,46.7,46.7v122.4v103.8c0,27.5-22.3,49.8-49.8,49.8H49.8c-27.5,0-49.8-22.3-49.8-49.8v-103.9 v-122.3l0,0c0-25.8,20.9-46.7,46.7-46.7h93.4l4.4-18.6c6.7-28.8,32.4-49.2,62-49.2h74.1c29.6,0,55.3,20.4,62,49.2l4.3,18.6H440.3z M97.4,183.45c0-12.9-10.5-23.4-23.4-23.4c-13,0-23.5,10.5-23.5,23.4s10.5,23.4,23.4,23.4C86.9,206.95,97.4,196.45,97.4,183.45z M358.7,277.95c0-63.6-51.6-115.2-115.2-115.2s-115.2,51.6-115.2,115.2s51.6,115.2,115.2,115.2S358.7,341.55,358.7,277.95z"></path>{" "}
              </g>
            </g>
          </g>
        </svg>
      </label>

      <input
        type="file"
        id="userImage-input"
        className="hidden"
        name="image"
        accept="image/*"
        onBlur={formik.handleBlur}
        onChange={handleImageChange}
      />
    </div>
  );
};

export default ImageComponent;
