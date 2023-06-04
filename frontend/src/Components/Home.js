import { Link } from "react-router-dom";
import HomeAfterLogin from "./HomeAfterLogin";
import HomeBeforeLogin from "./HomeBeforeLogin";
import { UserContext } from "../Hooks/UserContext";
import { useContext } from "react";

const Home = () => {
    const {user, setUser} = useContext(UserContext);

    return (
        <>
        <Link to="/login">Login</Link>
        <p></p>
        <Link to="/events">Events</Link>
        <h2>{user}</h2>

        </>
    )
}
export default Home