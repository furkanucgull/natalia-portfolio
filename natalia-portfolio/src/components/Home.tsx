import { useRef } from "react";
import AboutSection from "./AboutSection";
import { useScroll, useTransform, motion } from "framer-motion";
import Slider from "./Slider";

const Home = () => {

    const container = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"],
    });
    const showSlider = useTransform(scrollYProgress, [0.6, 0.9], [0, 1]);
    return (
        <>

            <main ref={container} className="relative h-[200vh] ">
                <div ref={aboutRef}>
                    <AboutSection scrollYProgress={scrollYProgress} />
                </div>

                <motion.div style={{ opacity: showSlider }}>
                    <Slider scrollYProgress={scrollYProgress} />
                </motion.div>

                <div >
                </div>
            </main>

        </>
    );
};

export default Home;
