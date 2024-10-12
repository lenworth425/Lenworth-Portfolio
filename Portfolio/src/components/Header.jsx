import React from 'react';
import Navbar from './Nav';

const styles = {
    headerStyle: {
        backgroundImage: 'url("/Images/background4.jpg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        padding: '0.5rem 0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '200px',
    },
    headingStyle: {
        margin: '2rem',
        color: 'gold',
        fontSize: '60px',
        fontFamily: 'cursive',
        textAlign: 'start',
    },
    navWrapperStyle: {
        alignSelf: 'flex-end',
        width: '100%',
    },
};

function Header() {
    return (
        <header style={styles.headerStyle}>
            <h1 style={styles.headingStyle}>Lenworth Miller</h1>
            <div style={styles.navWrapperStyle}>
                <Navbar />
            </div>
        </header>
    );
}

export default Header;