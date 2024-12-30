import { Link } from "react-router-dom";

export function Navigation(){
    return(
        <>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
        </ul>
        </>
    )
}