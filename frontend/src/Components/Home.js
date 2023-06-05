import { Link } from "react-router-dom";
import HomeAfterLogin from "./HomeAfterLogin";
import HomeBeforeLogin from "./HomeBeforeLogin";
import { UserContext } from "../Hooks/UserContext";
import { useContext } from "react";
import "../Styles/Home.css"

const Home = () => {
    const {user, setUser} = useContext(UserContext);

    return (
        <div className="container">
        <Link to="/login" className="link">Login</Link>
        <p></p>
        <Link to="/events" className="link">Events</Link>

        </div>
    )
}

export default Home;
