import 'flowbite';
import { useState } from "react";
import { useTransform, motion } from "framer-motion";
import photo1 from '../images/photo1.jpg';
import photo2 from '../images/photo2.jpg';
import photo3 from '../images/photo3.jpg';
import photo4 from '../images/photo4.jpg';
import photo5 from '../images/photo5.jpg';
import photo6 from '../images/photo6.jpg';
import cursor from '../images/cursor.png';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Slider = ({ scrollYProgress }: any) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 0]);

    const images = [photo1, photo2, photo3, photo4, photo5, photo6];

    const responsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 3 },
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
    };

    return (
        <>
            <motion.div style={{ scale, rotate }}
                initial={{ y: 800, opacity: 0 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 1, type: "spring" }}
                className="h-screen relative w-full mx-auto mt-80 p-6 lg:mt-20 bg-gradient-to-r from-neutral-300 to-gray-600"
            >
                <h1 className="text-xl text-center sm:text-2xl font-bold text-gray-800 font-poppins mb-10">
                    Some Of My Projects
                </h1>
                <Carousel
                    showDots={true}
                    responsive={responsive}
                    ssr={true}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={1300}
                    keyBoardControl={true}
                    customTransition="transform 600ms ease-in-out"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px mx-2"
                >
                    {images.map((img, index) => (
                        <div key={index} className="w-full">
                            <img
                                src={img}
                                alt={`Photo ${index + 1}`}
                                style={{ cursor: `url(${cursor}), pointer` }}
                                className="w-96 h-96  object-fill rounded-4xl lg:shadow-lg  hover:scale-105 transition-transform   hover:cursor-crosshair "
                                onClick={() => setSelectedImage(img)}
                            />
                        </div>
                    ))}
                </Carousel>
            </motion.div>


            {selectedImage && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center"
                    onClick={() => setSelectedImage(null)}
                >
                    <motion.img
                        src={selectedImage}
                        alt="Expanded view"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.8 }}
                        className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
                    />
                </motion.div>
            )}
        </>
    );
};

export default Slider;
