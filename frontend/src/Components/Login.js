import axios from "axios";
import { useRef, useState, useEffect } from "react";

const Login = () => {

    const [email, setEmail] = useState([{}])
    const [password, setPassword] = useState([{}])

    const loginHandler = () => {
        axios.post('http://127.0.0.1:8000/user/login', {'email': email, 'password': password})
        .then(res => console.log(res))
    }


    return (
        <>

        <input
            onChange= {
            e => setEmail(e.target.value)
            }
            placeholder='Email'
        />

        <input
            onChange= {
            e => setPassword(e.target.value)
            }
            placeholder='Password'
        />
    
        <button onClick={loginHandler}>Log in</button>
        
        </>
    )
}
export default Login