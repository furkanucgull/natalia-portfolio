import pic from "../images/background (3).jpg";
import { motion } from "framer-motion";


const HeroPic = () => {
    return (
        <div className="">
            {/* Image */}
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
                    className="  rounded-4xl lg:w-96 lg:h-auto
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
