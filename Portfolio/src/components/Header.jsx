import React from 'react';
import Navbar from './Nav';

const styles = {
    headerstyle: {
        backgroundImage: 'url("/Images/background1.jpg")',
        backgroundSize: 'cover',
        backgroundrepeat: 'no-repeat',
        padding: '0.5rem 0',
        display: 'flex',
        justifyContent: 'space-between',
        minHeight: '200px',
    },
    headingStyle: {
        margin: '2rem',
        color: 'gold',
        fontSize: '60px',
        textAlign: 'center',
    },
};

function Header() {
    return (
        <header style={styles.headerstyle}>
            <h1 style={styles.headingStyle}>Lenworth Miller</h1>
            <Navbar />
        </header>
    );
}

export default Header;