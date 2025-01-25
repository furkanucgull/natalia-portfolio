import { motion } from "framer-motion";

const AboutMe = () => {
    return (
        <>
            <motion.div
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1, scale: 1.25 }}
                transition={{
                    delay: 0.8,
                    duration: 0.2,
                    type: "keyframes",
                }}
                className="mt-10 flex flex-col justify-center items-center gap-4 xl:gap-8 px-4 "
            >
                {/* Başlık */}
                <h1 className="border-b-2 border-gray-900 text-lg md:text-2xl lg:text-3xl font-serif text-center">
                    About me
                </h1>

                {/* İçerik */}
                <div className="flex flex-col justify-center items-center w-full max-w-3xl px-4 lg:px-8 mt-8">
                    <motion.div
                        initial={{ x: -200, opacity: 0 }}
                        animate={{ x: 0, opacity: 1, scale: 1.25 }}
                        transition={{
                            delay: 1,
                            duration: 0.2,
                            type: "keyframes",
                        }}
                        className="text-black font-poppins text-sm md:text-base lg:text-md text-center p-4  lg:mb-5 rounded-xl border-gray-500 border-b-2 w-full max-w-2xl"
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quos, alias quidem nobis fuga quo. Reprehenderit dolores consectetur consequuntur debitis, beatae commodi sed, obcaecati cum vitae tempora alias cumque hic.
                    </motion.div>
                </div>
            </motion.div>
        </>
    );
};

export default AboutMe;
