import { Link } from "react-router-dom";
import HomeAfterLogin from "./HomeAfterLogin";
import HomeBeforeLogin from "./HomeBeforeLogin";
import { UserContext } from "../Hooks/UserContext";
import { useContext, useState } from "react";
import "../Styles/Home.css"

const Home = () => {
    const {user, setUser} = useContext(UserContext);
    console.log(user)

    return (
        <div className="container">
            <h1>This is Home page</h1>
            <h1>user_in_storage = {window.localStorage.getItem("current_user")}</h1>
            <h1>user_in_context = {user}</h1>
            <Link to="/login" className="link">Login</Link>
            <p></p>
            <Link to="/register" className="link">Register</Link>

        </div>
    )
}

export default Home;
