import React from 'react';
import About from './About';
import News from './News';
import Sponsor from './Sponsor';
import ball from '../assets/rugbyBallNight.jpg';
import lostBoy from '../assets/lostBoy.jpg';
import back from '../assets/rugbyBackground.jpg';


const imgTest={
  width:'1200px',
  height:'800px',

}

const card={

  padding:'10px',
  backgroundColor:'#FF875E'
}




function Home(){
  return (
    <div>
      <div>
        <div style={card}>

        <img src={ball} />
          <About/>
        </div>
      </div>


      <div>
        <div style={card}>
        <img src={back} />

          <News/>
        </div>
      </div>


      <div>
        <div style={card}>
        <img src={lostBoy} />
          <Sponsor/>
        </div>

      </div>



    </div>
  );
}

export default Home;
