import React from 'react';
import About from './About';
import News from './News';
import Sponsor from './Sponsor';
import { Parallax } from 'react-scroll-parallax';
import ball from '../assets/rugbyBall.jpg';
import kick from '../assets/kick.jpg';
import scrum from '../assets/scrum.jpg';

const imgTest={
  width:'80%',
  height:'500px'
}
const marg={
  marginTop:'50px'
}



function Home(){
  return (
    <div>
      
      <div style={marg}>
     <Parallax
            className="firstParallax"
            offsetYMax={50}
            offsetYMin={-20}
            slowerScrollRate
            tag="figure"
        >
          <img style={imgTest} src={ball} />
          <div>
          <About/>
        </div>
          </Parallax>
      </div>
        <div>
        <Parallax
            className="firstParallax"
            offsetYMax={60}
            offsetYMin={-20}
            fasterScrollRate
            tag="figure"           
        >
          <img style={imgTest} src={kick} />
            <div>
              <News/>
            </div>
          </Parallax>
        </div>
        <div>
        <Parallax
            className="firstParallax"
            offsetYMax={80}
            offsetYMin={-20}
            slowerScrollRate
            tag="figure"
        >
          <img style={imgTest} src={scrum} />
        <div>
        <Sponsor/>
        </div>
          </Parallax>
        </div>
    </div>
  );
}

export default Home;
