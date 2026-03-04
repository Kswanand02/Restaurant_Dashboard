import { NavLink } from "react-router-dom";

function Sidebar() {

    const linkstyle = ({ isActive }) => ({
        color: isActive ? "red" : "Black",
        background: isActive?"#333":"transparent",
        padding:"8px",
        fontweight: isActive ? "bold" : "normal",
        textDecoration: "none",
        borderRadius:"4px"
    })
    return (
        <div style={{
            width: "200px",
            background: "#f4f4f4",
            padding: "20px"
        }}>
            <h3>Restaurant</h3>
            <nav style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <NavLink to="/" style={linkstyle}>Dashboard</NavLink>
                <NavLink to="/menu" style={linkstyle}>Menu</NavLink>
                <NavLink to="/expenses" style={linkstyle}>Expenses</NavLink>
            </nav>
        </div>
    )



}

export default Sidebar;