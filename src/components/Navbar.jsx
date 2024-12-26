function Navbar() {
    return (
        <nav
            className="p-4 sticky top-0 bg-white/95 backdrop-blur-xl shadow-lg z-50"
            // style={{
            //     backgroundImage: 'url(https://www.transparenttextures.com/patterns/45-degree-fabric-light.png)',
            //     backgroundSize: 'cover',
            // }}
        >
            <div className="flex flex-wrap justify-between items-center">
                <div className="flex flex-row gap-6 text-lg font-sans text-gray-700">
                    <button className="px-4 py-2 hover:text-black rounded-lg transition">
                        iOS
                    </button>
                    <button className="px-4 py-2 hover:text-black rounded-lg transition">
                        Android
                    </button>
                    <button className="px-4 py-2 hover:text-black rounded-lg transition">
                        Web
                    </button>
                </div>

                <div className="flex items-center gap-6">
                    <form className="relative flex items-center max-w-md w-full">
                        <label htmlFor="simple-search" className="sr-only">
                            Search
                        </label>
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg
                                    className="w-5 h-5 text-gray-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                    aria-hidden="true"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    />
                                </svg>
                            </div>
                            <input
                                type="text"
                                id="simple-search"
                                className="bg-transparent border text-gray-700 text-sm rounded-lg w-full pl-10 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                placeholder="Search"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="absolute right-2 text-gray-500 hover:text-gray-700 transition"
                        >
                            <svg
                                className="w-5 h-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                            </svg>
                        </button>
                    </form>

                    <button className="px-4 py-2 font-poppins text-gray-700 hover:bg-gray-200 hover:text-black rounded-lg transition">
                        Saved
                    </button>
                    <button className="px-4 py-2 font-poppins text-gray-700 hover:bg-gray-200 hover:text-black rounded-lg transition">
                        Community
                    </button>

                    <div className="w-10 h-10 bg-gray-300 text-gray-700 rounded-full flex items-center justify-center hover:bg-gray-200 transition">
                        <span className="text-sm">P</span>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
