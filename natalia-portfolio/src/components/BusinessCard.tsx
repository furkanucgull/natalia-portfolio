const BusinessCard = () => {
    return (
        <div className="bg-[linear-gradient(135deg,#fff9c4,#52b69a_40%,rgba(100,159,117,0.385)_70%)] grid grid-cols-2 lg:h-screen sm:py-12 overflow-hidden w-full">

            <div className="flex items-center justify-center border-r-4 h-96  border-white lg:h-96 lg:mt-20">
                <div className="lg:text-[190px]  text-5xl  relative font-roboxthin text-white">N
                    <div className="absolute top-6 -right-2.5 lg:top-24 lg:-right-7 ">
                        S
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-4 justify-between lg:px-10 lg:h-96 lg:mt-20 w-fit">
                <div className="flex flex-col gap-3">
                    <h1 className="text-3xl font-robox text-white lg:text-6xl ">Natalia Senyshch </h1>
                    <h1 className="text-xl font-glacial text-white lg:text-5xl">Coach </h1>
                    <p className="text-base lg:text-4xl font-glacial text-white">Author of artistic workshops</p>
                </div>

                <div className=" flex flex-col lg:gap-4 lg:mb-10">

                    <p className="text-base lg:text-4xl font-bold text-white">+48 736 400 764</p>
                    <p className="text-base lg:text-4xl font-glacial text-white">nataliasenyshch@gmail.com</p>

                </div>
            </div>
        </div>
    );
};

export default BusinessCard;
