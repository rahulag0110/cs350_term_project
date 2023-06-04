import axios from "axios";
import { useState } from "react";

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#d9d9d9', // pastel grey
    },
    title: {
        color: '#5B6C87', // pastel blue
    },
    input: {
        margin: '10px 0',
        padding: '10px',
        width: '200px',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '#F2F2F2', // pastel yellow
    },
    button: {
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '#FFABAB', // pastel red
        color: 'white',
        cursor: 'pointer',
    },
};

const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const registerHandler = () => {
        axios.post('http://127.0.0.1:8000/user/register', {'name':name, 'email': email, 'password': password})
        .then(res => console.log(res))
    }

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Register</h2>
            <input
                style={styles.input}
                onChange={e => setName(e.target.value)}
                placeholder='Name'
            />
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
            <button style={styles.button} onClick={registerHandler}>Register</button>
        </div>
    )
}

export default Register;
