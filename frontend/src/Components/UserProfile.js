import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useSearchParams } from "react-router-dom";
import "../Styles/UserProfile.css"

import logo_black_src from '../assets/logo_black.png';
import logo_white_src from '../assets/logo_white.png';
import trophy_src from '../assets/trophy.png';
import prize_src from '../assets/prize_3.png';
import profile_src from '../assets/user_profile.png';


const UserProfile = () => {

    // const [currUser, setCurrUser] = useState();

    const currUser = (window.localStorage.getItem("current_user"))

    const [userDetails, setUserDetails] = useState([]);
    const [participaingEvents, setParticipatingEvents] = useState([]);
    const [createdEvents, setCreatedEvents] = useState([]);

    const handleClick = () => window.location.href="./hostevent";
    const take_to_user_profile = () => window.location.href="./userprofile"
    const logOutHandler = () => {
        window.localStorage.setItem('current_user', 'no_user')
        window.location.href="./"
    }

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
        <main>
            <div className="container h-100    -container">
                <div className="row    -bar">
                    <div className="col-6 d-flex align-items-center">
                        <Link to='/'>
                            <img className="    -logo-img" src={logo_black_src} alt="Logo"></img>
                        </Link>
                        {/* <Link to="/register" className="p-2    -yellow-link">Register</Link> */}
                    </div>
                    
                    <div className="col-6 d-flex flex-row align-items-center justify-content-end">
                        <button className="btn    -login-button" onClick={handleClick}>Host</button>
                        <button className="btn    -register-button" onClick={logOutHandler}>Logout</button>
                        <button className="btn    -register-button" onClick={take_to_user_profile}>
                            <img src={profile_src} className="    -profile-img"></img>
                        </button>
                    </div>
                </div>

                <div className="    -profile-greeting-container">
                    <h1 className="    -main-left-header">Hi, <strong className="    -main-left-header-strong">{userDetails.name}</strong>.</h1>
                    {/* <h1 className="    -main-left-header">Welcome to <strong className="    -main-left-header-strong">Everydraw</strong>.</h1> */}
                            
                </div>

                <div className="    -participated-container">
                    <h3 className="    -profile-header">You are <em>participating</em> in these events.</h3>

                    {participaingEvents.map(event => (
                        <div key={event._id}>
                            <Link to={`/hostedeventdetail/${event._id}`}>
                                <button className="w-100 text-start btn    -eventholder">
                                    <p>{event.name}</p>
                                </button>
                            </Link>

                        </div>
                    ))}
                </div>

                <div className="    -created-container">
                    <h3 className="    -profile-header">You have <strong>created</strong> these events.</h3>

                    {createdEvents.map(event => (
                        <div key={event._id}>
                            <Link to={`/hostedeventdetail/${event._id}`}>
                                <button className="w-100 text-start btn    -eventholder">
                                    <p>{event.name}</p>
                                </button>
                            </Link>
                        </div>
                    ))}

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

export default UserProfile;



/*
{/* <div>
            Hi, 
                {userDetails.map(user => (
                <div key={user._id}>
                    <p>{user.name}</p>
                </div>
                ))
                }
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
                    <Link to={`/hostedeventdetail/${event._id}`}>
                        <button>{event.name}</button>
                    </Link>

                </div>
            ))
            }

        </div>
        </>
*/