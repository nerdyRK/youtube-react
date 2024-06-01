import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return;
  return <div>Sidebar</div>;
};
export default Sidebar;
