import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const Layouts = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-2 lg:px-0">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
      <div className="px-2 lg:px-0">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Layouts;
