import React from 'react';
import News from'./News';
import CalendarBoard from './CalendarBoard';

const title={
    margin:'50px',
    background: 'rgba(255, 0, 0, 0.7)',
    width:'500px',
    paddingLeft:'5px',
  }

function Events(){
  return (
    <div>
      <h1 style={title} >Events information</h1>
      <CalendarBoard/>
      <div>

      </div>
      <News/>
    </div>
  );
}

export default Events;
