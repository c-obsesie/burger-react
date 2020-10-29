import React, {Component} from 'react';
import Auxiliar from '../../hoc/Auxiliar'
import Burger from '../../components/Burger/Burger.js'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
class BurgerBuilder extends Component{
    state={
        ingredients:{
            salad:'sals',
            bacon:0,
            chese:0,
            meat:0,
        }
    }
    render(){
        return(
<Auxiliar>
<Burger ingredients={this.state.ingredients}></Burger>
    <BuildControls></BuildControls>
</Auxiliar>
        )
    }

}

export default BurgerBuilder;