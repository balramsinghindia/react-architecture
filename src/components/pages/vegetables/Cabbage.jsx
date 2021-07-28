import {useParams} from 'react-router-dom';

export function Cabbage(){
    let {vegetableName} = useParams();
    return(
        <>
         <h3>Cabbage</h3>
        <h3 className="param">{vegetableName}</h3>
        <hr></hr>
        </>
    )
}