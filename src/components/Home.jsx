import React from 'react';
import About from './About';
import News from './News';
import Sponsor from './Sponsor';

import lostBoy from '../assets/lostBoy.jpg';
import back from '../assets/rugbyBackground.jpg';


const imgTest={
  width:'1200px',
  height:'800px',

}






function Home(){
  return (
    <div>
      <div>
          <About/>
      </div>


      <div>
        <div>


          <News/>
        </div>
      </div>


      <div>
        <div>
        <img src={lostBoy} />
          <Sponsor/>
        </div>

      </div>



    </div>
  );
}

export default Home;
