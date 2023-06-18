import axios from "axios";
import { useState, useEffect } from "react";
import { Link,useParams } from "react-router-dom";

const EventDetail = () => {
    const { eventId } = useParams();
    const curr_user = window.localStorage.getItem("current_user")
    const [link, setLink] = useState()
    const [userName, setUserName] = useState()
    const [eventName, setEventName] = useState();
    const [eventDescription, setEventDescription] = useState();
    const [eventOpenDate, setEventOpenDate] = useState();
    const [eventCloseDate, setEventCloseDate] = useState();


    useEffect(() => {
        axios.post('http://127.0.0.1:8000/user/get_user', {'user_id': curr_user})
        .then(res => {
            // console.log(res);
            // console.log(res.data.user);
            const user_name = res.data.user['name'];
            setUserName(user_name)
        })
      }, []);


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

    const applyHandler = () => {
        axios.post('http://127.0.0.1:8000/application/apply',
        {
            "participant_id": curr_user,
            "event_id": eventId,
            "link": 'link',
            "image": "string",
            "status": true,
            "name": userName,
          })
        .then(res => {
            console.log(res)
            const registerStatus = res.data['status']
            if (registerStatus == 'SUCCESS') {
                alert('apply_success')
                // window.localStorage.setItem('current_user', loginUserId)
                window.location.href="../afterlogin"
            }
            else {
                alert('apply_success')
            }

        });
    }


    return (
        <>
            <div>
                <h1>Event Name : {eventName}</h1>
                <h4>About: {eventDescription}</h4>
                <h6>Open Date: {eventOpenDate}</h6>
                <h6>Close Date: {eventCloseDate}</h6>
                {/* {curr_user} */}
                
            </div>

            <div>
                <button className="button" onClick={applyHandler}>Apply</button>
            </div>
        </>
    )
}

export default EventDetail;
