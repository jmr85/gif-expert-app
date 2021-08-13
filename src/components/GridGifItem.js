import React from 'react'

function GridGifItem({title, url}) {

    return (
        <div className="card animate__animated animate__fadeIn">
            <p>{title}</p>
            <img src={url} alt={title}/>
        </div>
    )
}

export default GridGifItem;