import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col border-2 shadow-md items-center">
      <div className="flex col-span-1 items-center">
        <img
          className="w-8 h-8 cursor-pointer"
          onClick={handleToggleMenu}
          src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
          alt=""
        />
        <img
          className="w-32 h-20 object-cover"
          src="https://iconape.com/wp-content/png_logo_vector/new-youtube-logo.png"
          alt=""
        />
      </div>
      <div className="col-span-10 ml-20">
        <input
          className="border w-1/2 p-2 rounded-l-full border-gray-400"
          type="text"
        />
        <button className="border px-5 py-2 rounded-r-full bg-gray-100 border-gray-400">
          🔍
        </button>
      </div>
      <div className="col-span-1 mx-2">
        <img
          className="w-8 h-8 bg-black rounded-full bg-opacity-15 p-3 box-content"
          src="https://cdn-icons-png.freepik.com/256/1077/1077063.png?semt=ais_hybrid"
          alt="user-icon"
        />
      </div>
    </div>
  );
};
export default Head;
