import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
    return (
            <footer className="bg-[#161B22] text-gray-300 py-6 mt-10">
                <div className=" max-w-7xl mx-auto px-12 flex flex-col md:flex-row items-center justify-between gap-6 ">
                    <div className="flex-1">
                        <h1 className="font-bold text-2xl italic">
                            <span className="text-orange-600">Auto</span>Drive
                        </h1>
                    </div>
                    <p className="text-gray-400">
                        &copy; 2024 Future Cars. All rights reserved.
                    </p>
                </div>
                <div className="flex-1 flex justify-end gap-3">
                {/* Facebook */}
                <a href="#" className="w-10 h-10 rounded-full bg-[#161B22] border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#FF6600] transition-all duration-300">
                    <FaFacebook size={24} />
                </a>

                {/* Instagram */}
                <a href="#" className="w-10 h-10 rounded-full bg-[#161B22] border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#FF6600] transition-all duration-300">
                    <FaInstagram size={24} />
                </a>

                {/* Twitter (X) */}
                <a href="#" className="w-10 h-10 rounded-full bg-[#161B22] border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#FF6600] transition-all duration-300">
                    <FaTwitter size={24} />
                </a>
            </div>
        </footer>   
    
    )
}

export default Footer