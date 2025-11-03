import React from 'react';
import useApps from '../Hooks/useApps';

const Home = () => {
    const { apps, loading } = useApps()

   const featuredApps = apps.slice(0, 8)
    return (
        <div>
           {
                featuredApps.map(a => (<div><p>{a.id}</p><img
                        className='h-[166px]'
                        src={a.image}
                        alt="Shoes" /></div>) )
            }
        </div>
    );
};

export default Home;