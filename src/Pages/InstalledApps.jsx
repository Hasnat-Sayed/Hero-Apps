import React from 'react';

const InstalledApps = () => {
    return (
    
           <div className='bg-[#F5F5F5] px-4 lg:px-20 py-4 md:py-8 lg:py-16'>
            <h1 className='text-center text-5xl font-bold'>
               Your Installed Apps
            </h1>
            <p className='text-center text-xl text-[#627382] mt-4 mb-6'>
                Explore All Trending Apps on the Market developed by us
            </p>

            <div className='flex flex-col gap-y-4 md:flex-row justify-between items-center pt-4'>
                <h1 className='text-2xl font-semibold'>
                    Apps Found
                </h1>
                <label className='input bg-[#F5F5F5] outline-0'>
                    <input
                        type='select'
                        />
                </label>

            </div>
            
            </div> 
       
    );
};

export default InstalledApps;