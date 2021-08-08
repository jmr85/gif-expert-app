import React, {useState} from 'react';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);
    
    const handleAdd = () => {
        setCategories([...categories, 'HunterXHunter']);
    }
     
    return (
        <div>
            <h2>GifExpertApp</h2>    
            <hr/>
            <button onClick={handleAdd}>Add</button>
            <ol>
                {
                    categories.map( (category) => {
                       return <li key={category}> {category} </li>
                    })
                }
            </ol>
        </div>
    )
}


export default GifExpertApp;