import Socials from "./Socials";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-gray-800 via-gray-600 to-gray-900 text-gray-300 border-t border-gray-700 rounded-t-3xl py-8 px-6 mt-62 ">
            <div className="container mx-auto flex flex-col items-center justify-between text-center lg:text-left lg:flex-row">

                <div className="mb-4 lg:mb-0">
                    <h1 className="text-sm md:text-lg font-semibold tracking-wide">
                        © 2025 Natalia Senyshch. All rights reserved.
                    </h1>
                </div>


                <Socials />
            </div>
        </footer>
    );
};

export default Footer;
