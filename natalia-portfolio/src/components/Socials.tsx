import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Socials = () => {
    return (
        <div className="text-center">
            <h1 className="text-lg font-semibold mb-4 text-gray-400 tracking-wide text-nowrap">
                ✨ Follow Me on Social Media! ✨
            </h1>
            <div className="flex justify-center items-center gap-6 lg:gap-10">
                <FaInstagram className="w-7 h-7 text-gray-400 hover:text-pink-500 transition-all duration-300 transform hover:scale-110" />
                <FaFacebook className="w-7 h-7 text-gray-400 hover:text-blue-500 transition-all duration-300 transform hover:scale-110" />
                <FaLinkedin className="w-7 h-7 text-gray-400 hover:text-blue-600 transition-all duration-300 transform hover:scale-110" />
                <FaXTwitter className="w-7 h-7 text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110" />
            </div>
        </div>
    );
};

export default Socials;
