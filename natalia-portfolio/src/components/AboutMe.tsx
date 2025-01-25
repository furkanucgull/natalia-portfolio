import { motion } from "framer-motion";

const AboutMe = () => {
    return (
        <section className="p-6 sm:p-8 lg:p-12  shadow-lg rounded-2xl max-w-3xl mx-auto">

            <motion.h1
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                    delay: 0.5,
                    duration: 0.4,
                    ease: "easeOut",
                }}
                className="text-2xl text-center border-b border-gray-500   sm:text-3xl font-bold text-gray-800 font-poppins mb-8"
            >
                About Me
            </motion.h1>


            <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    delay: 0.8,
                    duration: 0.4,
                    ease: "easeOut",
                }}
                className="text-gray-700 font-poppins text-sm sm:text-base leading-6"
            >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus quos, alias quidem nobis fuga quo.
                Reprehenderit dolores consectetur consequuntur debitis, beatae commodi sed, obcaecati cum vitae tempora
                alias cumque hic.
            </motion.p>
        </section>
    );
};

export default AboutMe;
