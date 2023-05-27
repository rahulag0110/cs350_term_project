import axios from "axios";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HomeBeforeLogin = () => {

    return (
        <>
        <h1>Welcome to EveryDraw!!!</h1>
        <ul>
            <li><Link to="/login">Login</Link></li>
        </ul>

        </>
    )
}
export default HomeBeforeLogin