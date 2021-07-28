import {useParams} from 'react-router-dom';

export function Carrot(){
    let {vegetableName} = useParams();
    return(
        <>
         <h3>Carrot</h3>
        <h3 className="param">{vegetableName}</h3>
        <hr></hr>
        </>
    )
}