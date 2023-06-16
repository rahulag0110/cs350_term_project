import { Link } from "react-router-dom";
import HomeAfterLogin from "./HomeAfterLogin";
import { UserContext } from "../Hooks/UserContext";
import { useContext, useState } from "react";
import "../Styles/Home.css"

const Home = () => {
    const {user, setUser} = useContext(UserContext);
    console.log(user)

    return (
        <div className="container">
            <h1>Welcome to EveryDraw</h1>
            <Link to="/login" className="link">Login</Link>
            <p></p>
            <Link to="/register" className="link">Register</Link>

        </div>
    )
}

export default Home;
