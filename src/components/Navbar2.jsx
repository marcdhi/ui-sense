function Navbar2() {
    return (
        <nav className="pl-6 pt-6 bg-white/95 backdrop-blur-xl shadow-lg z-50">
            <div className="flex flex-wrap justify-start gap-4 items-center text-gray-600 font-quicksand text-md hover:text-gray-500">
                <button className="focus:text-gray-550 focus:text-xl focus:font-semibold relative">
                    Apps
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gray-950 opacity-0 focus:opacity-100 transition-all duration-200"></span>
                </button>
                <button className="focus:text-gray-550 focus:text-xl focus:font-semibold relative">
                    Screens
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gray-950 opacity-0 focus:opacity-100 transition-all duration-200"></span>
                </button>
                <button className="focus:text-gray-550 focus:text-xl focus:font-semibold relative">
                    UI Elements
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gray-950 opacity-0 focus:opacity-100 transition-all duration-200"></span>
                </button>
                <button className="focus:text-gray-550 focus:text-xl focus:font-semibold relative">
                    Flows
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gray-950 opacity-0 focus:opacity-100 transition-all duration-200"></span>
                </button>
            </div>
        </nav>
    );
}

export default Navbar2;
