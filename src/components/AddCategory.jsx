import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {
    
    const [inputValue, setInputValue] = useState('One Punch');

    const onInputChange = (event) => {
        //console.log( event.target.value )
        setInputValue( event.target.value );
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;
        //console.log(inputValue);
        
        //console.log(setCategories);
        //setCategories(categories => [inputValue, ...categories]);

        onNewCategory(inputValue.trim());

        setInputValue('');
    }

    /*(event) => onInputChange(event)*/

    return (
        <form onSubmit={ (event) => onSubmit(event) }>
            <input 
                type="text" 
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}