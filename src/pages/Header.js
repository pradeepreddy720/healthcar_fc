import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
        <header className='homeHeader'>
            <h1>Healthcare Portal</h1>
            <Link to="/login" style={linkStyle}>
                <button style={buttonStyle}>Login</button>
            </Link>
        </header>
  );
};

const linkStyle = {
  textDecoration: 'none',
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#61dafb',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  color: 'black',
};

export default Header;
