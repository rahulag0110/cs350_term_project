import axios from "axios";
import { useState } from "react";

const Register = () => {

    const [name, setName] = useState([{}])
    const [email, setEmail] = useState([{}])
    const [password, setPassword] = useState([{}])

    // useEffect(() => {
    //     axios.get('http://')
    //     .then(response)
    // })

    const registerHandler = () => {
        axios.post('http://127.0.0.1:8000/user/register', {'name':name, 'email': email, 'password': password})
        .then(res => console.log(res))
    }


    return (
        <>
        <input
            onChange= {
            e => setName(e.target.value)

            }
            placeholder='Name'
        />

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
    
        <button onClick={registerHandler}>Register</button>
        </>
    
    
    )
}

export default Register
