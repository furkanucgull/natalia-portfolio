import { useTransform, motion } from "framer-motion";
import AboutMe from "./AboutMe";
import HeroName from "./HeroName";
import HeroPic from "./HeroPic";

const AboutSection = ({ scrollYProgress }: any) => {


    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7], [1, 1, 0]);
    const translateY = useTransform(scrollYProgress, [0, 0.3, 0.7], [0, 0, -100]);

    return (
        <div className="h-screen sticky top-0">
            <div className="name-section">
                <HeroName />
                <div className="h-screen grid sm:grid-cols-12 w-full">
                    <div className="hero-pic md:col-span-5 p-10">

                        <motion.div style={{ opacity, y: translateY }} className="h-full">
                            <HeroPic />
                        </motion.div>
                    </div>
                    <div className="h-screen md:col-span-7 p-10">

                        <motion.div style={{ opacity, y: translateY }} className="h-full">
                            <AboutMe />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
