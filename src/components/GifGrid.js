import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    // const apiKey = "1xCPclNT9TF2lPg32AK1IIeEHUXf4vuM";

    const {data:imgs, loading} = useFetchGifs(category);

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>

            {loading && <p>Loading...</p>}

            <div className="card-grid">
                {
                    imgs.map(img => 
                        <GifGridItem
                            key={img.id} 
                            {...img}
                        />
                    )
                }
            </div>
        </>
    )
}
