import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";



export default function About(){

    const counter = useSelector(state => state);

    const dispatch = useDispatch();

    const data = {
        response: {
            "english": 23,
            "hindi": 21,
            "dataStructure": 12
        }
    }



    useEffect(()=> {
        window.scroll(0, 0);
    }, []);
    
    return (
        <>
            <h3>About Page</h3>
            <h3>{counter.vehicle}</h3>
            <h4>{counter.wheels}</h4>
            {counter.color && <p>It is in {counter.color} color</p>}

            <button
                onClick={() =>
                dispatch({
                    type: "Car",
                    data: data,
                })
                }
            >Car</button>

            <button
                onClick={() =>
                dispatch({
                    type: "Bike",
                    data: data,
                })
                }
            >Bike</button>
            <div className="about">
                hello i am about
            </div>
        </>
    );  
};

