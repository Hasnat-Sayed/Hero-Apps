import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import Loading from '../Components/Loading';


const Root = () => {



    return (
        <div className='container mx-auto w-full flex flex-col min-h-screen'>
            <Navbar />

            <div className=' flex-1'>
                <Outlet />
            </div>
            
            <Footer />
        </div>
    );
};

export default Root;