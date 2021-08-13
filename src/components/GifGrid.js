import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GridGifItem from './GridGifItem';

const GifGrid = ({category}) => {

    const {data, loading} = useFetchGifs(category);
    console.log(loading);
    

    return (
        <>
            <h3> { category } </h3>
           {loading && <p>Loading...</p>}
           <div className="card-grid">
                {
                    data.map( img => 
                    <GridGifItem 
                        key={img.id} 
                        { ...img }
                    />)
                }     
            </div>
        </>
    )
}

export default GifGrid;
