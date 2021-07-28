import { Swith ,Route , Link, useRouteMatch, Switch } from 'react-router-dom';
import { Brinjal } from './vegetables/Brinjal';
import { Cabbage } from './vegetables/Cabbage';
import { Carrot } from './vegetables/Carrot';

export function Vegetables(){
    let {path , url} = useRouteMatch();
    return(
        <>
        <h3>Vegetables !</h3>
        <ul>
            <li> <Link to={`${url}/brinjal`}>Brinjal</Link></li>
            <li> <Link to={`${url}/cabbage`}>Cabbage</Link></li>
            <li>  <Link to={`${url}/carrot`}>Carrot</Link></li>
        </ul>
        <Switch>
            <Route exact path = {path}>
                <h3 className="param">Select a vegetable</h3>
            </Route>
            <Route path={`${path}/:vegetableName`} >
                <Brinjal/>
            </Route>
            <Route path={`${path}/:vegetableName`} >
                <Cabbage/>
            </Route>
            <Route path={`${path}/:vegetableName`} >
                <Carrot/>
            </Route>
        </Switch>
        </>
    )
}