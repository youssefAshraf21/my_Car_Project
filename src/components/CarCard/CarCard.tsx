    import { Link } from 'react-router-dom';
import type { Car } from '../../types/car';
    import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

    type CarCardProps = {
    car: Car;
    isFavorite: boolean;
    toggleFavorite: (car: Car) => void;
    }

    function CarCard({ car, isFavorite, toggleFavorite }: CarCardProps) {
    return (
        <div className='bg-[#161B22] rounded-2xl overflow-hidden w-full max-w-87.5 shadow-lg hover:scale-105 transition duration-300'>
        <img src={car.image} alt={car.name}
            className='w-full h-45 object-cover' />

        <div className='p-4'>
            <h2 className='text-xl font-bold text-white'>{car.name}</h2>
            <div className='flex items-center justify-between mt-4'>
            <p className='text-gray-300 text-lg font-semibold'>
                ${car.price.toLocaleString()}
            </p>
            
            <Link to={`/CarDetails/${car.id}`} className='border border-gray-500 text-gray-300 px-4 py-2 rounded-xl hover:bg-orange-500 hover:border-orange-500 hover:text-white transition duration-300 text-sm'>
                View Details
            </Link>

            <button onClick={() => toggleFavorite(car)}>
                {isFavorite
                ? <AiFillHeart color="orange" size={24} />
                : <AiOutlineHeart color="orange" size={24} />}
            </button>
            </div>
        </div>
        </div>
    );
    }

    export default CarCard;