import React from 'react';
import useApps from '../Hooks/useApps';
import Banner from '../Components/Banner';

const Home = () => {
    const { apps, loading } = useApps()

   const featuredApps = apps.slice(0, 8)
    return (
        <div>
            <Banner></Banner>
            <div className='px-4 lg:px-20 py-4 md:py-8 lg:py-12'>
           {
                featuredApps.map(a => (<div><p>{a.id}</p><img
                        className='h-[166px]'
                        src={a.image}
                        alt="Shoes" /></div>) )
            }
        </div>
        </div>
        
        
    );
};

export default Home;