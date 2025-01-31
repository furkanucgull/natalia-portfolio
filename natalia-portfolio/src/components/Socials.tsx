import { FaInstagramSquare, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Socials = () => {
    return (
        <div className="h-[30vh] ">
            <h1 className="text-center lg:text-4xl text-xl mb-8 mt-4 font-extrabold 
    bg-gradient-to-r from-gray-500 via-blue-400 to-black text-transparent 
    bg-clip-text drop-shadow-lg animate-pulse lg:mt-10 ">
                🚀 Connect with Me on Social Media! ✨
            </h1>
            <div className="flex justify-center items-center lg:gap-40 gap-8 lg:mt-14 ">

                <div>
                    <FaInstagramSquare className="lg:w-12 lg:h-auto w-10 h-auto hover:scale-105 hover:cursor-pointer lg:text-gray-600 hover:text-pink-500 text-pink-500 transition-colors duration-300" />
                </div>
                <div>
                    <FaFacebook className="lg:w-12 lg:h-auto w-10 h-auto hover:scale-105 hover:cursor-pointer lg:text-gray-600 hover:text-blue-500  text-blue-500transition-colors duration-300" />
                </div>
                <div>
                    <FaLinkedin className="lg:w-12 lg:h-auto w-10 h-auto hover:scale-105 hover:cursor-pointer lg:text-gray-600 hover:text-blue-600 text-blue-600 transition-colors duration-300" />
                </div>
                <div>
                    <FaXTwitter className="lg:w-12 lg:h-auto w-10 h-auto hover:scale-105 hover:cursor-pointer lg:text-gray-600 hover:text-black text-black transition-colors duration-300" />
                </div>
            </div>
        </div>
    );
};

export default Socials;
