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
        console.log(counter)
        window.scroll(0, 0);
    }, []);
    
    return (
        <>
            <h3>About Page</h3>
            {counter.reducer.vehicle}

            <button
                onClick={() =>
                dispatch({
                    type: "Car",
                    data: data
                })
                }
            >Car</button>

            <button
                onClick={() =>
                dispatch({
                    type: "ADD_TODO",
                    data: data
                })
                }
            >Bike</button>

            {counter.todos.todo}
            <div className="about">
                hello i am about
            </div>
        </>
    );  
};

