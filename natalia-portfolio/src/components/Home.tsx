import AboutMe from "./AboutMe";
import HeroName from "./HeroName";
import HeroPic from "./HeroPic";
import Navbar from "./Navbar";

const Home = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <div className="background-color  min-h-screen w-full bg-gradient-to-r from-neutral-300 to-gray-500 overflow-hidden ">
                <div className="name-section">
                    <HeroName />

                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full">
                        <div className=" ">
                            <AboutMe />
                        </div>
                        <div className="">
                            <HeroPic />
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;