import React, { useState } from 'react';
import useApps from '../Hooks/useApps';
import SingleCardApp from '../Components/SingleCardApp';

const Apps = () => {
    const { apps, loading } = useApps()
    const [search, setSearch] = useState('')
    const term = search.trim().toLocaleLowerCase()
    const searchedApps = term
        ? apps.filter(app =>
            app.title.toLocaleLowerCase().includes(term))
        : apps

    return (
        <div className='bg-[#F5F5F5] px-4 lg:px-20 py-4 md:py-8 lg:py-12'>
            <h1 className='text-center text-5xl font-bold'>
                Our All Applications
            </h1>
            <p className='text-center text-xl text-[#627382] mt-4 mb-6'>
                Explore All Apps on the Market developed by us. We code for Millions
            </p>

            <div className='flex flex-col gap-y-4 md:flex-row justify-between items-center pt-4'>
                <h1 className='text-2xl font-semibold'>
                    ({searchedApps.length}) Apps Found
                </h1>
                <label className='input bg-[#F5F5F5] outline-0'>
                    <input
                        type='search'
                        value={search}
                        onChange={(e) => { setSearch(e.target.value) }}
                        placeholder='Search Apps' />

                </label>

            </div>

            {searchedApps.length > 0 ? (
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 pt-6'>
                    {searchedApps.map(app => (<SingleCardApp key={app.id} app={app} />))}
                </div>
            ) : (
                <p className="col-span-4 text-center py-10 text-gray-500 text-3xl font-extrabold">
                    No apps matches your search.
                </p>
            )}
        </div>
    );
};

export default Apps;