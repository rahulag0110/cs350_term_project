import axios from "axios";
import { useState, useEffect } from "react";
import { Link,useParams } from "react-router-dom";
import '../Styles/EventDetail.css'

import logo_black_src from '../assets/logo_black.png';
import logo_white_src from '../assets/logo_white.png';
import trophy_src from '../assets/trophy.png';
import prize_src from '../assets/prize_3.png';
import profile_src from '../assets/user_profile.png';


const EventDetail = () => {
    const { eventId } = useParams();
    const curr_user = window.localStorage.getItem("current_user")
    const [link, setLink] = useState()
    const [userName, setUserName] = useState()
    const [eventName, setEventName] = useState();
    const [eventDescription, setEventDescription] = useState();
    const [eventOpenDate, setEventOpenDate] = useState();
    const [eventCloseDate, setEventCloseDate] = useState();

    const handleClick = () => window.location.href="./hostevent";
    const take_to_user_profile = () => window.location.href="./userprofile"

    const logOutHandler = () => {
        window.localStorage.setItem('current_user', 'no_user')
        window.location.href="http://localhost:3000/"
    }

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
        <main>
            <div className="container h-100    -container">
                <div className="row    -bar">
                    <div className="col-6 d-flex align-items-center">
                        <Link to='/afterlogin'>
                            <img className="    -logo-img" src={logo_black_src} alt="Logo"></img>
                        </Link>
                    </div>
                    
                    <div className="col-6 d-flex flex-row align-items-center justify-content-end">
                        <button className="btn    -login-button" onClick={handleClick}>Host</button>
                        <button className="btn    -register-button" onClick={logOutHandler}>Logout</button>
                        <button className="btn    -register-button" onClick={take_to_user_profile}>
                            <img src={profile_src} className="    -profile-img"></img>
                        </button>
                    </div>
                </div>
                
                <div className="    -event-container">
                    <div className="    -event-title-container">
                        <h1 className="display-4    -eventdetail-eventname">Event Name : <strong className="    -main-left-header-strong">{eventName}</strong></h1>
                        <p className="display-5    -eventdetail-description">  {eventOpenDate} ~ {eventCloseDate}</p>
                    </div>

                    <div className="row pb-4    -event-description-container">
                        <div className="col-8">
                            <p className="display-5    -eventdetail-description">About: {eventDescription}</p>
                        </div>
                        <div className="">
                            
                        </div>
                    </div>

                    <button className="btn    -login-button" onClick={applyHandler}>Apply</button>
                </div>

                <div className="    -footer">
                    <div className="row    -footer-above">
                        <div className="col-4 d-flex"><Link className="mx-auto    -footer-link">About</Link></div>
                        <div className="col-4 d-flex"><Link className="mx-auto    -footer-link">Legal Terms</Link></div>
                        <div className="col-4 d-flex"><Link className="mx-auto    -footer-link">Privacy Policy</Link></div>
                    </div>

                    <div className="d-flex flex-column align-items-center    -footer-below">
                        <img className="d-block    -logo-img" src={logo_white_src} alt="Logo"></img>
                        <p className="    -footer-copyright">Copyright EVERYDRAW, Inc. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default EventDetail;