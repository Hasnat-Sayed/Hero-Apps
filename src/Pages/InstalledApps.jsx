import React, { useState } from 'react';
import { loadInstalled, removeFromList } from '../Utils/localStorage';
import InstalledCard from './InstalledCard';


const InstalledApps = () => {
    const [installed, setInstalled] = useState(() => loadInstalled())
    const [sortOrder, setSortOrder] = useState('none')

    const handleRemove = (id) => {
        removeFromList(id)
        setInstalled(prev => prev.filter(p => p.id !== id))

    }

    const sorted = (() => {
        if (sortOrder === 'ltoh') {
            return [...installed].sort((a, b) => a.downloads - b.downloads)
        } else if (sortOrder === 'htolo') {
            return [...installed].sort((a, b) => b.downloads - a.downloads)
        } else {
            return installed
        }
    })()


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
                    {sorted.length} Apps Found
                </h1>
                <label className='bg form-control w-full max-w-xs'>
                    <select
                        className='select outline-0 bg-[#F5F5F5]'
                        value={sortOrder}
                        onChange={e => setSortOrder(e.target.value)}
                    >
                        <option value='none'>Sort by Downloads</option>
                        <option value='ltoh'>Low to High</option>
                        <option value='htolo'>High to Low</option>
                    </select>
                </label>
            </div>
            <div>

            </div>
            {
                installed.length > 0 ?
                    sorted.map(app => <InstalledCard key={app.id} app={app} handleRemove={handleRemove}></InstalledCard>)
                    :
                    <p className="col-span-4 text-center py-10 text-gray-500 text-3xl font-extrabold">
                        No apps Installed.
                    </p>
            }
        </div>

    );
};

export default InstalledApps;