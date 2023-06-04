import axios from "axios";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
    link: {
        marginTop: '20px',
        color: '#5B6C87',
        textDecoration: 'underline',
        cursor: 'pointer',
    },
};

const HomeAfterLogin = () => {

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Welcome User!!!</h1>
            <Link style={styles.link} to="/events">Events</Link>
        </div>
    )
}

export default HomeAfterLogin;
