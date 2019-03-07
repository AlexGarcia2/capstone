import React from 'react';
import About from './About';
import News from './News';
import Sponsor from './Sponsor';
import { Parallax } from 'react-scroll-parallax';
import ball from '../assets/rugbyBall.jpg';
import kick from '../assets/kick.jpg';
import scrum from '../assets/scrum.jpg';

const imgTest={
  width:'100vw',
  height:'100vh'
}

const test ={
  backgroundColor:'grey',
  zIndex:'-1'
}

function Home(){
  return (
    <div>
      
      <div>
     <Parallax
            className="firstParallax"
            offsetYMax={20}
            offsetYMin={-20}
            slowerScrollRate
            tag="figure"
        >
          <img style={imgTest} src={ball} />
          </Parallax>
      </div>
          <div style={test}>
          <About/>
        </div>
        <div>
        <Parallax
            className="firstParallax"
            offsetYMax={20}
            offsetYMin={-20}
            slowerScrollRate
            tag="figure"           
        >
          <img style={imgTest} src={kick} />
          </Parallax>
        </div>
        <div style={test}>
          <News/>
        </div>
        <div>
        <Parallax
            className="firstParallax"
            offsetYMax={20}
            offsetYMin={-20}
            slowerScrollRate
            tag="figure"
        >
          <img style={imgTest} src={scrum} />
          </Parallax>
        </div>
        <div style={test}>
        <Sponsor/>
        </div>
    </div>
  );
}

export default Home;
