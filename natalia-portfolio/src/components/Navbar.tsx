const Navbar = () => {
    return (
        <>
            <nav className="z-10 w-full flex items-center justify-between text-white px-4 sm:px-6 md:px-8 lg:px-12">
                {/* Logo (Natalia) */}
                <span className="cursor-pointer border-b-1 border-gray-700 rounded-b-xs text-2xl sm:text-3xl md:text-4xl items-center justify-center p-2 font-satisfy bg-gradient-to-r from-orange-400 via-gray-300 to-indigo-400 flex text-transparent bg-clip-text">
                    Natalia
                </span>

                {/* Menü */}
                <div className="flex items-center">
                    <ul className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                        <li>
                            <a
                                href="#home"
                                className="hover:text-gray-300 font-poppins hover:bg-[#161A1A] transition duration-300 ease-in-out px-6 py-2 text-center text-sm sm:text-md md:px-8 md:py-3 text-orange-300"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#projects"
                                className="hover:text-gray-300 font-poppins hover:bg-[#161A1A] transition duration-300 ease-in-out px-6 py-2 text-center text-sm sm:text-md md:px-8 md:py-3 text-orange-300"
                            >
                                My Art Gallery
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="hover:text-gray-300 font-poppins hover:bg-[#161A1A] transition duration-300 ease-in-out px-6 py-2 text-center text-sm sm:text-md md:px-8 md:py-3 text-orange-300"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
