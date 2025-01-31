import AboutMe from "./AboutMe";
import { motion } from "framer-motion";
import HeroName from "./HeroName";
import HeroPic from "./HeroPic";
import Navbar from "./Navbar";
import Slider from "./Slider";

const Home = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <div className=" ">
                <div className="name-section ">
                    <HeroName />

                    <div className=" grid  sm:grid-cols-12    w-full">
                        <div className="hero-pic md:col-span-5 p-10 ">
                            <HeroPic />
                        </div>
                        <div className="md:col-span-7 p-10 ">
                            <AboutMe />
                        </div>

                    </div>
                </div>
                <motion.div
                    className="slider mt-12 "
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                </motion.div>
            </div>
            <div className="text-xl text-center  sm:text-2xl font-bold text-gray-800 font-poppins ">
                Some of my Projects
            </div>
            <div className="karosel flex justify-center">
                <Slider />

            </div>

        </>
    );
};

export default Home;