import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import error from '../assets/error-404.png'
import { Link } from 'react-router';

const Errorpage = () => {
    return (
        <div className='container mx-auto w-full flex flex-col min-h-screen'>
            <Navbar></Navbar>
            <div className='flex-1'>
                <div className='bg-[#F5F5F5] p-20 text-center'>

                    <img className='mx-auto' src={error} alt="" />
                    <h1 className='text-5xl font-semibold mt-14'>
                        Oops, page not found!
                    </h1>
                    <p className='text-[#627382] text-xl py-4 mb-2'>
                        The page you are looking for is not available.
                    </p>

                    <Link to='/' className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] font-semibold text-white py-3 px-10 rounded-sm ">
                        Go Back!
                    </Link>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Errorpage;