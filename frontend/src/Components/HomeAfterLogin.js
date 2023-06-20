// import axios from "axios";
// import { useRef, useState, useEffect } from "react";
import axios, { all } from "axios";
import { Link } from "react-router-dom";
import { UserContext } from "../Hooks/UserContext";
import { useContext, useState, useEffect } from "react";
import "../Styles/HomeAfterLogin.css"

import logo_black_src from '../assets/logo_black.png';
import logo_white_src from '../assets/logo_white.png';
import trophy_src from '../assets/trophy.png';
import prize_src from '../assets/prize_3.png';
import profile_src from '../assets/user_profile.png';


const HomeAfterLogin = () => {

    const {user, setUser} = useContext(UserContext);

    const [query, setQuery] = useState();

    const [click, setClick] = useState(false);
    const handleClick = () => window.location.href="./hostevent";
    const take_to_user_profile = () => window.location.href="./userprofile"
    
    const [allEvents, setAllEvents] = useState([])
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/event/get_all', {})
        .then(res => {
            console.log(res);
            console.log(res.data.events);
            const allevents = res.data['events'];
            setAllEvents(allevents)
        })
      }, []);

    const logOutHandler = () => {
        window.localStorage.setItem('current_user', 'no_user')
        window.location.href="./"
    }
    


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

                <div className="   -search-container">

                    <div className="d-flex flex-row align-items-center justify-content-center">
                            <input className="form-control-plaintext p-3    -searchbar" type="text" onChange={e => setQuery(e.target.value)} placeholder='Search...'></input>
                    </div>
                </div>

                <div className="    -events-container">
                    {allEvents.map(event => (
                        <div key={event._id}>
                            {/* <p>{event.name}</p> */}
                            <Link to={`/eventdetail/${event._id}`}>
                                <button className="w-100 text-start btn    -eventholder">
                                    <div className="d-flex flex-row justify-content-between">
                                        <span>:: {event.name}</span>
                                        <span>{event.open_date} ~ {event.close_date}</span>
                                    </div>
                                    
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

export default HomeAfterLogin;
