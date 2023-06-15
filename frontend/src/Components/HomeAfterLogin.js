// import axios from "axios";
// import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Hooks/UserContext";
import { useContext } from "react";
import "../Styles/HomeAfterLogin.css"


const HomeAfterLogin = () => {

    const [user, setUser] = useContext(UserContext);

    return (
        <div className="container">
            <h1 className="title">Welcome User!!!</h1>
        <h2>{user}</h2>
            <Link className="link" to="/events">Events</Link>
        </div>
    )
}

export default HomeAfterLogin;
