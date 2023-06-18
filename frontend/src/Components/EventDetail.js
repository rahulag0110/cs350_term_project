import axios from "axios";
import { useState, useEffect } from "react";
import { Link,useParams } from "react-router-dom";

const EventDetail = () => {
    const { eventId } = useParams();
    const curr_user = window.localStorage.getItem("current_user")
    const [link, setLink] = useState()
    const [userName, setUserName] = useState()

    useEffect(() => {
        axios.post('http://127.0.0.1:8000/user/get_user', {'user_id': curr_user})
        .then(res => {
            // console.log(res);
            // console.log(res.data.user);
            const user_name = res.data.user['name'];
            setUserName(user_name)
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
                {eventId}
                {/* {curr_user} */}
                
            </div>

            <div>
                <button className="button" onClick={applyHandler}>Apply</button>
            </div>
        </>
    )
}

export default EventDetail;
