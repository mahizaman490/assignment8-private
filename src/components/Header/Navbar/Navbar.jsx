
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
const Navbar = () => {
    return (
        <div>
            <nav className=" md:flex md:justify-between items-center md:my-2 px-2">
                <Logo></Logo>
                <ul className=" md:flex gap-5">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-600  underline" : ""
                            } >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/donation"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-600  underline" : ""
                            } >
                            Donation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/statistics"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-600  underline" : ""
                            } >
                            Statistics
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;