// import axios from "axios";
// import { useState } from "react";
// import { Link } from 'react-router-dom';


// const Login = () => {
 
//     const [email, setEmail] = useState([{}])
//     const [password, setPassword] = useState([{}])
//     const [status, setStatus] = useState()
//     const [userId, setUserId] = useState()

//     const loginHandler = () => {
//         axios.post('http://127.0.0.1:8000/user/login', {'email': email, 'password': password})
//         .then(res => {
            
//             setStatus(res.data['status']);
//             setUserId(res.data['user_id']);
//             // {status == 'SUCCESS' ? (setUserId(res.data['user_id'])) : (setUserId('No_user'))};
//         })

//     }

//     return (
//         <>
//         <div>
//             <h2>Login</h2>
//         </div>

//         {/* Main Logic code for login */}
//         <input
//             onChange= {
//             e => setEmail(e.target.value)
//             }
//             placeholder='Email'
//         />

//         <input
//             onChange= {
//             e => setPassword(e.target.value)
//             }
//             placeholder='Password'
//         />
    
//         <button onClick={loginHandler}>Log in</button>

//         <h1>{status}</h1>
//         <h1>{userId}</h1>

//         {/* Redirect to Register */}

//         <Link to="/register">Register</Link>

        
//         </>
//     )
// }
// export default Login


import axios from "axios";
import { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import { UserContext } from "../Hooks/UserContext";
import '../Styles/Login.css';



const Login = () => {

    const {user, setUser} = useContext(UserContext);
 
    const [email, setEmail] = useState([{}])
    const [password, setPassword] = useState([{}])
    const [status, setStatus] = useState()
    const [userId, setUserId] = useState()

    const loginHandler = () => {
        axios.post('http://127.0.0.1:8000/user/login', {'email': email, 'password': password})
        .then(res => {
            setStatus(res.data['status']);
            setUserId(res.data['user_id']);
            if ({status} == 'SUCCESS') {setUser(userId)};
            // {status == 'SUCCESS' ? (setUserId(res.data['user_id'])) : (setUserId('No_user'))};
        })
    }

    return (
        <div className="container">
            <h2 className="title">Login</h2>
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
            <button className="button" onClick={loginHandler}>Log in</button>
            <h1>{status}</h1>
            <h1>{userId}</h1>
            <Link to="/register" className="link">Register</Link>
        </div>
    )
}

export default Login;
