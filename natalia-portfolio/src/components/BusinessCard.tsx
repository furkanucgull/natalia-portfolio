const BusinessCard = () => {
    return (
        <div className=" grid grid-cols-2  sm:py-12 overflow-hidden w-full">

            <div className="flex items-center justify-center border-r-4 h-62 w-38 mt-8  border-white lg:h-96 lg:mt-20 lg:w-full">
                <div className="lg:text-[190px]  text-[100px]  relative font-roboxthin text-white">N
                    <div className="absolute top-11 -right-4 lg:top-24 lg:-right-7 ">
                        S
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-4 justify-between lg:px-10 lg:h-96 lg:mt-20 w-full">
                <div className="flex flex-col gap-3  mt-6">
                    <h1 className="text-3xl font-robox text-white lg:text-6xl ">Natalia Senyshch </h1>
                    <h1 className="text-xl font-glacial text-white lg:text-5xl">Coach </h1>
                    <p className="text-base lg:text-4xl font-glacial text-white text-wrap ">Author of artistic workshops</p>
                </div>

                <div className=" flex flex-col lg:gap-4 lg:mb-10 mb-20 -mx-4 ">

                    <p className="text-base lg:text-4xl font-bold text-white">+48 736 400 764</p>
                    <p className="text-base lg:text-4xl font-glacial text-white text-wrap ">nataliasenyshch@gmail.com</p>

                </div>
            </div>
        </div>
    );
};

export default BusinessCard;
