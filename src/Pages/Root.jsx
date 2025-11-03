import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const Root = () => {


    return (
        <div className='container mx-auto w-full flex flex-col min-h-screen'>
            <Navbar />
            <div className=' px-4 lg:px-20 py-4 md:py-8 lg:py-12 flex-1'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;