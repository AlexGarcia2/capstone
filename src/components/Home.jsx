import React from 'react';
import About from './About';
import News from './News';
import Sponsor from './Sponsor';
import { Parallax } from 'react-scroll-parallax';
import ball from '../assets/rugbyBallNight.jpg';
import lostBoy from '../assets/lostBoy.jpg';
import back from '../assets/rugbyBackground.jpg';
import kick from '../assets/kick.jpg';

const imgTest={
  width:'100vw',
  height:'100vh'
}
const marg={
  marginTop:'50px'
}
const center={
  positionAlign:'center'
}



function Home(){
  return (
    <div style={center}>
      
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
            offsetYMax={80}
            offsetYMin={-20}
            fasterScrollRate
            tag="figure"           
        >
          <img style={imgTest} src={back} />
            
          </Parallax>
        </div>

        <div>
        <Parallax
            className="firstParallax"
            offsetYMax={20}
            offsetYMin={-20}
            slowerScrollRate
            tag="figure"           
        >
            <div>
              <News/>
            </div>
          </Parallax>
        </div>

        <div>
        <Parallax
            className="firstParallax"
            offsetYMax={20}
            offsetYMin={-20}
            fasterScrollRate
            tag="figure"
        >
          <img style={imgTest} src={lostBoy} />
        <div>
        <Sponsor/>
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
          <img style={imgTest} src={kick} />
          </Parallax>
        </div>
    </div>
  );
}

export default Home;
