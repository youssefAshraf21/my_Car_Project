import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import CarCard from '../components/CarCard/CarCard';
import Category from '../components/Category/Category';
import Footer from '../components/Footer/Footer';

import modelS from '../assets/model-s.jpeg';
import bmw from '../assets/bmw340.jpg';
import mercedes from '../assets/c300.jpg';

import type { Car } from '../types/car';
import { Link } from 'react-router-dom';

const Home = () => {

  const cars: Car[] = [
    {
      id: 1,
      name: 'Tesla Model S',
      image: modelS,
      price: 79999
    },

    {
      id: 2,
      name: 'bmw-340i',
      image: bmw,
      price: 39999
    },

    {
      id: 3,
      name: 'mercedes c300',
      image: mercedes,
      price: 99999
    },
  ];

  return (
    <div className="bg-[#0B0C10] min-h-screen">
      <Navbar />
      <Hero />

      <section className='px-12 py-10 max-w-7xl mx-auto'>

        <div className='flex justify-between items-center mb-8'>
          <h1 className='text-4xl font-bold text-white'>
            Future Cars
          </h1>
          <Link to="/cars">
            <button className='border border-gray-500 text-gray-300 px-4 py-2 rounded-xl hover:bg-orange-500 hover:border-orange-500 hover:text-white transition duration-300 text-sm'>
              View All
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>

      </section>

      <Category />
      <Footer />
    </div>
  );
};

export default Home;