import axios from "axios";
import { useState } from "react";
import { Link } from 'react-router-dom';
import "../Styles/Register.css"

import logo_black_src from '../assets/logo_black.png';
import logo_white_src from '../assets/logo_white.png';
import trophy_src from '../assets/trophy.png';
import prize_src from '../assets/prize_3.png'


const Register = () => {

    const [name, setName] = useState([{}])
    const [email, setEmail] = useState([{}])
    const [password, setPassword] = useState([{}])


    const registerHandler = () => {
        axios.post('http://127.0.0.1:8000/user/register', {'name':name, 'email': email, 'password': password})
        .then(res => {
            console.log(res)
            const registerStatus = res.data['status']
            if (registerStatus == 'SUCCESS') {
                alert('register_success')
                // window.localStorage.setItem('current_user', loginUserId)
                window.location.href="./login"
            }
            else {
                alert('register_fail')
            }

        });
    }

    return (

        <main>
            <div className="container-fluid h-100    -container">
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
                            onChange={e => setName(e.target.value)}
                            placeholder='Name'
                        />
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
                            <button className="btn    -login-button" onClick={registerHandler}>Register</button>
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


        // <div className="reg_container">
        //     <div className="logo"></div>
        //     <h2 className="reg_title">Register</h2>
        //     <input
        //         className="reg_input"
        //         onChange={e => setName(e.target.value)}
        //         placeholder='Name'
        //     />
        //     <input
        //         className="reg_input"
        //         onChange={e => setEmail(e.target.value)}
        //         placeholder='Email'
        //     />
        //     <input
        //         className="reg_input"
        //         type="password"
        //         onChange={e => setPassword(e.target.value)}
        //         placeholder='Password'
        //     />
        //     <button className="reg_button" onClick={registerHandler}>Register</button>
        // </div>
    )
}

export default Register;
