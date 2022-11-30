import React, { FC } from "react";
import Ingredient from '../ingredients-item/ingredients-item';
import style from '../ingredients-list/ingredients-list.module.css';
import { TIngredient, PropsIngredList } from "../../utils/types";
 
const IngredientCategory: FC<PropsIngredList> = ({categoryData, title, id, refer}) => {
    return (
        <>
        <h3 className={`text text_type_main-medium mb-6 mt-10`} id={id} ref={refer} >
            {title}
        </h3>
        <div className={style.category}>    
            { categoryData.map((el:TIngredient) => {
                return <Ingredient ingredientData={el} key={el._id} />
            })}
        </div>
        </>  
    )
}

export default React.memo(IngredientCategory);