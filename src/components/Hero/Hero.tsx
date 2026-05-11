import React from 'react';
import hero from '../../assets/hero.jpg';
function Hero() {

    return (
        <section className='h-[600px] bg-cover bg-center bg-no-repeat'
            style={{ backgroundImage: `url(${hero})` }}>
                <div className='container mx-auto px-4'>
                    <div className='pt-20'>
                        <h1 className='text-white font-bold text-6xl leading-tight'>Drive Your <br/><span className='text-orange-600'>Dream</span> Car</h1>
                        <p className='text-white pt-5 leading-6 mb-5'>Explore the world’s best cars.<br/>
                            Find the perfect car for your lifestyle.
                        </p>
                    </div>
                    <div>
                        <button className='bg-primary text-white px-6 py-3 rounded-lg mr-4 font-semibold hover:bg-white hover:text-orange-600  bg-orange-600 transition ease-in-out duration-300'>Get Started</button>
                    </div>
                    
                </div>
        </section>
    )
}

export default Hero;