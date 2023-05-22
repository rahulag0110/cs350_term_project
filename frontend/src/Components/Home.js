import { Link } from "react-router-dom";
import HomeAfterLogin from "./HomeAfterLogin";
import HomeBeforeLogin from "./HomeBeforeLogin";

const Home = () => {

    return (
        <>
        <Link to="/login">Login</Link>
        <p></p>
        <Link to="/events">Events</Link>

        </>
    )
}
export default Home