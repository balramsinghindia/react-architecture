import { useParams } from "react-router";

export function Brinjal(){
    let {vegetableName} = useParams();
    return(
        <>
        <h3>Brinjal</h3>
        <h3 className="param">{vegetableName}</h3>
        <hr></hr>
        </>
    )
}