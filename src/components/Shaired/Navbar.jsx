// import React from 'react'

function Navbar() {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Menu Items on the left */}
                <ul className="flex space-x-6">
                    {/* Logo in the middle */}
                <div className="text-white text-xl font-bold">
                    MyApp
                </div>

                    <li>
                        <a href="#" className="text-gray-300 hover:text-white">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-300 hover:text-white">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-300 hover:text-white">
                            Services
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-300 hover:text-white">
                            Contact
                        </a>
                    </li>
                </ul>

                
                {/* CTA Button on the right */}
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                    Get Started
                </button>
            </div>
        </nav>
    )
}

export default Navbar;
