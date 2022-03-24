import React from "react";
import { Switch, Route, Redirect} from "react-router";

import Home from "../components/home/home";
import UserCrud from "../components/user/usercrud"; 
import Sobre from "../components/home/sobre"
import Mostrar from "../components/home/mostrar"
import Cartas from "../components/home/cartas"

export default props => 
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/users'  component={UserCrud}/>
        <Route exact path='/Sobre' component={Sobre}/>
        <Route exact path='/Mostrar' component={Mostrar}/>
        <Route exact path='/Cartas' component={Cartas}/>

        <Redirect from="*" to='/' />
 
    </Switch>