import Navbar from '../components/Navbar/Navbar';
    import Footer from '../components/Footer/Footer';
    import CarCard from '../components/CarCard/CarCard';
    import type { Car } from '../types/car';

    type FavoritesProps = {
    favorites: Car[];
    toggleFavorite: (car: Car) => void;
    }

    const Favorites = ({ favorites, toggleFavorite }: FavoritesProps) => {
    return (
        <div className='bg-[#0B0C10] min-h-screen'>
        <Navbar />

        <div className='bg-[#161B22] px-12 py-6'>
            <h1 className='text-4xl font-bold text-white'>Favorites</h1>
            <p className='text-gray-400 mt-1'>Home / Favorites</p>
        </div>

        <section className='px-12 py-10 max-w-7xl mx-auto'>
            {favorites.length === 0 ? (
            <div className='flex flex-col items-center justify-center mt-20 gap-4'>
                <p className='text-gray-400 text-xl'>No favorites yet!</p>
                <a href='/cars' className='text-orange-500 hover:underline'>
                Browse cars →
                </a>
            </div>
            ) : (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center'>
                {favorites.map(car => (
                <CarCard
                    key={car.id}
                    car={car}
                    isFavorite={true}
                    toggleFavorite={toggleFavorite}
                />
                ))}
            </div>
            )}
        </section>

        <Footer />
        </div>
    );
    };

    export default Favorites;