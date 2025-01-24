const Navbar = () => {
    return (
        <nav className="z-10 w-full flex items-center  text-white">

            <div className=" flex space-x-4 mt-5 mx-20 items-center justify-center">
                <span className=" cursor-pointer border-b-1 border-gray-700 rounded-b-xs  text-3xl items-center justify-center p-2 font-satisfy bg-gradient-to-r  from-orange-400 via-gray-300 to-indigo-400 flex  text-transparent bg-clip-text">Natalia</span>
                <ul className="flex mx-10 gap-1 ">
                    <li>
                        <a href="#home" className="hover:text-gray-300 font-poppins hover:bg-[#161A1A] transition duration-300 ease-in-out px-8 py-3 text-center text-md text-orange-300 ">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className="hover:text-gray-300 font-poppins hover:bg-[#161A1A] transition duration-300 ease-in-out px-8 py-3 text-center text-md text-orange-300 ">
                            My Art Gallery
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:text-gray-300 font-poppins hover:bg-[#161A1A] transition duration-300 ease-in-out  px-8 py-3 text-center text-md text-orange-300 ">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
