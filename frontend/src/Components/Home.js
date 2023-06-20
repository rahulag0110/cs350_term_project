import { Link } from "react-router-dom";
import HomeAfterLogin from "./HomeAfterLogin";
import { UserContext } from "../Hooks/UserContext";
import { useContext, useState } from "react";
import "../Styles/Home.css"

const Home = () => {
    const {user, setUser} = useContext(UserContext);
    console.log(user)

    return (
        <div className="home_container">
            <div className="logo"></div>
            <h1 className="home_title">Welcome to EveryDraw</h1>
            <Link to="/login" className="home_link_login">Login</Link>
            <p></p>
            <Link to="/register" className="home_link_register">Register</Link>

        </div>
    )
}

export default Home;
