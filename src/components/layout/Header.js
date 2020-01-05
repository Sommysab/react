import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <React.Fragment>
            <header style={headerStyle} >     
                <h1>Item List</h1>       
                <p>
                    <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
                </p>
            </header> 
        </React.Fragment>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

export default Header;