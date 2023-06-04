import { Link } from "react-router-dom";

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f2f2f2', // pastel grey
    },
    title: {
        color: '#5B6C87', // pastel blue
    },
    link: {
        color: '#89CFF0', // pastel blue
    },
};

const HomeBeforeLogin = () => {

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Welcome to EveryDraw!!!</h1>
            <ul>
                <li>
                    <Link to="/login" style={styles.link}>Login</Link>
                </li>
            </ul>
        </div>
    )
}

export default HomeBeforeLogin;
