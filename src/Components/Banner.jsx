import React from 'react';
import banner from "../assets/hero.png";
import playstore from "../assets/playstore.png";
import appstore from "../assets/appstore.png";
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div className='bg-[#F5F5F5] pt-8 lg:pt-12'>
            <div className='px-4 lg:px-20'>

                <div>
                    <h1 className='text-center text-5xl md:text-6xl font-black  text-[#001931]'>
                        We Build <br /><span className='text-[#632EE3]'>Productive</span> Apps
                    </h1>

                    <p className='text-xl  text-[#627382] text-center  mt-4 mb-10'>
                        At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />Our goal is to turn your ideas into digital experiences that truly make an impact.
                    </p>

                </div>

                <div className='text-center md:flex md:justify-center pb-10'>
                    <div className='flex justify-center md:mx-4 border md:mt-0 mt-5  w-52 mx-auto px-5 py-2 rounded-md bg-white border-gray-400 hover:scale-105 transition ease-in-out'>
                        <img src={playstore} alt="" />
                        <Link to='https://play.google.com/store/games?device=windows' target='_blank' className='text-xl font-semibold ml-2 cursor-pointer'>
                            Google Play
                        </Link>
                    </div>
                    <div className='flex justify-center md:mx-4 border md:mt-0 mt-5  w-52 mx-auto px-5 py-2 rounded-md bg-white border-gray-400 hover:scale-105 transition ease-in-out'>
                        <img src={appstore} alt="" />
                        <Link to='https://www.apple.com/app-store/' target='_blank' className='text-xl font-semibold ml-2 cursor-pointer'>
                            App Store
                        </Link>
                    </div>
                </div>

                <div>
                    <img className='w-4xl mx-auto' src={banner} alt="" />
                </div>


            </div>

            <div className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] py-12 md:py-20'>
                <h1 className='text-center text-white text-4xl md:text-5xl font-bold'>
                    Trusted by Millions, Built for You
                </h1>
                <div className='flex flex-col md:flex-row justify-around items-center md:mt-10'>
                    <div className='md:mt-0 mt-10 text-white text-center'>
                        <p>Total Downloads</p>
                        <h2 className='text-4xl md:text-6xl font-extrabold py-2 md:py-4'>
                            29.6M
                        </h2>
                        <p>21% more than last month</p>
                    </div>

                    <div className='md:mt-0 mt-10 text-white text-center'>
                        <p>Total Reviews</p>
                        <h2 className='text-4xl md:text-6xl font-extrabold py-2 md:py-4'>
                            906K
                        </h2>
                        <p>46% more than last month</p>
                    </div>

                    <div className='md:mt-0 mt-10 text-white text-center'>
                        <p>Active Apps</p>
                        <h2 className='text-4xl md:text-6xl font-extrabold py-2 md:py-4'>
                            132+
                        </h2>
                        <p>31 more will Launch</p>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Banner;