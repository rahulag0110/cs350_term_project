import axios from "axios";
import { useState, useLocation, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const ParticipatedEventDetail = () => {
    const { eventId } = useParams();
    
    const curr_user = window.localStorage.getItem("current_user")

    // const [applications, setApplications] = useState([]);
    const [event, setEvent] = useState();
    var event_name = '123'
    const [eventName, setEventName] = useState();
    const [eventDescription, setEventDescription] = useState();
    const [eventOpenDate, setEventOpenDate] = useState();
    const [eventCloseDate, setEventCloseDate] = useState();


    // const approveHandler = () => {
    //     axios.
    // }



      useEffect(() => {
        axios.post('http://127.0.0.1:8000/event/get_event', {'event_id': eventId})
        .then(res => {
            // console.log(res);
            // console.log(res.data.event);
            const event_name= res.data.event['name'];
            setEventName(event_name);

            const event_des = res.data.event['description'];
            setEventDescription(event_des)
            
            const open_date = res.data.event['open_date'];
            setEventOpenDate(open_date)

            const close_date = res.data.event['close_date'];
            setEventCloseDate(close_date)
        })
      }, []);

    return (
        <>
            {/* <div>
                {event.map(e => (
                    <div key={e._id}>
                        <h3>{e.name}</h3>
                    </div>
                ))}
            </div> */}
            <div>
                <h1>Event Name : {eventName}</h1>
                <h4>About: {eventDescription}</h4>
                <h6>Open Date: {eventOpenDate}</h6>
                <h6>Close Date: {eventCloseDate}</h6>
            </div>

            <div>
                {/* <Link to={}>
                    <button>Draw Prizes</button>
                </Link> */}
                
            </div>
        </>
    )

}

export default ParticipatedEventDetail;