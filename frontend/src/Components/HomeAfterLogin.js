// import axios from "axios";
// import { useRef, useState, useEffect } from "react";
import axios, { all } from "axios";
import { Link } from "react-router-dom";
import { UserContext } from "../Hooks/UserContext";
import { useContext, useState, useEffect } from "react";
import "../Styles/HomeAfterLogin.css"


const HomeAfterLogin = () => {

    const {user, setUser} = useContext(UserContext);

    const [query, setQuery] = useState();

    const [click, setClick] = useState(false);
    const handleClick = () => window.location.href="./hostevent";
    const take_to_user_profile = () => window.location.href="./userprofile"
    const [allEvents, setAllEvents] = useState([])
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/event/get_all', {})
        .then(res => {
            console.log(res);
            console.log(res.data.events);
            const allevents = res.data['events'];
            setAllEvents(allevents)
        })
      }, []);
    



    return (

        <>
        <h1>EveryDraw</h1>
        <button onClick={take_to_user_profile}>User_Profile</button>
        <button onClick={handleClick}>Host a Event</button>
        {/* <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Open Date</th>
                    <th>Close Date</th>
                </tr>
            </thead>
            <tbody>
            {allEvents.map(event => (

                <tr key={event._id}>
                    <td>{event.name}</td>
                    <td>{event.open_date}</td>
                    <td>{event.close_date}</td>
                </tr>
            ))}
            </tbody>
        </table> */}
        <div>
        {allEvents.map(event => (
                <div key={event._id}>
                    {/* <p>{event.name}</p> */}
                    <Link to={`/eventdetail/${event._id}`}>
                        <button>{event.name} , {event.open_date} , {event.close_date}</button>
                    </Link>

                </div>
            ))
            }
        </div>

        



        <div className="container">
            <h1 className="title">EveryDraw</h1>

        <label>Search</label>
        <input type="text" onChange={e => setQuery(e.target.value)}></input>

        
        </div>
        </>
    )
}

export default HomeAfterLogin;
