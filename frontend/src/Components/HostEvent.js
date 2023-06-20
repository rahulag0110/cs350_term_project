import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/HostEvent.css"

import logo_black_src from '../assets/logo_black.png';
import logo_white_src from '../assets/logo_white.png';
import trophy_src from '../assets/trophy.png';
import prize_src from '../assets/prize_3.png';
import profile_src from '../assets/user_profile.png';

const HostEvent = () => {
    
    const curr_user = window.localStorage.getItem("current_user")
    
    const [eventName, setEventName] = useState([{}])
    const [openDate, setOpenDate] = useState([{}])
    const [closeDate, setCloseDate] = useState([{}])
    const [description, setDescription] = useState([{}])

    const handleClick = () => window.location.href="./hostevent";
    const take_to_user_profile = () => window.location.href="./userprofile"

    const logOutHandler = () => {
        window.localStorage.setItem('current_user', 'no_user')
        window.location.href="./"
    }

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
                window.location.href="./afterlogin"
            }
            else {
                alert('fail')
            }
        })
        
    }

    return (
        <main>
            <div className="container h-100    -container">
                <div className="row    -bar">
                    <div className="col-6 d-flex align-items-center">
                        <Link to='/afterlogin'>
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

                <div className="   -hostform-container">

                    <div className="row d-flex flex-row align-items-center justify-content-center    -hostinput-container">
                        <div className="col-1">
                                                    <label className="p-3    -input-label">Event Name</label>

                        </div>
                        <div className="col-11">
                                                    <input className="form-control-plaintext p-3    -hostinput" type="text" onChange={e => setEventName(e.target.value)} placeholder='Friday Festa...'></input>

                        </div>
                    </div>

                    <div className="row d-flex flex-row align-items-center justify-content-center    -hostinput-container">
                        <div className="col-1">
                                                    <label className="p-3    -input-label">Open Date</label>

                        </div>
                        <div className="col-11">
                                                    <input className="form-control-plaintext p-3    -hostinput" type="text" onChange={e => setOpenDate(e.target.value)} placeholder='2/30/2023'></input>

                        </div>
                    </div>

                    <div className="row d-flex flex-row align-items-center justify-content-center    -hostinput-container">
                        <div className="col-1">
                                                    <label className="p-3    -input-label">Close Date</label>

                        </div>
                        <div className="col-11">
                                                    <input className="form-control-plaintext p-3    -hostinput" type="text" onChange={e => setCloseDate(e.target.value)} placeholder='4/31/2023'></input>

                        </div>
                    </div>

                    <div className="row d-flex flex-row align-items-center justify-content-center    -hostinput-container">
                        <div className="col-1">
                                                    <label className="p-3    -input-label">About</label>

                        </div>
                        <div className="col-11">
                                                    <textarea className="form-control-plaintext p-3    -hostinput" type="text" onChange={e => setDescription(e.target.value)}
                                                    placeholder='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'></textarea>

                        </div>
                    </div>

                    <div className="mt-5 d-flex flex-row align-items-center justify-content-center pt-3    ">
                        <button className="btn    -login-button" onClick={createEventHandler}>Create Event</button>
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

export default HostEvent;

{/* <div>
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
            </div> */}