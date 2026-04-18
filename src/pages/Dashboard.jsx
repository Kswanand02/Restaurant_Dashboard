import { useState,useEffect } from "react";
function Dashboard() {
    const [count, setCount] = useState(0);
    useEffect(() =>{
       console.log("Count Changed :", count);
        
    }, [count]);
    return(
        <div>
            <h1>Dashboard Pages</h1>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
        
    ) 
};

export default Dashboard;