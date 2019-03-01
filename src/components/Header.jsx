import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <h1>Salem Rugby</h1>
      <Link to="/">Home</Link> | <Link to="/Contact">Contact</Link> | <Link to="/Teams">Teams</Link> | <Link to="/Events">Events</Link>
    </div>
  );
}

export default Header;
