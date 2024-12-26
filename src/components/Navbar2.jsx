// import { Link } from 'react-router-dom'

function Navbar2(){
    return(
        <nav className="pl-6 pt-6 bg-white/95 backdrop-blur-xl shadow-lg z-50">
            <div className="flex flex-wrap justify-start gap-4 items-cente text-gray-600 font-poppins text-md hover:text-gray-800">
                <button>Apps</button>
                <button>Screens</button>
                <button>UI Elements</button>
                <button>Flows</button>
            </div>
        </nav>
    )
}

export default Navbar2