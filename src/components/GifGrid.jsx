import { useEffect, useState } from "react";

//import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {  

    const {images, isLoading} = useFetchGifs(category);
    
    /*
    const [images, setImages] = useState([]);

    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
        //console.log(newImages);
    }

    useEffect(() => {
        getImages();
    }, []);   
    */   

    return(
        <>
            <h3>{category}</h3>

            {
                isLoading
                ? ( <h2> Cargando... </h2> )
                : null
            }
            
            <div className="card-grid">
                {
                    images.map( (image) => (
                        <GifItem 
                            key={image.id}
                            {...image}
                        />
                    ))
                }
            </div>
        </>
    )

}