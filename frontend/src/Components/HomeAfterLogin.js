import axios from "axios";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Hooks/UserContext";
import { useContext } from "react";

const HomeAfterLogin = () => {

    const [user, setUser] = useContext(UserContext);

    return (
        <>
        <h1>Welcome User!!!</h1>
        <h2>{user}</h2>
        <ul>
            <li><Link to="/events">Events</Link></li>
        </ul>

        </>
    )
}
export default HomeAfterLogin