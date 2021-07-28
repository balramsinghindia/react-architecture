import { useParams } from "react-router";

export function Orange(){
    let {fruitname} = useParams();
    return(
          <>
          <h3 className="param">{fruitname}</h3>
          <hr></hr>
          </>
    )
}