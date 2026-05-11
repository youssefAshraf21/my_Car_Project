import React from 'react';
import type { Car } from '../../types/car';
type CarCardProps = {
    car: Car;
}
function CarCard({ car }: CarCardProps) {
    return (
        <div className='bg-[#161B22] rounded-2xl overflow-hidden w-full max-w-[350px] shadow-lg hover:scale-105 transition duration-300'>
            <img src={car.image} alt={car.name} 
            className='w-full h-[180px] object-cover'/>

            <div className='p-4'>
                <h2 className='text-xl font-bold text-white'>{car.name}</h2>
                <div className='flex items-center justify-between mt-4'>
                    <p className='text-gray-300 text-lg font-semibold'>
                        ${car.price.toLocaleString()}
                    </p>
                    <button className='border border-gray-500 text-gray-300 px-4 py-2 rounded-xl hover:bg-orange-500 hover:border-orange-500 hover:text-white transition duration-300 text-sm'>
                        View Details
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CarCard