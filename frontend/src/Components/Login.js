import axios from "axios";
import { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import { UserContext } from "../Hooks/UserContext";
import '../Styles/Login.css';



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
        <div className="container">
            {/* <h1>user_in_context = {user}</h1> */}
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
            <Link to="/register" className="link">Register</Link>
            {/* <Link to="/" className="link">Home</Link> */}
        </div>
    )
}

export default Login;
