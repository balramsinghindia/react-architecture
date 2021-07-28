import { useParams } from "react-router";
import { useRouteMatch } from "react-router-dom";

export function Apple(){
    let {fruitname} = useParams();
    return(
          <>
          <h3 className="param">{fruitname}</h3>
          <hr></hr>
          </>
    )

}