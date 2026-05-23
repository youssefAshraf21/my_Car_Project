import suvIcon from '../../assets/suvCar.png';
import sedanIcon from '../../assets/sedanCar.png';
import electricIcon from '../../assets/flash.png';
import sportsCarIcon from '../../assets/sportCar.png';  
import { Link } from 'react-router-dom';

function Category() {

    return (
        <div>
            <h1 className='text-4xl font-bold text-white text-center mt-10 mb-6'>Categories</h1>
            <div className='flex justify-center gap-6 mb-10'>
                <Link to="/cars" className='border border-gray-500 text-gray-300 px-4 py-2 rounded-xl hover:bg-orange-500 hover:border-orange-500 hover:text-white transition duration-300  mb-10 bg-gray-800 w-50 h-30 text-center text-xl font-bold'>
                    <img src={sportsCarIcon} alt="Sports Car" className="w-10 h-10 mx-auto mb-2" />
                    Sports Cars
                </Link>
                <Link to="/cars" className='border border-gray-500 text-gray-300 px-4 py-2 rounded-xl hover:bg-orange-500 hover:border-orange-500 hover:text-white transition duration-300  mb-10 bg-gray-800 w-50 h-30 text-center text-xl font-bold'>
                    <img src={suvIcon} alt="SUV" className="w-10 h-10 mx-auto mb-2" />
                    SUV
                </Link>
                <Link to="/cars" className='border border-gray-500 text-gray-300 px-4 py-2 rounded-xl hover:bg-orange-500 hover:border-orange-500 hover:text-white transition duration-300  mb-10 bg-gray-800 w-50 h-30 text-center text-xl font-bold'>
                    <img src={sedanIcon} alt="Sedan" className="w-10 h-10 mx-auto mb-2" />
                    Sedan
                </Link>
                <Link to="/cars" className='border border-gray-500 text-gray-300 px-4 py-2 rounded-xl hover:bg-orange-500 hover:border-orange-500 hover:text-white transition duration-300  mb-10 bg-gray-800 w-50 h-30 text-center text-xl font-bold'>
                    <img src={electricIcon} alt="Electric" className="w-10 h-10 mx-auto mb-2" />
                    Electric
                </Link>
            </div>
        </div>
    )
}

export default Category;