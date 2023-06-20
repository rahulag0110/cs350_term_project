import axios from "axios";
import { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import { UserContext } from "../Hooks/UserContext";
import '../Styles/Login.css';

import logo_black_src from '../assets/logo_black.png';
import logo_white_src from '../assets/logo_white.png';
import trophy_src from '../assets/trophy.png';
import prize_src from '../assets/prize_3.png'


const Login = () => {

    const {user, setUser} = useContext(UserContext);
    console.log(user)
 
    const [email, setEmail] = useState([{}])
    const [password, setPassword] = useState([{}])
    const [status, setStatus] = useState()
    const [userId, setUserId] = useState()

    const loginHandler = () => {
        axios.post('http://127.0.0.1:8000/user/login', {'email': email, 'password': password})
        .then(res => {
            const loginStatus = res.data['status'];
            const loginUserId = res.data['user_id'];

            setStatus(loginStatus);
            setUserId(loginUserId);

            if (loginStatus == 'SUCCESS') {
                setUser(loginUserId);
                alert('login_success')
                window.localStorage.setItem('current_user', loginUserId)
                window.location.href="./afterlogin"
            }
            else {
                alert('login_fail')
                window.localStorage.setItem('current_user', 'no_user')
            }
        })
        .catch(error => {
            console.log(error); // Handle any errors
        });
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
                    
                    {/* <div className="col-6 d-flex flex-row align-items-center justify-content-end">
                        <Link to="/login" className="    -white-link">Login</Link>
                        
                    </div> */}
                </div>

                <div className="row   -login-container">
                    <div className="col-4 mx-auto    -login">
                        <input
                            className="form-control form-control m-3 p-3    -input"
                            onChange={e => setEmail(e.target.value)}
                            placeholder='Email'
                        />
                        <input
                            className="form-control form-control m-3 p-3    -input"
                            type="password"
                            onChange={e => setPassword(e.target.value)}
                            placeholder='Password'
                        />

                        <div className="d-flex flex-row align-items-center justify-content-center pt-3    ">
                            <Link to="/register" className="    -register-link">
                                <button className="btn    -register-button">Register</button></Link>
                            <button className="btn ms-3    -login-button" onClick={loginHandler}>Login</button>
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

export default Login;
