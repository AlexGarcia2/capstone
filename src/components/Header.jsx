import React from 'react';
import { Link } from 'react-router-dom';


const navBar={
  position:'relative',
  padding:'10px',
  backgroundColor:'white',
  border:'2px solid black',
  display:'grid',
  gridTemplateColumns:'auto auto'
}
const bottons={
  float:'right'
}

function Header(){
  return (
    <div style={navBar}>
    <div>
      <h1>Salem Rugby</h1>
    </div>
    <div style={bottons}>
      <Link to="/">Home</Link> | <Link to="/Contact">Contact</Link> | <Link to="/Teams">Teams</Link> | <Link to="/Events">Events</Link>
    </div>
    </div>
  );
}

export default Header;
