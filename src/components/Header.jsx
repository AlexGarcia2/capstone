import React from 'react';
import { Link } from 'react-router-dom';


const navBar={
  paddingLeft:'15px',
  position:'relative',
  backgroundColor:'white',
  borderTop:'2px solid black',
  borderBottom:'2px solid black',
  display:'grid',
  gridTemplateColumns:'auto auto'
}
const bottons={
  position:'relative',
  left:'400px',
  top:'40px',
}
const buttonSpace={
  color:'black',
  margin:'10px'
}

function Header(){
  return (
    <div style={navBar}>
    <div>
      <Link style={buttonSpace} to="/"><h1>Salem Rugby</h1></Link>
    </div>
    <div style={bottons}>
     <Link style={buttonSpace} to="/">Home</Link>  <Link style={buttonSpace} to="/Contact">Contact</Link>  <Link style={buttonSpace} to="/Teams">Teams</Link>  <Link style={buttonSpace} to="/Events">Events</Link>
    </div>
    </div>
  );
}

export default Header;
