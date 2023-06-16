import axios from "axios";
import { useState } from "react";

const HostEvent = () => {
    
    const curr_user = window.localStorage.getItem("current_user")
    
    const [eventName, setEventName] = useState([{}])
    const [openDate, setOpenDate] = useState([{}])
    const [closeDate, setCloseDate] = useState([{}])
    const [description, setDescription] = useState([{}])

    const createEventHandler = () => {
        axios.post('http://127.0.0.1:8000/event/create',
        {"host_id": curr_user,
        "name": eventName,
        "open_date": openDate,
        "close_date": closeDate,
        "description": description,}
        )
        .then (res => {
            console.log(res)
            const creationStatus = res.data['status']
            if (creationStatus == 'SUCCESS') {
                alert('Event_Created')
            }
            else {
                alert('fail')
            }
        })
        window.location.href="./afterlogin"
    }

    return (
        <>
            <div>
                <h2>Host Event</h2>
            </div>

            <div>
                <input
                    onChange={e => setEventName(e.target.value)}
                    placeholder="Event Name"
                />
                <input
                    onChange={e => setOpenDate(e.target.value)}
                    placeholder="Open Date"
                />
                <input
                    onChange={e => setCloseDate(e.target.value)}
                    placeholder="Close Date"
                />
                <input
                    onChange={e => setDescription(e.target.value)}
                    placeholder="Description"
                />
                <button onClick={createEventHandler}>Create Event</button>
            </div>
        </>
    )

}

export default HostEvent;