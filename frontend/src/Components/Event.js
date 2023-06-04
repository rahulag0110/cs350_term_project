import axios from "axios";
import { useRef, useState, useEffect } from "react";

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
};

const Event = () => {

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Events</h1>
        </div>
    )
}

export default Event;
