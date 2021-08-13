import React, {useState, useEffect} from 'react';
import GridGifItem from './GridGifItem';

const GifGrid = ({category}) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs();
    }, []);

    const getGifs = async() => {
        const url = 'https://api.giphy.com/v1/gifs/search?api_key=E1Xs92016grdQgcmMAnfn0bSA6iBk9HV&q=Rick and Morty&limit=10';
        const resp = await fetch(url);
        const {data} = await resp.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        console.log(gifs);
        setImages( gifs );
    }

    return (
        <>
            <h3> { category } </h3>
            <div className="card-grid">
                {
                    images.map( img => 
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
