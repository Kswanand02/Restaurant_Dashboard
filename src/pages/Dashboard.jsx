import { useState, useEffect } from "react";

function Dashboard() {

    const [count, setCount] = useState(0);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [countdown, setCountdown] = useState(10);

    // 🔹 Fetch function
    const fetchData = async () => {
        try {
            setLoading(true);
            setError(null);
            setCountdown(10);

            const res = await fetch("https://jsonplaceholder.typicode.com/posts");
            const result = await res.json();

            setData(result);
        }
        catch {
            setError("Something went wrong.");
        }
        finally {
            setLoading(false)
        }

    };

    useEffect(() => {
        console.log("Updated Data : ", data);
    }, [data]);

    // Mount effect
    useEffect(() => {
        console.log("Component Mounted");
    }, []);

    // Count change effect
    useEffect(() => {
        console.log("Count Changed :", count);
    }, [count]);

    // API call
    useEffect(() => {
        fetchData();
    }, []);

    // Countdown + retry
    useEffect(() => {
        if (!error) return;

        if (countdown === 0) {
            fetchData();
            return;
        }

        const timer = setTimeout(() => {
            setCountdown((prev) => prev - 1);
        }, 1000);

        return () => clearTimeout(timer);
    }, [error, countdown]);

    // UI conditions
    if (loading) return <h2>Loading...</h2>;

    if (error) {
        return (
            <div>
                <h2>{error}</h2>
                <p>Retrying in {countdown} seconds...</p>
            </div>
        );
    }

    if(!loading && data.length ===0){
        return <h2>No Data Available.</h2>
    }

    return (
        <div>
            <h1>Dashboard Page</h1>

            {/* Counter Section */}
            <p>Count is : {count}</p>
            <button onClick={() => setCount(count + 1)}>Increase</button>

            <hr />

            {/* Data Section */}
            <h2>Data</h2>
            {data.slice(0, 5).map((item) => (
                <div key={item.id}>
                    <h4>{item.title}</h4>
                    <p>{item.body}</p>
                    </div>
            ))}
            <button onClick={fetchData}>Retry Now</button>
        </div>
    );
}

export default Dashboard;