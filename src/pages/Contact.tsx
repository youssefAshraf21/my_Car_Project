    import Navbar from '../components/Navbar/Navbar';
    import Footer from '../components/Footer/Footer';
    import { useState } from 'react';

    const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [sent, setSent] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSent(true);
    };

    return (
        <div className='bg-[#0B0C10] min-h-screen'>
        <Navbar />

        {/* Header */}
        <div className='bg-[#161B22] px-12 py-6'>
            <h1 className='text-4xl font-bold text-white'>Contact Us</h1>
            <p className='text-gray-400 mt-1'>Home / Contact</p>
        </div>

        {/* Content */}
        <section className='max-w-6xl mx-auto px-12 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16'>

            {/* Left — Info */}
            <div className='flex flex-col gap-8'>
            <div>
                <h2 className='text-2xl font-bold text-white mb-2'>Get in touch</h2>
                <p className='text-gray-400 leading-relaxed'>
                Have a question about a car? Want to schedule a test drive?
                We're here to help. Fill out the form and we'll get back to you as soon as possible.
                </p>
            </div>

            <div className='flex flex-col gap-5'>
                {/* Email */}
                <div className='flex items-center gap-4'>
                <div className='bg-orange-500/10 p-3 rounded-xl'>
                    <svg className='w-5 h-5 text-orange-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                    </svg>
                </div>
                <div>
                    <p className='text-sm text-gray-400'>Email</p>
                    <p className='text-white font-medium'>support@autodrive.com</p>
                </div>
                </div>

                {/* Phone */}
                <div className='flex items-center gap-4'>
                <div className='bg-orange-500/10 p-3 rounded-xl'>
                    <svg className='w-5 h-5 text-orange-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
                    </svg>
                </div>
                <div>
                    <p className='text-sm text-gray-400'>Phone</p>
                    <p className='text-white font-medium'>+1 (800) 123-4567</p>
                </div>
                </div>

                {/* Location */}
                <div className='flex items-center gap-4'>
                <div className='bg-orange-500/10 p-3 rounded-xl'>
                    <svg className='w-5 h-5 text-orange-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
                    </svg>
                </div>
                <div>
                    <p className='text-sm text-gray-400'>Location</p>
                    <p className='text-white font-medium'>123 AutoDrive St, New York, NY</p>
                </div>
                </div>
            </div>
            </div>

            {/* Right — Form */}
            <div className='bg-[#161B22] rounded-2xl p-8'>
            {sent ? (
                <div className='flex flex-col items-center justify-center h-full gap-4 py-12'>
                <div className='bg-orange-500/10 p-4 rounded-full'>
                    <svg className='w-10 h-10 text-orange-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                    </svg>
                </div>
                <h3 className='text-white text-xl font-bold'>Message Sent!</h3>
                <p className='text-gray-400 text-center'>We'll get back to you as soon as possible.</p>
                <button
                    onClick={() => setSent(false)}
                    className='mt-2 text-orange-500 hover:underline text-sm'
                >
                    Send another message
                </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                    <div className='flex flex-col gap-2'>
                    <label className='text-sm text-gray-400'>Name</label>
                    <input
                        type='text'
                        name='name'
                        value={form.name}
                        onChange={handleChange}
                        placeholder='Your name'
                        required
                        className='bg-[#0B0C10] border border-gray-700 rounded-xl px-4 py-2.5 text-white text-sm placeholder-gray-500 outline-none focus:border-orange-500 transition duration-300'
                    />
                    </div>
                    <div className='flex flex-col gap-2'>
                    <label className='text-sm text-gray-400'>Email</label>
                    <input
                        type='email'
                        name='email'
                        value={form.email}
                        onChange={handleChange}
                        placeholder='your@email.com'
                        required
                        className='bg-[#0B0C10] border border-gray-700 rounded-xl px-4 py-2.5 text-white text-sm placeholder-gray-500 outline-none focus:border-orange-500 transition duration-300'
                    />
                    </div>
                </div>

                <div className='flex flex-col gap-2'>
                    <label className='text-sm text-gray-400'>Subject</label>
                    <input
                    type='text'
                    name='subject'
                    value={form.subject}
                    onChange={handleChange}
                    placeholder='How can we help?'
                    required
                    className='bg-[#0B0C10] border border-gray-700 rounded-xl px-4 py-2.5 text-white text-sm placeholder-gray-500 outline-none focus:border-orange-500 transition duration-300'
                    />
                </div>

                <div className='flex flex-col gap-2'>
                    <label className='text-sm text-gray-400'>Message</label>
                    <textarea
                    name='message'
                    value={form.message}
                    onChange={handleChange}
                    placeholder='Write your message...'
                    rows={5}
                    required
                    className='bg-[#0B0C10] border border-gray-700 rounded-xl px-4 py-2.5 text-white text-sm placeholder-gray-500 outline-none focus:border-orange-500 transition duration-300 resize-none'
                    />
                </div>

                <button
                    type='submit'
                    className='w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl transition duration-300 text-sm mt-2'
                >
                    Send Message
                </button>
                </form>
            )}
            </div>

        </section>

        <Footer />
        </div>
    );
    };

    export default Contact;