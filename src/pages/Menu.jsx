import { useEffect } from "react";
function Menu(){
    useEffect(() => {
        console.log("Menu Mounted");

        return () => {
            console.log("Menu Unmounted");
        }
    }, [])
    return <h1>Menu</h1>
}

export default Menu;