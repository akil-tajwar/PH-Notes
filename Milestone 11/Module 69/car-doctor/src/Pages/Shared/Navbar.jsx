import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="w-3/4 mx-auto">
            <div className="flex justify-between py-5">
                <div>
                    <img className="w-3/4" src="logo.svg" alt="" />
                </div>
                <div className="flex items-center font-semibold gap-8">
                    <Link>Home</Link>
                    <Link>Services</Link>
                    <Link>Blog</Link>
                    <Link>Contact</Link>
                </div>
                <div className="flex items-center">
                    <button className="py-2 px-5 border-2 rounded font-semibold border-[#FF3811] text-[#FF3811]">Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;