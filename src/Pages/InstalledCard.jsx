import React from 'react';
import star from '../assets/icon-ratings.png'
import download from '../assets/icon-downloads.png'
import { toast } from 'react-toastify';

const InstalledCard = ({ app , handleRemove}) => {
    const { image, title, downloads, ratingAvg, size, id } = app;

    const handleUninstall =(id) =>{
        handleRemove(id);
        toast.success(`${title} has been Uninstalled Successfully`);
    }
    return (
        <div className='md:flex md:justify-between md:items-center bg-white p-4 rounded-sm my-4'>
            <div className='md:flex justify-between items-center gap-x-4'>
                <div className='bg-[#D9D9D9] mx-auto w-20 p-3 object-contain rounded-lg'>
                    <img className='' src={image} alt="" />
                </div>
                <div>
                    <div>
                        <h1 className='text-xl font-medium  mt-2 md:mt-0 text-center md:text-left'>
                            {title}
                        </h1>
                    </div>

                    <div className='flex justify-center md:justify-start gap-x-8 items-center mt-2'>
                        <div className='flex justify-between items-center gap-x-2'>
                            <img src={download} className='w-4' alt="" />
                            <p className='font-medium  text-[#00D390]'>{downloads}M</p>
                        </div>

                        <div className='flex justify-between items-center gap-x-2'>
                            <img src={star} className='w-4' alt="" />
                            <p className='font-medium  text-[#FF8811]'>{ratingAvg}</p>
                        </div>

                        <div>
                            <p className='text-[#627382]'>{size} MB</p>
                        </div>

                    </div>
                </div>
            </div>

            <div className=' mt-4 md:mt-0 mx-auto md:mx-0'>
                <button onClick={() => handleUninstall(id)} className='bg-[#00D390] py-2 px-4 w-full md:w-auto rounded-sm text-center text-white font-semibold cursor-pointer hover:scale-105 transition ease-in-out'>Uninstall</button>
            </div>

        </div>
    );
};

export default InstalledCard;