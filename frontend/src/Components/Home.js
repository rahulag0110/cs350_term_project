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
    banner: {
        backgroundColor: '#5B6C87', // pastel blue
        color: 'white',
        width: '100%',
        padding: '10px 0',
        position: 'absolute',
        top: 0,
        textAlign: 'center',
        fontSize: '1.5em',
    },
    link: {
        textDecoration: 'none',
        margin: '10px 0',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '#FFABAB', // pastel red
        color: 'white',
        cursor: 'pointer',
    },
};

const Home = () => {

    return (
        <div style={styles.container}>
            <div style={styles.banner}>Welcome to EveryDraw!!!</div>
            <Link to="/login" style={styles.link}>Login</Link>
            <Link to="/events" style={styles.link}>Events</Link>
        </div>
    )
}

export default Home;
