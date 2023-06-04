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

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#d9d9d9', //fckn pastel grey bro
    },
    title: {
        color: '#5B6C87', // dis pastel blue, we can change all dese colors if they look like ass
    },
    input: {
        margin: '10px 0',
        padding: '10px',
        width: '200px',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '#f2f2f2', // pastel yellow
    },
    button: {
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '#FFABAB', // pastel red
        color: 'white',
        cursor: 'pointer',
    },
    link: {
        color: '#89CFF0', // pastel blue
    },
};

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
        <div style={styles.container}>
            <h2 style={styles.title}>Login</h2>
            <input
                style={styles.input}
                onChange={e => setEmail(e.target.value)}
                placeholder='Email'
            />
            <input
                style={styles.input}
                type="password"
                onChange={e => setPassword(e.target.value)}
                placeholder='Password'
            />
            <button style={styles.button} onClick={loginHandler}>Log in</button>
            <h1>{status}</h1>
            <h1>{userId}</h1>
            <Link to="/register" style={styles.link}>Register</Link>
        </div>
    )
}

export default Login;
