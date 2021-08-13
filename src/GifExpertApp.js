import React, {useState} from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);
     
    return (
        <div>
            <a href="https://github.com/jmr85/gif-expert-app">
                <i className="fab fa-github"></i> 
            </a>
            <h2>GifExpertApp</h2>    
            <AddCategory setCategories={setCategories}/>
            <hr/>
                {
                    categories.map( category => 
                       <GifGrid 
                            key={ category }
                            category={ category } 
                       />
                    )
                }       
        </div>
    )
}

export default GifExpertApp;