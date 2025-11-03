import React from 'react';
import useApps from '../Hooks/useApps';
import { useParams } from 'react-router';
import Loading from '../Components/Loading';
import AppNotFound from './AppNotFound';

const AppDetails = () => {

    const { id } = useParams()
    const { apps, loading } = useApps()

    const app = apps.find(p => p.id === Number(id))

    if (loading) return <Loading></Loading>
    if (!app) {
        return <AppNotFound />;
    }

    const { name, image, category, price, description } = app || {}
    return (
        <div className='card bg-base-100 border shadow-sm'>
            <figure className='h-84 overflow-hidden'>
                <img className='w-full object-cover' src={image} alt='Shoes' />
            </figure>
            <div className='card-body'>
                <h2 className='card-title'>{name}</h2>
                <p>{description}</p>
                <p>Category: {category}</p>
                <p>Price: ${price}</p>
                <div className='card-actions justify-end'>
                    <button
                        onClick={() => updateList(product)}
                        className='btn btn-outline'
                    >
                        Add to Wishlist
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AppDetails;