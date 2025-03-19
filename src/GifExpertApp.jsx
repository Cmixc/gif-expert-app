//import React from "react"; Desde la version 17 de react ya no es necesario importar esto
import { useState } from "react"

//import { AddCategory } from "./components/AddCategory";
//import { GifGrid } from "./components/GifGrid";

import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
        //setCategories(categories => [...categories, 'Valorant']);
        //setCategories( cat => [...cat, 'Valorant'] );
        //setCategories(categories => ['Valorant', ...categories]);

        if(categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* input */}
            <AddCategory 
                //setCategories={ setCategories } 
                onNewCategory = { value => onAddCategory(value) }
            />

            {/* listado de gif */}
            <button onClick={ () => onAddCategory() } >Agregar</button>
            
            
                        
            {
                categories.map( category => (
                    //return <li key={ category }>{ category }</li>

                    /*
                        <div key={category}>
                            <li>{category}</li>
                        </div>
                    */
                        
                    <GifGrid 
                        key={category} 
                        category={category}
                    />
                        
                ))
            }
            

                {/* gif item */}
        </>
    )

}