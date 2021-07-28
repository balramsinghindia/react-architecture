import { Link, useRouteMatch ,Route ,Switch } from "react-router-dom";
import { Orange } from "./fruits/Orange";
import { Apple } from "./fruits/Apple";
import {Banana} from "./fruits/Banana";

export function Fruits(){
    let {path , url } = useRouteMatch();
    return(
        <>
        <h3>Fruits !</h3>
        <ul>
            <li>
            <Link to={`${url}/orange`}>Orange</Link>
            </li>
            <li>
            <Link to={`${url}/apple`}>Apple</Link>
            </li>
            <li>
            <Link to={`${url}/banana`}>Banana</Link>
            </li>
        </ul>
        <Switch>
        <Route exact path={path}>
            <h3 className="param">Select a fruit</h3>
        </Route>    
        <Route path={`${path}/:fruitname`}>
             <Orange/>
         </Route>
        <Route path={`${path}/:fruitname`}>
             <Apple/>
         </Route>
        <Route path={`${path}/:fruitname`}>
             <Banana/>
         </Route>
        </Switch>
       
        </>
    );
}