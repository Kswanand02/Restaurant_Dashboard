import { useEffect } from "react";
function Expenses(){
    useEffect(()=>{
        console.log("Expenses Mounted");

        return()=>{
            console.log("Expenses Unmounted");
        }
    }, [])
    return <h1>Expenses</h1>
}

export default Expenses;