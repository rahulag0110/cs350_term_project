import { Link } from "react-router-dom";
import HomeAfterLogin from "./HomeAfterLogin";
import HomeBeforeLogin from "./HomeBeforeLogin";
import { useContext, useState } from "react";
import { UserContext } from "../Hooks/UserContext";
import axios, { all } from "axios";

const ShowEvents = () => {
    const {user, setUser} = useContext(UserContext);

    const curr_user = '646ba1afc64b205c3db8b4b5'
    console.log(curr_user)
    const json = JSON.stringify({user});
    const [events, setEvents] = useState([])

   
    axios.post('http://127.0.0.1:8000/user/participating_events', {'user_id': '646b321936e5d064bb48de1a'})
    .then(res => {
        console.log(res);
        console.log(res.data.events);
        const allevents = res.data['events'];
        setEvents(allevents)
    })

    return (
        <>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Open Date</th>
                    <th>Close Date</th>
                </tr>
            </thead>
            <tbody>
            {events.map(event => (

                <tr key={event._id}>
                    <td>{event.name}</td>
                    <td>{event.open_date}</td>
                    <td>{event.close_date}</td>
                </tr>
            ))}
            </tbody>
        </table>

        </>
        
        
    )
}

export default ShowEvents;