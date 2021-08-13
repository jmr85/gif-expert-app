import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
//import { getGifs } from '../helpers/getGifs';
//import GridGifItem from './GridGifItem';

const GifGrid = ({category}) => {

    // const [images, setImages] = useState([]);
    const {loading} = useFetchGifs();
    console.log(loading);
    
    // useEffect(() => {
    //     getGifs(category).then(setImages);
    // }, [category]);
    

    return (
        <>
            <h3> { category } </h3>
            {loading ? 'Cargando...': 'Data cargada'}
          {/*   <div className="card-grid">
                {
                    images.map( img => 
                    <GridGifItem 
                        key={img.id} 
                        { ...img }
                    />)
                }     
            </div> */}
        </>
    )
}

export default GifGrid;
