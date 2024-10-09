import React from 'react';
import Navbar from './Nav';

const styles = {
    headerstyle: {
        backgroundImg: 'url(../../public/images/background1.jpg)',
    },
    headingStyle: {
        color: 'black',
        fontSize: '75px',
        textAlign: 'start',
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