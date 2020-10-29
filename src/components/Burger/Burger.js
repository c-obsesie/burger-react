import React from 'react';
import  './Burger.css'
import BurgerIngredient from '../Burger/BurgerIngredient/BurgerIngredient'
const burger=(props)=>{

    const transformedIngredient=Object.keys(props.ingredients).map(igKey=>{return[...Array(props.ingredients[igKey])].map((_,i)=>{
        return<BurgerIngredient key={igKey+i} type={igKey}></BurgerIngredient>
    })


    })
    return(
<div className="Burger">
     <BurgerIngredient type="Bread-top"></BurgerIngredient>
{transformedIngredient}


     <BurgerIngredient type="Bread-bottom"></BurgerIngredient>

</div>
    )
}
export default burger;