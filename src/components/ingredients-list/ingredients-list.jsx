import React from "react";
import Ingredient from '../ingredients-item/ingredients-item'
import style from '../ingredients-list/ingredients-list.module.css';

const IngredientCategory = ({categoryData, title, id}) => {
    return (
        <>
        <h3 className={`text text_type_main-medium mb-6 mt-10`} id={id}>
            {title}
        </h3>
        <div className={style.category}>    
            { categoryData.map((el) => {
                return <Ingredient  count={1} ingredientData={el} key={Ingredient._id}/>
            })}
        </div>
        </>
            
    )
}

export default React.memo(IngredientCategory);