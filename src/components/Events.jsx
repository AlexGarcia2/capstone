import React from 'react';
import News from'./News';
import { Link } from 'react-router-dom';

function Events(){
  return (
    <div>
      <h1>Events information</h1>
      <div>
         <p>need to place a calandar in this spot . also need to figure out if you can hook it up to google calandar</p>
      </div>
      <News/>
    </div>
  );
}

export default Events;