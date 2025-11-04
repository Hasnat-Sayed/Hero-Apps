import React from 'react';
import { Link } from 'react-router';
import appError from '../assets/App-Error.png';

const AppNotFound = () => {
    return (
        <div >
            <div className='container mx-auto w-full flex flex-col min-h-screen'>
                <div className='flex-1'>
                    <div className='bg-[#F5F5F5] p-20 text-center'>

                        <img className='mx-auto' src={appError} alt="" />
                        <h1 className='text-5xl font-semibold mt-14'>
                            OPPS!! APP NOT FOUND
                        </h1>
                        <p className='text-[#627382] text-xl py-4 mb-2'>
                            The App you are requesting is not found on our system.  please try another apps
                        </p>

                        <Link to='/' className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] font-semibold text-white py-3 px-10 rounded-sm">
                            Go Back!
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppNotFound;