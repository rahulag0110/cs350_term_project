import axios from "axios";
import { useState, useLocation, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import '../Styles/HostedEventDetail.css'

import logo_black_src from '../assets/logo_black.png';
import logo_white_src from '../assets/logo_white.png';
import trophy_src from '../assets/trophy.png';
import prize_src from '../assets/prize_3.png';
import profile_src from '../assets/user_profile.png';

const HostedEventDetail = () => {
    const { eventId } = useParams();
    
    const curr_user = window.localStorage.getItem("current_user")

    const [applications, setApplications] = useState([]);
    const [event, setEvent] = useState();
    var event_name = '123'
    const [eventName, setEventName] = useState();

    const [prizeName, setPrizeName] = useState();
    const [claimInfo, setClaimInfo] = useState();

    const handleClick = () => window.location.href="./hostevent";
    const take_to_user_profile = () => window.location.href="./userprofile"

    const logOutHandler = () => {
        window.localStorage.setItem('current_user', 'no_user')
        window.location.href="http://localhost:3000/"
    }

    const drawPrizeHandler = () => {
        axios.post('http://127.0.0.1:8000/winner/select', {'event_id':eventId})
        .then(res => {
            console.log(res)
            // const registerStatus = res.data['status']
            // if (registerStatus == 'SUCCESS') {
            //     alert('Prize Added')
            //     // window.localStorage.setItem('current_user', loginUserId)
            //     // window.location.href="./login"
            // }
            // else {
            //     alert('Prize Add Fail')
            // }

        });

    }

    const addPrizeHandler = () => {
        axios.post('http://127.0.0.1:8000/prize/add', {'event_id':eventId, 'prize_rank': 0, 'prize_name': prizeName, 'claim_info': claimInfo})
        .then(res => {
            console.log(res)
            const registerStatus = res.data['status']
            if (registerStatus == 'SUCCESS') {
                alert('Prize Added')
                // window.localStorage.setItem('current_user', loginUserId)
                // window.location.href="./login"
            }
            else {
                alert('Prize Add Fail')
            }

        });
    }

    // const approveHandler = () => {
    //     axios.
    // }

    useEffect(() => {
        axios.post('http://127.0.0.1:8000/application/event_applications', {'event_id': eventId})
        .then(res => {
            // console.log(res);
            // console.log(res.data.applications);
            const all_applications = res.data['applications'];
            console.log(all_applications)
            setApplications(all_applications)
            console.log(applications)
        })
      }, []);



      useEffect(() => {
        axios.post('http://127.0.0.1:8000/event/get_event', {'event_id': eventId})
        .then(res => {
            // console.log(res);
            // console.log(res.data.event);
            const event_info = res.data['event'];
            event_name = res.data.event['name'];
            setEventName(event_name)
            setEvent(event_info);
        })
      }, []);

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
                    </div>

                    <div className="d-flex flex-row justify-content-start pt-4">
                        <input
                            onChange={e => setPrizeName(e.target.value)}
                            placeholder="Prize Name"
                        />
                        <input
                            onChange={e => setClaimInfo(e.target.value)}
                            placeholder="Prize Claim Information"
                        />
                        <button className="btn    -login-button" onClick={addPrizeHandler}>Add Prize</button>
                        
                    </div>
                    <div className="d-flex flex-row justify-content-start pt-4">
                        
                        <button className="btn    -login-button" onClick={drawPrizeHandler}>Draw Prizes</button>
                    </div>

                    <div>
                        {applications.map(application => (
                            <div key={application.event_id}>
                                <p>{application.name}</p>
                                <button>Approve</button>
                            </div>
                        ))}
                    </div>
                   

                    <div className="row pb-4    -event-description-container">
                        <div className="col-8">
                            {/* <p className="display-5    -eventdetail-description">About: {eventDescription}</p> */}
                        </div>
                        <div className="">
                            
                        </div>
                    </div>
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

export default HostedEventDetail;
{/* <>
            
            <div>{eventName}</div>
            <button>Add/Edit Prize</button>
            <button>Draw Prizes</button>

            <div>
                {applications.map(application => (
                    <div key={application.event_id}>
                        <p>{application.name}</p>
                        <button>Approve</button>
                    </div>
                ))}
            </div>
            <div>
               
                
            </div>
        </> */}