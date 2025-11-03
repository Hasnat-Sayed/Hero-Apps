import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import { Outlet, useLocation } from 'react-router';
import Footer from '../Components/Footer';
import Loading from '../Components/Loading';


const Root = () => {
    const [isNavigating, setIsNavigating] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsNavigating(true);
        const timer = setTimeout(() => {
            setIsNavigating(false);
        }, 300);
        return () => clearTimeout(timer);
    }, [location.pathname]);

    return (
        <div className='container mx-auto w-full flex flex-col min-h-screen'>
            <Navbar />
            {isNavigating ? (
                <Loading></Loading>
            ) : (
                <div className=' flex-1'>
                    <Outlet />
                </div>
            )}
            <Footer />
        </div>
    );
};

export default Root;