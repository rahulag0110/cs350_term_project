import axios from "axios";
import { useState, useLocation, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const HostedEventDetail = () => {
    const { eventId } = useParams();
    
    const curr_user = window.localStorage.getItem("current_user")

    const [applications, setApplications] = useState([]);
    const [event, setEvent] = useState([]);
    var event_name = ''

    useEffect(() => {
        axios.post('http://127.0.0.1:8000/application/event_applications', {'event_id': eventId})
        .then(res => {
            // console.log(res);
            // console.log(res.data.applications);
            const all_applications = res.data['applications'];
            setApplications(all_applications)
            // console.log(applications)
        })
      }, []);

      useEffect(() => {
        axios.post('http://127.0.0.1:8000/event/get_event', {'event_id': eventId})
        .then(res => {
            // console.log(res);
            // console.log(res.data.event);
            const event_info = res.data['event'];
            event_name = res.data.event['name'];
            console.log(event_info)
            setEvent(event_info)
            console.log(event)
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
            <div>{event_name}</div>
            <div>
                {eventId}
                {applications.map(application => (
                    <div key={application.event_id}>
                        <p>{application.participant_id}</p>
                    </div>
                ))}
            </div>
            <div>
                {/* <Link to={}>
                    <button>Draw Prizes</button>
                </Link> */}
                
            </div>
        </>
    )

}

export default HostedEventDetail;