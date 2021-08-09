import React from 'react'

function GridGifItem({title, url}) {

    return (
        <div>
            <p>{title}</p>
            <img src={url} alt={title}/>
        </div>
    )
}

export default GridGifItem;