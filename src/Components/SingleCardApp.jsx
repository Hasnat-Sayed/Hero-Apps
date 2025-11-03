import React from 'react';
import star from '../assets/icon-ratings.png'
import download from '../assets/icon-downloads.png'
import { Link } from 'react-router';

const SingleCardApp = ({ app }) => {
    const { image, title, ratingAvg, downloads, id } = app;

    return (
        <div>
            <Link to={`/app/${id}`} className='block bg-white p-4 rounded-sm shadow-2xl transition ease-in-out hover:scale-105 cursor-pointer'>
                <div className='bg-[#D9D9D9] py-10 rounded-lg'>
                    <img className='mx-auto object-contain h-60 rounded-2xl' src={image} alt="" />
                </div>
                <h1 className='text-xl font-medium my-4'>{title}</h1>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-x-2 items-center bg-[#F1F5E8] py-1 px-2 rounded-sm'>
                        <img className='w-4 h-4' src={download} alt="" />
                        <p className='font-medium text-[#00D390]'>
                            {downloads}M
                        </p>
                    </div>
                    <div className='flex gap-x-2 items-center bg-[#FFF0E1] py-1 px-2 rounded-sm'>
                        <img className='w-4 h-4' src={star} alt="" />
                        <p className='font-medium text-[#FF8811]'>
                            {ratingAvg}
                        </p>
                    </div>
                </div>
            </Link>

        </div>
    );
};

export default SingleCardApp;