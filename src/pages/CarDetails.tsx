    import Navbar from '../components/Navbar/Navbar';
    import Footer from '../components/Footer/Footer';
    import type { Car } from '../types/car';
    import { useParams, useNavigate } from 'react-router-dom';
    import useAllCars from '../hooks/useAllCars';         
    import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
    import { IoArrowBack } from 'react-icons/io5';
    import { BsFuelPump, BsSpeedometer2 } from 'react-icons/bs';
    import { GiGearStickPattern } from 'react-icons/gi';
    import { MdAirlineSeatReclineNormal } from 'react-icons/md';

    type CarDetailsProps = {
    favorites: Car[];
    toggleFavorite: (car: Car) => void;
    };

    function CarDetails({ favorites, toggleFavorite }: CarDetailsProps) {
    const { id } = useParams();
    const navigate = useNavigate();
    const { cars } = useAllCars();

    const car = cars.find((c: Car) => String(c.id) === id);     
    const isFavorite = favorites.some((c: Car) => c.id === car?.id); 

    if (!car) {
        return (
        <div className='min-h-screen bg-[#0D1117] flex flex-col'>
            <Navbar />
            <div className='flex-1 flex items-center justify-center'>
            <p className='text-gray-400 text-xl'>Car not found.</p>
            </div>
            <Footer />
        </div>
        );
    }

    return (
        <div className='min-h-screen bg-[#0D1117] flex flex-col'>
        <Navbar />

        <div className='bg-[#161B22] px-12 py-6 border-b border-gray-800'>
            <button
            onClick={() => navigate(-1)}
            className='flex items-center gap-2 text-gray-400 hover:text-orange-500 transition mb-3 text-sm'
            >
            <IoArrowBack /> Back
            </button>
            <p className='text-gray-400 text-sm'>
            Home / Cars / <span className='text-orange-500 font-semibold'>{car.name}</span>
            </p>
        </div>

        <main className='flex-1 max-w-6xl mx-auto w-full px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12'>
            <div className='rounded-2xl overflow-hidden shadow-2xl bg-[#161B22] h-95'>
            <img
                src={car.image}
                alt={car.name}
                className='w-full h-full object-cover hover:scale-105 transition duration-500'
            />
            </div>

            <div className='flex flex-col justify-between'>
            <div>
                <h1 className='text-4xl font-bold text-white mb-2'>{car.name}</h1>
                <p className='text-orange-500 text-2xl font-semibold mb-6'>
                ${car.price.toLocaleString()}
                </p>
                <p className='text-gray-400 leading-relaxed mb-8'>
                Experience the pinnacle of automotive engineering. This vehicle combines
                cutting-edge technology with elegant design, delivering an unmatched driving experience.
                </p>

                <div className='grid grid-cols-2 gap-4 mb-8'>
                <div className='bg-[#161B22] rounded-xl p-4 flex items-center gap-3'>
                    <BsFuelPump className='text-orange-500 text-xl' />
                    <div>
                    <p className='text-gray-500 text-xs uppercase tracking-wide'>Category</p>
                    <p className='text-white font-semibold'>{car.category}</p>
                    </div>
                </div>
                <div className='bg-[#161B22] rounded-xl p-4 flex items-center gap-3'>
                    <BsSpeedometer2 className='text-orange-500 text-xl' />
                    <div>
                    <p className='text-gray-500 text-xs uppercase tracking-wide'>Price</p>
                    <p className='text-white font-semibold'>${car.price.toLocaleString()}</p>
                    </div>
                </div>
                <div className='bg-[#161B22] rounded-xl p-4 flex items-center gap-3'>
                    <GiGearStickPattern className='text-orange-500 text-xl' />
                    <div>
                    <p className='text-gray-500 text-xs uppercase tracking-wide'>ID</p>
                    <p className='text-white font-semibold'>#{car.id}</p>
                    </div>
                </div>
                <div className='bg-[#161B22] rounded-xl p-4 flex items-center gap-3'>
                    <MdAirlineSeatReclineNormal className='text-orange-500 text-xl' />
                    <div>
                    <p className='text-gray-500 text-xs uppercase tracking-wide'>Status</p>
                    <p className='text-white font-semibold'>Available</p>
                    </div>
                </div>
                </div>
            </div>

            <div className='flex gap-4'>
                <button className='flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition duration-300'>
                Book Now
                </button>
                <button
                onClick={() => toggleFavorite(car)}
                className='border border-gray-600 hover:border-orange-500 px-5 rounded-xl transition duration-300 flex items-center justify-center'
                >
                {isFavorite
                    ? <AiFillHeart color="orange" size={24} />
                    : <AiOutlineHeart color="orange" size={24} />}
                </button>
            </div>
            </div>
        </main>

        <Footer />
        </div>
    );
    }

    export default CarDetails;