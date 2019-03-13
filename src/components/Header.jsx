import React from 'react';
import { Link } from 'react-router-dom';


const navBar={
  padding:'10px',
  backgroundColor:'white',
  borderTop:'2px solid black',
  borderBottom:'2px solid black',
  display:'grid',
  gridTemplateColumns:'auto auto',
  width:'100%'
}
const bottons={
  float:'right',
  marginTop:'70px',
  marginLeft:'900px'
}
const buttonSpace={
  color:'black',
  margin:'10px'
}

const title={
  marginLeft:'10px',
  fontFamily:'impact'
}

function Header(){
  return (
    <div style={navBar}>
    <div>
      <h1 style={title}>Salem Rugby</h1>
    </div>
    <div style={bottons}>
     <Link style={buttonSpace} to="/">Home</Link>  <Link style={buttonSpace} to="/Contact">Contact</Link>  <Link style={buttonSpace} to="/Teams">Teams</Link>  <Link style={buttonSpace} to="/Events">Events</Link>
    </div>
    </div>
  );
}

export default Header;
