import React, {Component} from 'react';
import Auxiliar from '../../hoc/Auxiliar'
import Burger from '../../components/Burger/Burger.js'
class BurgerBuilder extends Component{
    state={
        ingredients:{
            salad:1,
            bacon:1,
            chese:2,
            meat:56,
        }
    }
    render(){
        return(
<Auxiliar>
<Burger ingredients={this.state.ingredients}></Burger>
    <div>Build Controls</div>
</Auxiliar>
        )
    }

}

export default BurgerBuilder;