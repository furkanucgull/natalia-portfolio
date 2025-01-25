import pic from "../images/background (3).jpg";
import AboutMe from "./AboutMe";
import { motion } from "framer-motion";


const HeroPic = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between gap-24 lg:mr-10 px-8 lg:px-16 md:items-center ">
            {/* Metin kutusu */}
            <div className=" xl:w-full  lg:w-full  lg:max-w-md xl:ml-54">
                <p className="text-sm sm:text-base lg:text-lg ">
                    <AboutMe />
                </p>
            </div>

            {/* Resim */}
            <motion.div
                className=""
                initial={{ x: 800, opacity: 0 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{
                    delay: 1.25,
                    duration: .65,
                    type: "spring"
                }}
            >
                <img
                    className="w-full sm:w-48 lg:w-80 h-auto md:w-96  rounded-4xl
                    transform transition hover:-translate-y-10 hover:-translate-x-10 motion-reduce:transition-none motion-reduce:hover:transform-none hover:bg-cyan-500 hover:shadow-lg hover:shadow-cyan-500/50
                    "
                    src={pic}
                    alt="Background"
                />
            </motion.div>

        </div>
    );
};

export default HeroPic;
