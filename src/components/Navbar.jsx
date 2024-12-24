function Navbar() {
    return (
        <nav className="p-2 sticky top-0 backdrop-blur-md border-b border-surface-200 shadow-lg">
            <div className="flex flex-wrap justify-between items-center">
              
                <div className="flex flex-row gap-4 font-mono text-green-950">
                    <button>iOS</button>
                    <button>Android</button>
                    <button>Web</button>
                </div>
                
               
                <div className="flex items-center gap-4 text-green-950">
                    <form className="flex items-center max-w-sm">
                        <label htmlFor="simple-search" className="sr-only">Search</label>
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20" aria-hidden="true">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"/>
                                </svg>
                            </div>
                            <input 
                                type="text" 
                                id="simple-search" 
                                className="backdrop-blur-xl bg-transparent border border-green-300 shadow-xl text-gray-900 text-sm rounded-lg w-full pl-10 p-2.5" 
                                placeholder="Search" 
                                required 
                            />
                        </div>
                        <button type="submit" className="m-2 text-green-600">
                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" aria-hidden="true">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                            <span className="sr-only">Search</span>
                        </button>
                    </form>
                    <button className="p-2 font-mono backdrop-blur-xl bg-transparent border border-green-300 rounded-2xl shadow-xl text-gray-700 hover:bg-green-300">
                        Saved
                    </button>
                    <button className="p-2 font-mono backdrop-blur-xl bg-transparent border border-green-300 rounded-2xl shadow-xl text-gray-700 hover:bg-green-300">
                        Community
                    </button>
                    <div className="p-2 font-mono backdrop-blur-xl bg-green-500 border border-green-300 rounded-full shadow-xl text-gray-700 hover:bg-green-300">
                        Profile
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
