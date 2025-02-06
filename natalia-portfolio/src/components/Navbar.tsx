import { useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="z-10 w-full flex items-center justify-between bg-black text-white px-4 py-4 xl:py-8 sm:px-6 md:px-8 lg:px-12">
            {/* Logo (Natalia) */}
            <span className="cursor-pointer text-2xl sm:text-3xl md:text-4xl font-satisfy bg-gradient-to-r from-orange-400 via-gray-300 to-indigo-400 text-transparent bg-clip-text">
                Natalia
            </span>

            {/* Hamburger Menu Icon (Only for Mobile) */}
            <div className="sm:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
                {menuOpen ? <FiX /> : <FiMenu />}
            </div>

            {/* Menü */}
            <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={menuOpen ? { opacity: 1, height: "auto" } : { opacity: 1, height: 0 }}
                transition={{ duration: 0.1, ease: "easeInOut" }}
                className={`sm:flex ${menuOpen ? "flex" : "hidden"} flex-col sm:flex-row items-center gap-2 sm:gap-4 absolute sm:static top-16 right-0 sm:right-auto w-fit sm:w-auto bg-gray-900 sm:bg-transparent sm:z-auto z-20 p-4 sm:p-0 shadow-lg sm:shadow-none`}
            >
                <ul className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto text-right">
                    <li>
                        <a
                            onClick={() => navigate("/")}
                            className="hover:text-gray-300 font-poppins hover:bg-[#161A1A] transition duration-300 ease-in-out px-6 py-2 text-right text-sm sm:text-md md:px-8 md:py-3 text-orange-500 cursor-pointer"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#projects"
                            className="hover:text-gray-300 font-poppins hover:bg-[#161A1A] transition duration-300 ease-in-out px-6 py-2 text-right text-sm sm:text-md md:px-8 md:py-3 text-orange-500 cursor-pointer"
                        >
                            My Art Gallery
                        </a>
                    </li>
                    <li>

                        <a onClick={() => navigate("/contact")}

                            className="hover:text-gray-300 font-poppins hover:bg-[#161A1A] transition duration-300 ease-in-out px-6 py-2 text-right text-sm sm:text-md md:px-8 md:py-3 text-orange-500 cursor-pointer"
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </motion.div>
        </nav>
    );
};

export default Navbar;
