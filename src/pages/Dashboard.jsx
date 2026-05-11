import { useState, useEffect } from "react";
import "./Dashboard.css";
import Card from "../components/Card.jsx";
import SummarySection from "../components/SummarySection.jsx";
import RecentPosts from "../components/RecentPosts.jsx";
import QuickActions from "../components/QuickActions.jsx";

function Dashboard() {

    // =========================
    // STATE
    // =========================
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [countdown, setCountdown] = useState(10);

    // =========================
    // FETCH FUNCTION
    // =========================
    const fetchData = async () => {
        try {
            setLoading(true);
            setError(null);
            setCountdown(10);

            const res = await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );

            const result = await res.json();

            setData(result);

        } catch {

            setError("Something went wrong.");

        } finally {

            setLoading(false);

        }
    };

    // =========================
    // INITIAL API CALL
    // =========================
    useEffect(() => {
        fetchData();
    }, []);

    // =========================
    // AUTO RETRY LOGIC
    // =========================
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

    // =========================
    // CONDITIONAL UI
    // =========================
    if (loading) {
        return <h2>Loading...</h2>;
    }

    if (error) {
        return (
            <div>
                <h2>{error}</h2>

                <p>
                    Retrying in {countdown} seconds...
                </p>

                <button onClick={fetchData}>
                    Retry Now
                </button>
            </div>
        );
    }

    if (!loading && data.length === 0) {
        return <h2>No Data Available.</h2>;
    }

    const summaryCards = [
        {
            id: 1,
            title: "Total Orders",
            value: "120"
        },

        {
            id: 2,
            title: "Revenue",
            value: "₹25,000"
        },

        {
            id: 3,
            title: "Expenses",
            value: "₹10,000"
        },

        {
            id: 4,
            title: "Profit",
            value: "₹15,000"
        }
    ]

    const apiCards = [

        {
            id: 1,
            title: "Total Posts",
            value: data.length
        },

        {
            id: 2,
            title: "First Post ID",
            value: data[0]?.id
        },

        {
            id: 3,
            title: "Status",
            value: loading ? "Loading" : "Loaded"
        }

    ];

    // =========================
    // MAIN UI
    // =========================
    return (

        <div className="dashboard-container">

            {/* =========================
                HEADER SECTION
            ========================= */}
            <div className="dashboard-header">

                <h1>Restaurant Dashboard</h1>

                <p>Welcome Back, Admin</p>

            </div>

            <hr />

            {/* =========================
                RESTAURANT SUMMARY
            ========================= */}
            <div className="summary-section">

                <SummarySection summaryCards={summaryCards} />

            </div>

            <hr />

            {/* =========================
                API DATA SUMMARY
            ========================= */}
            <div className="summary-section">

                <h2>API Data Summary</h2>

                <div className="cards-container">

                    {
                        apiCards.map((item) => (

                            <Card
                                key={item.id}
                                title={item.title}
                                value={item.value}
                            />

                        ))
                    }
                </div>

            </div>

            <hr />

            {/* =========================
                RECENT POSTS SECTION
            ========================= */}
           
<RecentPosts data={data} />
            {/* =========================
                QUICK ACTIONS
            ========================= */}
           <QuickActions />

        </div>
    );
}

export default Dashboard;