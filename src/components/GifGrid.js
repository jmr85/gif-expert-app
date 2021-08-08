import React from 'react';

const GifGrid = ({category}) => {

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
    }

    getGifs();

    return (
        <div>
            <h3> { category } </h3>
        </div>
    )
}

export default GifGrid;
