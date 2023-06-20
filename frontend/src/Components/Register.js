import axios from "axios";
import { useState } from "react";
import "../Styles/Register.css"


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
        <div className="reg_container">
            <div className="logo"></div>
            <h2 className="reg_title">Register</h2>
            <input
                className="reg_input"
                onChange={e => setName(e.target.value)}
                placeholder='Name'
            />
            <input
                className="reg_input"
                onChange={e => setEmail(e.target.value)}
                placeholder='Email'
            />
            <input
                className="reg_input"
                type="password"
                onChange={e => setPassword(e.target.value)}
                placeholder='Password'
            />
            <button className="reg_button" onClick={registerHandler}>Register</button>
        </div>
    )
}

export default Register;
