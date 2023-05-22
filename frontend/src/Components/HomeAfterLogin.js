import axios from "axios";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HomeAfterLogin = () => {

    return (
        <>
        <h1>Welcome User!!!</h1>
        <ul>
            <li><Link to="/events">Events</Link></li>
        </ul>

        </>
    )
}
export default HomeAfterLogin