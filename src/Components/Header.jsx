import React from "react";
import Home from "./Home";
import Test from "./Test";
import {Link, Route, Switch} from 'react-router-dom';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
    
    return(
        <React.Fragment>
            <ul>
            <Link to='/'>Home</Link>
                <li>
                    <Link to='/home'>Home</Link>
                </li>
                {/* <li>
                    <Link to='/'>sobre Mi</Link>
                </li>
                <li>
                    <Link to='/'>Skill</Link>
                </li>
                <li>
                    <Link to='/'>Experiencia</Link>
                </li>
                <li>
                    <Link to='/'>Mis Proyectos</Link>
                </li>
                <li>
                    <Link to='/'>Redes</Link>
                </li> */}
            </ul>
            <Switch>
            <Route  path="/home">
            <Home />
                </Route>

                <Route exact path="/">
                    <Test />
                </Route>
                
            </Switch>
        </React.Fragment>
            
        )
    
}


export default Header;