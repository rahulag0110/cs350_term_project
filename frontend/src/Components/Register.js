import axios from "axios";
import { useState } from "react";
import "../Styles/Register.css"


const Register = () => {

    const [name, setName] = useState([{}])
    const [email, setEmail] = useState([{}])
    const [password, setPassword] = useState([{}])


    const registerHandler = () => {
        axios.post('http://127.0.0.1:8000/user/register', {'name':name, 'email': email, 'password': password})
        .then(res => console.log(res))
    }

    return (
        <div className="container">
            <h2 className="title">Register</h2>
            <input
                className="input"
                onChange={e => setName(e.target.value)}
                placeholder='Name'
            />
            <input
                className="input"
                onChange={e => setEmail(e.target.value)}
                placeholder='Email'
            />
            <input
                className="input"
                type="password"
                onChange={e => setPassword(e.target.value)}
                placeholder='Password'
            />
            <button className="button" onClick={registerHandler}>Register</button>
        </div>
    )
}

export default Register;
