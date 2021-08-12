import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";


export default function About(){
    const counter = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(()=> {
        window.scroll(0, 0);
    }, []);
    
    return (
        <>
            <h3>About Page</h3>
            <div className="about">
                {counter.vehicle}
                hello i am about

                <button
                    onClick={() =>
                    dispatch({
                        type: "Car"
                    })
                    }
                >
                Car
                </button>


                <button
                    onClick={() =>
                    dispatch({
                        type: "Bike"
                    })
                    }
                >
                Bike
                </button> 
            </div>
        </>
    );  
};
