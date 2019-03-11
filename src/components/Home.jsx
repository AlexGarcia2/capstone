import React from 'react';
import About from './About';
import News from './News';
import Sponsor from './Sponsor';
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
          <News/>
      </div>
      <div>
          <Sponsor/>
      </div>
    </div>
  );
}

export default Home;
