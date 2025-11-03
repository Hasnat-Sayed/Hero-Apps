import React from 'react';
import useApps from '../Hooks/useApps';
import { useParams } from 'react-router';
import Loading from '../Components/Loading';
import AppNotFound from './AppNotFound';
import star from '../assets/icon-ratings.png'
import download from '../assets/icon-downloads.png'
import review from '../assets/icon-review.png'
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const AppDetails = () => {

    const { id } = useParams()
    const { apps, loading } = useApps()

    const app = apps.find(p => p.id === Number(id))

    if (loading) return <Loading></Loading>

    if (!app) {
        return <AppNotFound />;
    }

    const { image, title, companyName, description, size, ratingAvg, downloads, reviews, ratings } = app || {};

    return (
        <div className='bg-[#F5F5F5] px-4 lg:px-20 py-4 md:py-8 lg:py-16'>
            <div className='md:flex gap-x-10 border-b border-gray-400 pb-10'>

                <div className='bg-white p-6 md:p-12 rounded-2xl shadow-sm'>
                    <img src={image} className='rounded-xl mx-auto h-64 w-64' alt="" />
                </div>

                <div className='flex-1'>
                    <div className='border-b border-gray-400'>
                        <h1 className='text-3xl text-center md:text-left font-bold mt-5 md:mt-0'>
                            {title}
                        </h1>
                        <p className='mt-2 mb-8 text-center md:text-left text-xl font-semibold text-[#632EE3]'>
                            <span className='text-[#627382]'>Developed by </span>
                            {companyName}
                        </p>
                    </div>

                    <div className='md:flex md:justify-between md:items-center my-8 md:max-w-lg'>

                        <div className='text-center md:text-left md:mt-0 mt-8'>
                            <img className='mx-auto md:m-0 w-10 h-10' src={download} alt="" />
                            <p className='mt-2'>Downloads</p>
                            <h2 className='text-[40px] font-extrabold'>{downloads}M</h2>
                        </div>

                        <div className='text-center md:text-left md:mt-0 mt-8'>
                            <img className='mx-auto md:m-0 w-10 h-10' src={star} alt="" />
                            <p className='mt-2'>Average Ratings</p>
                            <h2 className='text-[40px] font-extrabold'>{ratingAvg}</h2>
                        </div>

                        <div className='text-center md:text-left md:mt-0 mt-8'>
                            <img className='mx-auto md:m-0 w-10 h-10' src={review} alt="" />
                            <p className='mt-2'>Total Reviews</p>
                            <h2 className='text-[40px] font-extrabold'>{reviews}</h2>
                        </div>

                    </div>

                    <div className='bg-[#00D390] rounded-sm py-4 px-5 md:mx-0 mx-auto w-fit'>
                        <button className="text-xl font-semibold text-white">
                            Install Now ({size} MB)
                        </button>
                    </div>

                </div>

            </div>

            <div className='py-10 border-b border-gray-400 text-left'>
                <h1 className='text-2xl font-semibold mb-6'>Ratings</h1>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={ratings} layout="vertical">
                        <XAxis type="number" hide={false} />
                        <YAxis
                            dataKey="name"
                            type="category"
                            hide={false}
                            reversed={true}
                        />
                        <Tooltip />
                        <Bar dataKey="count" fill="#FFA500" barSize={30} />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <div className='pt-10 text-left'>
                <h1 className='text-2xl font-semibold mb-6'>Description</h1>
                <p className='text-lg text-[#627382] mt-6 '>{description}</p>
            </div>
        </div>
    );
};

export default AppDetails;