import { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import CarCard from '../components/CarCard/CarCard';
import useAllCars from '../hooks/useAllCars';

const categories = ['All', 'Sports', 'SUV', 'Sedan', 'Electric'];

const Cars = () => {
    const { cars, loading, error } = useAllCars();
    const [search, setSearch] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');

    const filtered = cars.filter(car => {
    const matchesSearch = car.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === 'All' || car.category === activeCategory;
    return matchesSearch && matchesCategory;
});

    return (
        <div className='bg-[#0B0C10] min-h-screen'>
            <Navbar />

            {/* Full width header */}
            <div className='bg-[#161B22] px-12 py-6'>
                <h1 className='text-4xl font-bold text-white'>All Cars</h1>
                <p className='text-gray-400 mt-1'>Home / Cars</p>

                {/* Search + Filter Bar */}
                <div className='flex items-center gap-3 mt-4'>
                    <div className='flex items-center bg-[#0B0C10] border border-gray-700 rounded-lg px-3 py-2 gap-2'>
                        <svg className='w-4 h-4 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z' />
                        </svg>
                        <input
                            type='text'
                            placeholder='Search cars...'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className='bg-transparent text-white text-sm outline-none w-40 placeholder-gray-500'
                        />
                    </div>

                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition duration-300 
                                ${activeCategory === cat
                                    ? 'bg-orange-500 text-white'
                                    : 'bg-[#0B0C10] border border-gray-700 text-gray-300 hover:border-orange-500 hover:text-white'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Cars Grid */}
            <section className='px-12 py-10 max-w-7xl mx-auto'>
                {loading && <p className="text-gray-400 text-center">Loading cars...</p>}
                {error && <p className="text-red-400 text-center">Error: {error}</p>}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    {filtered.map((car) => (
                        <CarCard key={car.id} car={car} />
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Cars;