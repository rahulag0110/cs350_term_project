import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useSearchParams } from "react-router-dom";

const UserProfile = () => {

    // const [currUser, setCurrUser] = useState();

    const currUser = (window.localStorage.getItem("current_user"))

    const [userDetails, setUserDetails] = useState([]);
    const [participaingEvents, setParticipatingEvents] = useState([]);
    const [createdEvents, setCreatedEvents] = useState([]);

    useEffect(() => {
        axios.post('http://127.0.0.1:8000/user/get_user', {'user_id': currUser})
        .then(res => {
            console.log(res);
            console.log(res.data.user);
            const user_details = res.data['user'];
            setUserDetails(user_details)
        })
      }, []);

    useEffect(() => {
        axios.post('http://127.0.0.1:8000/user/participating_events', {'user_id': currUser})
        .then(res => {
            console.log(res);
            console.log(res.data.events);
            const participaing_events = res.data['events'];
            setParticipatingEvents(participaing_events)
        })
      }, []);

    useEffect(() => {
    axios.post('http://127.0.0.1:8000/user/created_events', {'user_id': currUser})
    .then(res => {
        console.log(res);
        console.log(res.data.events);
        const created_events = res.data['events'];
        setCreatedEvents(created_events)
    })
    }, []);




    return (
        <>
        {/* <div>
            Hi, 
                {userDetails.map(user => (
                <div key={user._id}>
                    <p>{user.name}</p>
                </div>
                ))
                }
        </div> */}
        <h1>Hi, {userDetails.name}</h1>
        
        <div>
            <h3>Events you are participaing in:</h3>
            {participaingEvents.map(event => (
                <div key={event._id}>
                    <p>{event.name}</p>
                    

                </div>
            ))
            }
        </div>
        <div>
            <h3>Events you created:</h3>
            {createdEvents.map(event => (
                <div key={event._id}>
                    {/* <p>{event.name}</p> */}
                    <Link to={`/hostedeventdetail/${event._id}`}>
                        <button>{event.name}</button>
                    </Link>

                </div>
            ))
            }

        </div>
        </>
    )
}

export default UserProfile;