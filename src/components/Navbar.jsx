import { Link } from "react-router";
import GsapBtn from "./GSAPBtn";

const Navbar = () => {
    return (
        <nav>
            <div className="z-50 fixed w-full flex items-center justify-between px-10 py-5">
                <div>
                    <span className="font-DMC text-bloody-red">Safin</span>
                </div>
                <div className="flex gap-3">
                    <Link to="/"><GsapBtn>Home</GsapBtn></Link>
                    <Link to="/Work"><GsapBtn>Work</GsapBtn></Link>
                    <Link to="/About"><GsapBtn>About</GsapBtn></Link>
                    <Link to="/Contact"><GsapBtn>Contact</GsapBtn></Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;