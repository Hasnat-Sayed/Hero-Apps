import React from 'react';
import useApps from '../Hooks/useApps';
import Banner from '../Components/Banner';
import { Link } from 'react-router';
import SingleCardApp from '../Components/SingleCardApp';

const Home = () => {

    const { apps, loading } = useApps()
    const featuredApps = apps.slice(0, 8)

    return (
        <div>
            <Banner></Banner>
            <div className='bg-[#F5F5F5] px-4 lg:px-20 py-4 md:py-8 lg:py-12'>
                <div className=''>
                    <h1 className='text-4xl md:text-5xl font-bold text-center'>
                        Trending Apps
                    </h1>
                    <p className='text-2xl text-[#627382] text-center py-4'>
                        Explore All Trending Apps on the Market developed by us
                    </p>
                </div>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 pt-6'>
                    {
                        featuredApps.map(app => 
                        <SingleCardApp key={app.id} app={app}></SingleCardApp>)
                    }
                </div>
                <div className='mt-10 flex justify-center'>
                    <Link to='/apps' className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] font-semibold text-white py-3 px-8 rounded-md hover:scale-105 transition ease-in-out">
                        Show All
                    </Link>
                </div>

            </div>
        </div>


    );
};

export default Home;