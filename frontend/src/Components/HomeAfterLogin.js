// import axios from "axios";
// import { useRef, useState, useEffect } from "react";
import axios, { all } from "axios";
import { Link } from "react-router-dom";
import { UserContext } from "../Hooks/UserContext";
import { useContext, useState } from "react";
import "../Styles/HomeAfterLogin.css"
import ShowEvents from "./ShowEvents";


const HomeAfterLogin = () => {

    const {user, setUser} = useContext(UserContext);

    const [events, setEvents] = useState([])

    const getEventsHandler = () => {
        axios.post('http://127.0.0.1:8000/user/participating_events', {'user_id': '646b321936e5d064bb48de1a'})
        .then(res => {
            console.log(res);
            console.log(res.data.events);
            const allevents = res.data['events'];
            setEvents(allevents)
        })
    }


    return (
        <div className="container">
            <h1 className="title">Welcome User!!!</h1>
        <h2>{user}</h2>
            
        <button onClick={() => <ShowEvents />}>Current Events</button>
        {/* <ShowEvents /> */}

        </div>
    )
}

export default HomeAfterLogin;
