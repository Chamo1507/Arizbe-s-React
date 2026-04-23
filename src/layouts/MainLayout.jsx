import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import "./MainLayout.css";
const MainLayout = () => {
  return (
    <div className="main-layout">
      <Navbar />
      <Outlet />
    </div>
  );
};
export default MainLayout;
