import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";


const MainLayout = () => {
    return (
    
        <div className="lg:max-w-[1300px] md:px-2 lg:mx-auto">
           
            <Navbar></Navbar>
          <div className="py-5">
          <Outlet></Outlet>
          </div>

        </div>
    );
};

export default MainLayout;