import React from 'react';
import News from './News';
import Sponsor from './Sponsor';
import About from './About';

function Home(){
  return (
    <div>
      <About/> 
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
