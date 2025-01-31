import 'flowbite';
import { motion } from "framer-motion";
import photo1 from '../images/photo1.jpg';
import photo2 from '../images/photo2.jpg';
import photo3 from '../images/photo3.jpg';
import photo4 from '../images/photo4.jpg';
import photo5 from '../images/photo5.jpg';
import photo6 from '../images/photo6.jpg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Slider = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <motion.div
            initial={{ y: 800, opacity: 0 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{
                delay: 1,
                duration: 1,
                type: "spring"
            }}
            className="relative w-full max-w-screen-lg mx-auto mt-10 p-6 lg:mt-20 "
        >
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
                className=''
            >


                <div className="w-full ">
                    <img src={photo1} alt="Photo 1" className="w-full h-96 object-cover rounded-4xl lg:shadow-lg  " />
                </div>
                <div className="w-full">
                    <img src={photo2} alt="Photo 2" className="w-full h-96 object-cover rounded-4xl lg:shadow-lg " />
                </div>
                <div className="w-full">
                    <img src={photo3} alt="Photo 3" className="w-full h-96 object-cover rounded-4xl lg:shadow-lg " />
                </div>
                <div className="w-full">
                    <img src={photo4} alt="Photo 3" className="w-full h-96 object-cover rounded-4xl lg:shadow-lg " />
                </div>
                <div className="w-full">
                    <img src={photo5} alt="Photo 3" className="w-full h-96 object-cover rounded-4xl lg:shadow-lg " />
                </div>
                <div className="w-full">
                    <img src={photo6} alt="Photo 3" className="w-full h-96 object-cover rounded-4xl lg:shadow-lg " />
                </div>


            </Carousel>
        </motion.div>
    );
};

export default Slider;
