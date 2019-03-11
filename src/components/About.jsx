import React from 'react';
import ball from '../assets/rugbyBallNight.jpg';

const card={
  margin:'50px',
  padding:'10px',
  backgroundColor:'#fff9e7',
  boxShadow:'2px 2px 5px grey',
  borderRadius:'5px',
  background: 'rgba(255, 255, 255, 0.5)',
  gridRow: '1/2'
}
const fontColor={
  color:'black'
}



function About(){
  return (
    <div style={card} >
      <div >

      <h1>mission statement</h1>

      <div>
        <img src={ball} />
      </div>

      <div>

        <p>"The Salem Rugby Club (SRC) renews a proud tradition of rugby in Salem that originated in the 1970’s under the “Capital City Rugby Club.” The Capital City Rugby Club practiced and played on the Oregon State hospital field located at D Street and 25th. The Salem Rugby Club can often be found practicing on this very same field."</p>

        <p>"All SRC teams now claim Claggett Creek Park in Keizer, OR as their home pitch for all league matches."</p>
      </div>


      </div>


    </div>
  );
}

export default About;
