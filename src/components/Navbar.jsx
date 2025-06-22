import { NavLink } from "react-router";

const Navbar = () => {
    return (
        <nav>
            <div className="z-50 fixed w-full flex items-center justify-between px-10 py-5">
                <div>
                    <span className="font-DMC text-bloody-red">Safin</span>
                </div>
                <div className="flex gap-3">
                    <NavLink to="/" className="btn">Home</NavLink>
                    <NavLink to="/Work" className="btn">Work</NavLink>
                    <NavLink to="/About" className="btn">About</NavLink>
                    <NavLink to="/Contact" className="btn">Contact</NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;