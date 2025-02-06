import { motion } from "framer-motion";

const AboutMe = () => {
    return (
        <motion.section
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
                delay: 0.5,
                duration: 0.4,
                ease: "easeOut",
            }}
            className="p-6 sm:p-8 lg:p-12  shadow-lg rounded-2xl max-w-3xl mx-auto ">

            <h1

                className="text-3xl text-center  sm:text-4xl font-bold text-gray-800 font-poppins mb-8"
            >
                About Me
            </h1>

            <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    delay: 0.8,
                    duration: 0.4,
                    ease: "easeOut",
                }}
                className="text-gray-700 font-poppins text-sm sm:text-base sm:text-wrap leading-6 w-fit text-center lg:h-96 lg:text-xl"
            >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates magnam dolor voluptas minima quos a praesentium cupiditate! Doloremque exercitationem suscipit officia culpa alias eius voluptatibus tempora commodi? Magni nemo ut voluptates fugiat, in minima asperiores accusamus a consequatur sapiente neque exercitationem laboriosam quod. Ab quaerat eius fugit quos quae facilis quidem totam cumque, porro illo exercitationem. Sunt, accusamus! Quia, amet.
            </motion.p>
        </motion.section>
    );
};

export default AboutMe;
