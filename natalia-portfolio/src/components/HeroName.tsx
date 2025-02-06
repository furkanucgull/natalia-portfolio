import { motion } from "framer-motion";

const HeroName = () => {
    const text = "Natalia Senyshch";
    const letters = text.split("");

    return (
        <div className="text-white flex items-center justify-center  my-10 ">
            {letters.map((char, index) => (
                <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        delay: index * 0.1,
                        duration: 0.15,
                    }}
                    className="inline-block !font-pinyon text-5xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-8xl tracking-tight text-heroname  hover:scale-115 
                   "
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </div>
    );
};

export default HeroName;
